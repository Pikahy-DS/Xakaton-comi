import React, {FunctionComponent, HTMLAttributes} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Sliders from "../components/Sliders";
import './Intro.css';
import './Banan.css';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import './Persik.css';
import persik from "../img/persik.png";
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import View from '@vkontakte/vkui/dist/components/View/View';
import './Intro.css';
import './Banan.css';
import {IOS, platform} from "@vkontakte/vkui";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import banan from '../img/banan.jpg';
import './Persik.css';
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import Counter from "@vkontakte/vkui/dist/components/Counter/Counter";
import Icon28UnfavoriteOutline from '@vkontakte/icons/dist/28/unfavorite_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28GridSquareOutline from '@vkontakte/icons/dist/28/grid_square_outline';
import Icon20GlobeOutline from '@vkontakte/icons/dist/20/globe_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
const Home = ({ id, go, fetchedUser, fetchedState, snackbarError }) => (
	<Panel id={id}>
		<PanelHeader><Cell before = {<Icon28HomeOutline fill= "var(--accent)" />} ><h2 className="CENTER" src={persik} alt="CENTER">Личный кабинет</h2></Cell></PanelHeader>
		{/*{fetchedState && <Sliders fetchedState = {fetchedState} snackbarError={snackbarError} />}*/}
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<br/>
		<Group separator="hide" header={<Header mode="secondary">Посещенные мероприятия</Header>}>
			<br/>
			<CardGrid>
				<Card size="l" mode="shadow">
					<div style={{ height: 15 }} />
					<h2 className="H2" src= {persik} alt="Text">Хакатон Вконтакте</h2>
					<Div >
						<Header  mode="secondary"   aside={<Link> <Button  color = '#000000' mode = 'tertiary' size="m" level="1" >
							Сыктывкар
						</Button></Link>}>
							Место проведения:
						</Header>
						<Header  mode="secondary" indicator={<Counter size="s" mode="commerce" ></Counter>}  aside={<Link> <Button  className = 'But' src={persik} alt="BUT" mode = 'commerce' size="m" level="1" onClick={go} data-to="home">
							Оставить Отзыв
						</Button></Link>}>
							23 октября
						</Header>
					</Div>
				</Card>
			</CardGrid>
		</Group>
		<br/>
		<Group separator="hide" header={<Header mode="prominent">Сегодня</Header>}>
			<br/>
			<CardGrid>
				<Card size="l" mode="shadow">
					<div style={{ height: 15 }} />
					<h2 className="H2" src= {persik} alt="Text">Республиканский фестиваль современной коми песни «Василей»</h2>
					<Div >
						<Header  mode="secondary"   aside={<Link> <Button  color = '#000000' mode = 'tertiary' size="m" level="1" >
							Сыктывкар
						</Button></Link>}>
							<p>14:00 - 18:00</p>
						</Header>
						<Header  mode="secondary" indicator={<Counter size="s" mode="prominent" >16 часов</Counter>}  aside={<Link> <Button  className = 'But' src={persik} alt="BUT" mode = 'destructive' size="m" level="1" onClick={go} data-to="home">
							Удалить
						</Button></Link>}>
							Осталось:
						</Header>
					</Div>
				</Card>
			</CardGrid>
		</Group>
		<Group separator="hide">
			<CardGrid>
				<Card size="m">
					<div style={{ height: 0 }} />
					<Button mode="secondary" before={<Icon28GridSquareOutline/>} onClick={go} data-to="banan" size="m">Мероприятия</Button>
				</Card>
				<Card size="m">
					<div style={{ height: 0 }} />
					<Button mode="secondary" before={<Icon28Notifications/>} onClick={go} data-to="banan" size="m">Уведомления</Button>
				</Card>
				<Card size="m">
					<div style={{ height: 0 }} />
					<Button mode="secondary" before={<Icon20GlobeOutline/>} onClick={go} data-to="persik" size="m">Экскурсии</Button>
				</Card>
			</CardGrid>
		</Group>
	</Panel>
);


Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
