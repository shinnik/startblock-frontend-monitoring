import React from 'react';
import Icon from "../Icon/Icon";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";

import styles from './Header.module.scss';
import useWindowSize from "@rehooks/window-size";

const Header = ({ setMode, mode }) => {
    const windowSize = useWindowSize();

    return (
        <div style={{zoom: windowSize.innerWidth/1200}} className={styles['header__container']}>
            <Icon/>
            <h1 className={styles['header__label']}>Мониторинг</h1>
            <ButtonsGroup setMode={setMode} mode={mode}/>
        </div>
    )
};

export default Header;
