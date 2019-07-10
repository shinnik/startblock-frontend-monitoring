import React from 'react';
import classes from './Tumbler.module.scss';
import constants from '../../constants/constants'
import Arrow from 'react-arrow';
import ReactHover from 'react-hover';
import { PowerSettingsNew } from '@material-ui/icons';

function arrowClass(direction) {
    switch (direction) {
        case 'ru':
            return classes.Arrow__ru;
        case 'rd':
            return classes.Arrow__rd;
        case 'lu':
            return classes.Arrow__lu;
        case 'ld':
            return classes.Arrow__ld;
        default:
            return classes.Arrow;
    }
}

function arrowDirection(direction) {
    switch (direction) {
        case 'l':
            return 'left';
        case 'u':
            return 'up';
        case 'd':
            return 'down';
        default:
            return 'right';
    }
}

function powerIconClass(direction) {
    switch (direction) {
        case 'ru':
            return classes.PowerIcon__RightUp;
        case 'rd':
            return classes.PowerIcon__RightDown;
        case 'lu':
            return classes.PowerIcon__LeftUp;
        case 'ld':
            return classes.PowerIcon__LeftDown;
        case 'l':
            return classes.PowerIcon__Left;
        case 'u':
            return classes.PowerIcon__Up;
        case 'd':
            return classes.PowerIcon__Down;
        case 'r':
            return classes.PowerIcon__Right;
        default:
            throw new Error('Invalid direction');
    }
}

function Tumbler({direction, power, label}) {

    return <div className={arrowClass(direction)}>
            <ReactHover options={{
                followCursor: false,
            }}>
                <ReactHover.Trigger type='trigger'>
                    <Arrow
                        direction={arrowDirection(direction)}
                        shaftWidth={constants.tumblerThickness}
                        shaftLength={constants.tumblerWidth-constants.triangleSize}
                        headWidth={constants.triangleSize}
                        headLength={constants.triangleSize}
                        fill={'#EB5757'}
                    />
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                    <PowerSettingsNew className={powerIconClass(direction)}/>
                </ReactHover.Hover>
            </ReactHover>
        </div>
}

export default Tumbler;
