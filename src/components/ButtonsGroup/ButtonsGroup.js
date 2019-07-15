import React from 'react';
import classNames from 'classnames';
import buttons from '../../models/buttons';
import styles from './ButtonsGroup.module.scss';

const ButtonsGroup = ({ setMode, mode }) => {
    const buttonActiveStyle = classNames(
        styles['buttons-group__button'],
        styles['buttons-group__button--active']
    );

    return (
        <div className={styles['buttons-group__container']}>
            { buttons.map((button, index) =>
                <button key={index} id={button.id}
                        className={ button.id === mode
                            ? buttonActiveStyle
                            : styles['buttons-group__button']}
                        onClick={ e => setMode(e.target.id) }>
                    {button.label}
                </button> )}
        </div>
    )
};

export default ButtonsGroup;
