import React from 'react';
import classNames from 'classnames';
import styles from './PlotHeader.module.scss';

const PlotHeader = () => {

    const traditionalLegendClasses = classNames(
        styles['plot-header__legend'],
        styles['plot-header__legend--traditional']
    );
    const distributedLegendClasses = classNames(
        styles['plot-header__legend'],
        styles['plot-header__legend--distributed']
    );
    const internetLegendClasses = classNames(
        styles['plot-header__legend'],
        styles['plot-header__legend--internet']
    );

    return (
        <div className={styles['plot-header__container']}>
            <div className={styles['plot-header__header-container']}>
                <h2 className={styles['plot-header__header']}>Совокупная стоимость энергии</h2>
            </div>
            <div className={styles['plot-header__legend-container']}>
                <p className={traditionalLegendClasses}>
                    Традиционная энергосистема
                </p>
                <p className={distributedLegendClasses}>
                    Распределенная генерация
                </p>
                <p className={internetLegendClasses}>
                    Интернет энергии
                </p>
            </div>
        </div>
    )
}

export default PlotHeader;
