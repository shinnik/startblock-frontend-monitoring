import React from 'react';
import classes from './EqImg.module.scss';

const EqImg=({type}) => {
    switch (type) {
        case 1:
            return <div className={classes.EqImg}>Z1</div>
        default:
            return <div className={classes.EqImg}/>
    }
};

export default EqImg;
