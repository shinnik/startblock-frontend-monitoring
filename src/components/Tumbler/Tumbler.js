import React, {useState} from 'react';
import classes from './Tumbler.module.scss';
import constants from '../../constants/constants'
import Arrow from 'react-arrow';
import ReactHover from 'react-hover';
import { PowerSettingsNew } from '@material-ui/icons';

function arrowClass(direction, power) {
    if (power)
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
    else
        switch (direction) {
            case 'ru':
                return classes.Arrow_g__ru;
            case 'rd':
                return classes.Arrow_g__rd;
            case 'lu':
                return classes.Arrow_g__lu;
            case 'ld':
                return classes.Arrow_g__ld;
            default:
                return classes.Arrow_g;
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

function tumblerSizes(direction, state) {
    if (state)
        switch (direction) {
            case 'r':
            case 'l':
                return {
                    shaftWidth: constants.tumblerThickness,
                    shaftLength: constants.tumblerWidth-constants.triangleSize*2+5,
                    headWidth: constants.triangleSize,
                    headLength: constants.triangleSize,
                };
            case 'd':
            case 'u':
                return {
                    shaftWidth: constants.tumblerThickness,
                    shaftLength: constants.tumblerWidth-constants.triangleSize,
                    headWidth: constants.triangleSize,
                    headLength: constants.triangleSize,
                };
            case 'ru':
            case 'rd':
            case 'lu':
            case 'ld':
                return {
                    shaftWidth: constants.tumblerThickness,
                    shaftLength: (constants.tumblerWidth-constants.triangleSize)*1.41,
                    headWidth: constants.triangleSize,
                    headLength: constants.triangleSize,
                };
            default:
                throw new Error('Unknown direction.');
        }
    else
        switch (direction) {
            case 'r':
            case 'l':
            case 'd':
            case 'u':
                return {
                    shaftWidth: constants.tumblerThickness/2,
                    shaftLength: constants.tumblerWidth,
                    headWidth: constants.triangleSize,
                    headLength: 0,
                };
            case 'ru':
            case 'rd':
            case 'lu':
            case 'ld':
                return {
                    shaftWidth: constants.tumblerThickness/2,
                    shaftLength: constants.tumblerWidth*1.41,
                    headWidth: constants.triangleSize,
                    headLength: 0,
                };
            default:
                throw new Error('Unknown direction.');
        }
}

function Tumbler({direction, power}) {
    const [state, setState] = useState(power);

    if (state) {
        return <div className={arrowClass(direction, state)}>
            <ReactHover options={{
                followCursor: false,
            }}>
                <ReactHover.Trigger type='trigger'>
                    <Arrow
                        direction={arrowDirection(direction)}
                        {...tumblerSizes(direction, state)}
                        fill={state ? '#EB5757' : '#D0D0D0'}
                        onClick={() => setState(!state)}
                    />
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                    <PowerSettingsNew onClick={() => setState(!state)} className={powerIconClass(direction)} />
                </ReactHover.Hover>
            </ReactHover>
        </div>;
    }
    else {
        return <div className={arrowClass(direction, state)}>
            <ReactHover options={{
                followCursor: false,
            }}>
                <ReactHover.Trigger type='trigger'>
                    <Arrow
                        direction={arrowDirection(direction)}
                        {...tumblerSizes(direction, state)}
                        fill={state ? '#EB5757' : '#D0D0D0'}
                        onClick={() => setState(!state)}
                    />
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                    <PowerSettingsNew onClick={() => setState(!state)} style={{backgroundColor: 'gray'}} className={powerIconClass(direction)}/>
                </ReactHover.Hover>
            </ReactHover>
        </div>;
    }
}

export default Tumbler;
