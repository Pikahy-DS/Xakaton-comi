import React, {FunctionComponent, HTMLAttributes} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
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
import PropTypes from "prop-types";
import persik from '../img/persik.png';
import banan from '../img/banan.jpg';
import './Persik.css';
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Icon28GridSquareOutline from '@vkontakte/icons/dist/28/grid_square_outline';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Link from "@vkontakte/vkui/dist/components/Link/Link";
import Counter from "@vkontakte/vkui/dist/components/Counter/Counter";
import Icon28UnfavoriteOutline from '@vkontakte/icons/dist/28/unfavorite_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';

const osName = platform();

const Cards = props  => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        ><Cell before = {<Icon28GridSquareOutline fill= "var(--accent)" />} ><h2 className="CENTER" src={persik} alt="CENTER">Мероприятия</h2>
        </Cell>
        </PanelHeader>
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
                        <Header  mode="secondary" indicator={<Counter size="s" mode="prominent" >16</Counter>}  aside={<Link> <Button  className = 'But' src={persik} alt="BUT" mode = 'outline' size="m" level="1" onClick={props.go} data-to="home">
                            Регистрация
                        </Button></Link>}>
                            Количество мест
                        </Header>
                    </Div>
                </Card>
            </CardGrid>
        </Group>
        <Group separator="hide" header={<Header mode="secondary">Завтра</Header>}>
            <CardGrid>
                <Card size="l" mode="shadow">
                    <div style={{ height: 15 }} />
                    <h2 className="H2" src= {persik} alt="Text">Участие в XV Международной туристской выставке «Интурмаркет»</h2>
                    <Div >
                        <Header  mode="secondary"   aside={<Link> <Button  color = '#000000' mode = 'tertiary' size="m" level="1" >
                            Сыктывкар
                        </Button></Link>}>
                            <p>10:00 - 18:00</p>
                        </Header>
                        <Header  mode="secondary" indicator={<Counter size="s" mode="prominent" >1</Counter>}  aside={<Link> <Button  className = 'But' src={persik} alt="BUT" mode = 'commerce' size="m" level="1" onClick={props.go} data-to="home">
                            Регистрация
                        </Button></Link>}>
                            Количество мест
                        </Header>
                    </Div>
                </Card>
            </CardGrid>

        </Group>
        <Group separator="hide" header={<Header mode="secondary">Октябрь</Header>}>
            <CardGrid>
                <Card size="l" mode="shadow">
                    <div style={{ height: 15 }} />
                    <h2 className="H2" src= {persik} alt="Text">III Северный культурный форум</h2>
                    <Div >
                        <Header  mode="secondary"   aside={<Link> <Button  color = '#000000' mode = 'tertiary' size="m" level="1" >
                            Воркута
                        </Button></Link>}>
                            <p>29 октября</p>
                        </Header>
                        <Header  mode="secondary" indicator={<Counter size="s" mode="secondary" >50</Counter>}  aside={<Link> <Button  className = 'But' src={persik} alt="BUT" mode = 'commerce' size="m" level="1" onClick={props.go} data-to="home">
                            Регистрация
                        </Button></Link>}>
                            Количество мест
                        </Header>
                    </Div>
                </Card>
            </CardGrid>

        </Group>
    </Panel>



);

Cards.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};




export default Cards;