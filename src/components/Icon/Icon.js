import React from 'react';
import I from './icons/I.svg';
import D from './icons/Triangle.svg';
import E from './icons/E.svg';
import A from './icons/A.svg';

import styles from './Icon.module.scss';

const Icon = () => {

    const logos = [I, D, E, A];

    const stringArr = varObj => Object.keys(varObj);
    return (
        <div className={styles.LogoContainer}>
            { logos.map((logo, index) => <img key={index} className={styles[stringArr({ I, D, E, A })[index]]} src={logo}/>) }
        </div>
    )
}

export default Icon;
