import React, { useEffect } from 'react';
import classNames from 'classnames';
import buttons from '../../models/buttons';
import styles from './ButtonsGroup.module.scss';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://onder2.herokuapp.com/preset');

const ButtonsGroup = ({ setMode, mode }) => {

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
    }, []);

    const buttonActiveStyle = classNames(
        styles['buttons-group__button'],
        styles['buttons-group__button--active']
    );
    const handleClick = (e) => {
        client.send(JSON.stringify({ time: Date.now(), value: e.target.id }));
        // remove when receiving will work:
        setMode(e.target.id)
    };
    return (
        <div className={styles['buttons-group__container']}>
            { buttons.map(button =>
                <button key={button.id} id={button.id}
                        className={ button.id === mode
                            ? buttonActiveStyle
                            : styles['buttons-group__button']}
                        onClick={handleClick}>
                    {button.label}
                </button> )}
        </div>
    )
};

export default ButtonsGroup;
