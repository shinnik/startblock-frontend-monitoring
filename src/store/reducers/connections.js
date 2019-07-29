import * as actionTypes from '../actions/actionTypes';
import {dots} from "../../constants/names";

const initialStore = [
    {
        active: false,
        output: true,
        performance: dots
    },
    {
        active: false,
        output: true,
        performance: dots
    },
    {
        active: false,
        output: true,
        performance: dots
    },
    {
        active: false,
        output: true,
        performance: dots
    },
    {
        active: false,
        output: true,
        performance: dots
    },
    {
        active: false,
        output: true,
        performance: dots
    },
];

function connectionsReducer(state=initialStore, action) {
    switch (action.type) {
        case actionTypes.SET_MODE: {
            switch (action.mode) {
                case 'no_neighbors': {
                    let tmp = Array.from(state);
                    tmp.forEach((value, index, array) => {
                        array[index] = Object.assign({}, value);
                        array[index].active = false;
                    });
                    return tmp;
                }
                case 'limited_network':
                case 'no_network':
                case 'regular': {
                    let tmp = Array.from(state);
                    tmp.forEach((value, index, array) => {
                        array[index] = Object.assign({}, value);
                        array[index].active = true;
                    });
                    return tmp;
                }
                default:
                    throw new Error('Unknown mode.')
            }
        }
        case actionTypes.TUMBLER_TOGGLE: {
            switch (action.payload.id) {
                case 9:
                case 15:
                case 16:
                case 160:
                case 17:
                case 22: {
                    let tmp = Array.from(state);
                    let tmp2 = Object.assign({}, tmp[ [9, 15, 16, 160, 17, 22].indexOf(action.payload.id) ]);
                    tmp2.active = !tmp2.active;
                    tmp[ [9, 15, 16, 160, 17, 22].indexOf(action.payload.id) ] = tmp2;
                    return tmp;
                }
                default:
                    return state;
            }
        }
        case actionTypes.NEW_WEBSOCKET_MESSAGE: {
            switch (action.payload.uri) {
                case 'arrowdirections': {
                    const i = [1, 4, 6, 5, 2, 3].indexOf(action.payload.data.id);
                    const mapIdToIndex = [1, 1, 1, 2, 2, 3];
                    const nodes = ['enode1, enode2, enode3, enode4'];
                    let tmp = Array.from(state);
                    let tmp2 = tmp[ i ];
                    tmp2.performance = action.payload.data.value;
                    tmp2.output = action.payload.data.directionfrom === nodes[ mapIdToIndex[i] - 1 ];
                    tmp2.active = action.payload.data.status;
                    tmp[i] = tmp2;
                    return tmp;
                }
                default:
                    return state;
            }
        }
        default:
            return state;
    }
}


export default connectionsReducer;
