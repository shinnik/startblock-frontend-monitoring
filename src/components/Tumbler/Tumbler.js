import React from 'react';
import classes from './Tumbler.module.scss';
import constants from '../../constants/constants'
import Arrow from 'react-arrow';
import {PowerSettingsNew} from "@material-ui/icons";
import {Box} from "@material-ui/core";

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
            case 'r':
                return classes.Arrow__r;
            case 'l':
                return classes.Arrow__l;
            case 'u':
                return classes.Arrow__u;
            case 'd':
                return classes.Arrow__d;
            default:
                throw new Error('Unknown direction');
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
            case 'r':
                return classes.Arrow_g__r;
            case 'l':
                return classes.Arrow_g__l;
            case 'u':
                return classes.Arrow_g__u;
            case 'd':
                return classes.Arrow_g__d;
            default:
                throw new Error('Unknown direction');
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

function tumblerSizes(direction, state, koeff) {
        switch (direction) {
            case 'r':
            case 'l':
            case 'd':
            case 'u':
            case 'ru':
            case 'rd':
            case 'lu':
            case 'ld':
                return {
                    shaftWidth: constants.tumblerThickness,
                    shaftLength: constants.tumblerWidth*(koeff ? koeff : 1)-constants.triangleSize*state+constants.triangleSize*(koeff ? koeff : 1)-constants.tumblerThickness*1.5,
                    headWidth: constants.triangleSize,
                    headLength: constants.triangleSize*state,
                };
            default:
                throw new Error('Unknown direction.');
        }

}



function Tumbler({direction, power: state, id, dispatch, koeff, hovered, noHover}) {
    const handle = () => {
        dispatch({id, state: !state})
    };

        return <Box style={{pointerEvents: noHover ? "none" : "auto"}} className={arrowClass(direction, state)}>
                    <Arrow
                        stroke
                        unclosed={true}
                        className={classes.PureArrow}
                        direction={arrowDirection(direction)}
                        {...tumblerSizes(direction, state, koeff)}
                        fill={state ? '#EB5757' : '#D0D0D0'}
                        onClick={handle}
                    />
            {hovered && <Box style={{display: 'flex'}} onClick={handle} ><PowerSettingsNew style={{backgroundColor: state ? '#EB5757' : '#878787', width: constants.triangleSize, height: constants.triangleSize}} className={powerIconClass(direction)}/> </Box>}
        </Box>;
}

export default Tumbler;
