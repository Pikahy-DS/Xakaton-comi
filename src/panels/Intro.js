import React, {Fragment} from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import './Intro.css';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";


const Intro  = ({ id, snackbarError, fetchedUser, userHasSeenIntro, go1}) => {
    return (
        <Panel id= {id} centered = {true}>
            <PanelHeader>
                Коми
            </PanelHeader>
            {(!userHasSeenIntro && fetchedUser) && '' }
                <Fragment>
                    <Group>
                        <Div className = 'User'>
                            {fetchedUser && fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200} />}
                            <h2>Привет, {fetchedUser && fetchedUser.first_name}</h2>
                            <h3>Этот сревис предназначен для мероприятий 100 летия</h3>
                        </Div>
                    </Group>
                    <FixedLayout vertical = 'bottom'>
                        <Div>
                            <Button mode = 'commerce' size = 'xl'onClick = {go1}  >
                                 Я согласен
                            </Button>
                        </Div>
                    </FixedLayout>
                </Fragment>
            {snackbarError}
        </Panel>
    )
};



export default Intro;
