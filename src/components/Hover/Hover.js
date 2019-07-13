import React from 'react';
import classes from './Hover.module.scss';

function Hover({children, component}) {
    return (
        <div className={classes.hover}>
            <div className={classes.hover__no_hover}>{children}</div>
            <div className={classes.hover__hover}>{component}</div>
        </div>
    );
}

export default Hover;
