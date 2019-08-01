import React from 'react';
import group from '../energyRouterIcons/group.svg';
import classes from './EnergyRouterIcon.module.scss';

function EnergyRouterIcon() {
    return (
        <div className={classes.EnergyRouterIconContainer}>
            <img alt={'Энергороутер'} src={group} style={{zoom: 1.3}} />
        </div>
    );
}

export default EnergyRouterIcon;
