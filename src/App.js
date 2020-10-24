import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Banan from './panels/Banan';
import Intro from './panels/Intro';
import Snackbar from '@vkontakte/vkui/dist/components/Snackbar/Snackbar';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24ErrorCircle from '@vkontakte/icons/dist/24/error';

const ROUTES = {
	HOME: 'home',
	INTRO: 'intro',
	PERSIK: 'persik',
	BANAN: 'banan'
};

const STORAGE_KEYS = {
	STATUS: 'status',
	STATE: 'state',

}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.INTRO);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [userHasSeenIntro, setUserHasSeenIntro] = useState(false);
	const [SnackBar, setSnackBar] = useState(false);
	const [fetchedState, setFetchedState] = useState(false);


	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const storageData = await bridge.send('VKWebAppStorageGet', {keys: Object.values(STORAGE_KEYS)});
			console.log(storageData);
			const data = {};
			storageData.keys.forEach(({key, value } ) => {
				try {
					data[key] = value ? JSON.parse(value) : {};
					switch (key){
						case STORAGE_KEYS.STATUS:
							if (data[key].hasSeenIntro){ // В этом условии регулируется показ 0 страницы
								setActivePanel(ROUTES.HOME); //Главная страница
								setUserHasSeenIntro(true);
							}
							break;
						case STORAGE_KEYS.STATE:
							setFetchedState(data[key]);
							break;

						default:
							break;

					}
				} catch (error){
					setSnackBar(<Snackbar
					layout = 'vertical'
					onClose = {() => setSnackBar(null)}
					before = {<Avatar size = {24} style = {{backgroundColor: 'var(--dynamic-red)' }}>
						<Icon24ErrorCircle fill = '#fff' width = '14' height = '14' />
					</Avatar>}
					duraction = {900}
					>
						Произошла ошибка с получением данных.
					</Snackbar>)

				}
			} );
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	const go1 = panel => {
		setActivePanel(panel);
	};

	const viewIntro = async function () {
		try {
			await bridge.send("VKWebAppStorageSet", {
				key: STORAGE_KEYS.STATUS,
				value: JSON.stringify({
					hasSeenIntro: true
				})
			});
			go1(ROUTES.HOME)

		} catch (error){
			setSnackBar(<Snackbar
				layout = 'vertical'
				onClose = {() => setSnackBar(null)}
				before = {<Avatar size = {24} style = {{backgroundColor: 'var(--dynamic-red)' }}>
					<Icon24ErrorCircle fill = '#fff' width = '14' height = '14' />
				</Avatar>}
				duration = {900}
			>
				Произошла ошибка с отправкой данных.
			</Snackbar>)

		}
	}

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id={ROUTES.HOME} fetchedUser={fetchedUser} go={go} snackbarError = {Snackbar} fetchedState = {fetchedState}/>
			<Persik id={ROUTES.PERSIK} go={go} snackbarError = {Snackbar} />
			<Banan id = {ROUTES.BANAN} go = {go} snackbarError = {Snackbar} />
			<Intro id = {ROUTES.INTRO} fetchedUser={fetchedUser} go1 = {viewIntro} snackbarError = {Snackbar} userHasSeenIntro = {userHasSeenIntro} />
		</View>
	);
}

export default App;

