import * as actionTypes from '../actions/actionTypes';
import {dots} from "../../constants/names";
import * as typeNames from "../../constants/generatorTypeNames";


const initialStore = [
    {
        generator: {
            type: typeNames.ACCUMULATOR,
            output: false,
            performance: dots,
            active: false,
        },
        load: {
            performance: dots,
            active: false,
        },
        net: {
            active: false,
            performance: dots,
        },
        profile: {
            name: 'Alpha',
            money: dots
        },
        active: false
    },
    {
        generator: {
            type: typeNames.SOLAR_PANEL_DOUBLE,
            output: false,
            performance: dots,
            active: false,
        },
        load: {
            performance: dots,
            active: false,
        },
        net: {
            active: false,
            performance: dots,
        },
        profile: {
            name: 'Beta',
            money: dots
        },
        active: false
    },
    {
        generator: {
            type: typeNames.BENZOGENERATOR,
            output: false,
            performance: dots,
            active: false,
        },
        load: {
            performance: dots,
            active: false,
        },
        net: {
            active: false,
            performance: dots,
        },
        profile: {
            name: 'Gamma',
            money: dots
        },
        active: false
    },
    {
        generator: {
            type: typeNames.SOLAR_PANEL,
            output: false,
            performance: dots,
            active: false,
        },
        load: {
            active: false,
            performance: dots,
        },
        net: {
            active: false,
            performance: dots,
        },
        profile: {
            name: 'Delta',
            money: dots
        },
        active: false
    },
];

function energyCellsReducer(state = initialStore, action) {
    switch (action.type) {
        // case actionTypes.SET_MODE: {
        //     switch (action.mode) {
        //         case 'no_neighbors':
        //         case 'regular': {
        //             let tmp = Array.from(state);
        //             tmp.forEach((value, index, array) => {
        //                 let tmp2 = Object.assign({}, array[index]);
        //                 tmp2.generator = Object.assign({}, tmp2.generator);
        //                 tmp2.net = Object.assign({}, tmp2.net);
        //                 tmp2.load = Object.assign({}, tmp2.load);
        //                 tmp2.generator.active = true;
        //                 tmp2.net.active = true;
        //                 tmp2.load.active = true;
        //                 array[index] = tmp2;
        //             });
        //             return tmp;
        //         }
        //         case 'limited_network':
        //             {
        //                 let tmp = Array.from(state);
        //                 tmp.forEach((value, index, array) => {
        //                     let tmp2 = Object.assign({}, array[index]);
        //                     tmp2.generator = Object.assign({}, tmp2.generator);
        //                     tmp2.net = Object.assign({}, tmp2.net);
        //                     tmp2.load = Object.assign({}, tmp2.load);
        //                     tmp2.generator.active = true;
        //                     tmp2.net.active = true;
        //                     tmp2.load.active = true;
        //                     array[index] = tmp2;
        //                 });
        //                 return tmp;
        //             }
        //         case 'no_network': {
        //             let tmp = Array.from(state);
        //             tmp.forEach((value, index, array) => {
        //                 let tmp2 = Object.assign({}, array[index]);
        //                 tmp2.generator = Object.assign({}, tmp2.generator);
        //                 tmp2.net = Object.assign({}, tmp2.net);
        //                 tmp2.load = Object.assign({}, tmp2.load);
        //                 tmp2.generator.active = true;
        //                 tmp2.net.active = false;
        //                 tmp2.load.active = true;
        //                 array[index] = tmp2;
        //             });
        //             return tmp;
        //         }
        //         default:
        //             throw new Error('Unknown mode');
        //     }
        // }
        case actionTypes.TUMBLER_TOGGLE: {
            switch (action.payload.id) {
                case 7:
                case 19:
                case 11:
                case 24: {
                    let tmp = Array.from(state);
                    const i = [7, 11, 19, 24].indexOf(action.payload.id);
                    let tmp2 = Object.assign({}, tmp[i]);
                    tmp2.generator = Object.assign({}, tmp2.generator);
                    tmp2.generator.active = !tmp2.generator.active;
                    tmp[i] = tmp2;
                    return tmp;
                }
                case 12:
                case 13:
                case 20:
                case 25: {
                    let tmp = Array.from(state);
                    const i = [12, 13, 20, 25].indexOf(action.payload.id);
                    let tmp2 = Object.assign({}, tmp[i]);
                    tmp2.load = Object.assign({}, tmp2.load);
                    tmp2.load.active = !tmp2.load.active;
                    tmp[i] = tmp2;
                    return tmp;
                }
                case 3:
                case 5:
                case 27:
                case 29: {
                    let tmp = Array.from(state);
                    const i = [3, 5, 27, 29].indexOf(action.payload.id);
                    let tmp2 = Object.assign({}, tmp[i]);
                    tmp2.net = Object.assign({}, tmp2.net);
                    tmp2.net.active = !tmp2.net.active;
                    tmp[i] = tmp2;
                    return tmp;
                }
                default:
                    return state;
            }
        }
        case actionTypes.NEW_WEBSOCKET_MESSAGE: {
            // console.log('energuCell NEW_WEBSOCKET_MESSAGE:', action.payload);
            switch (action.payload.type) {
                case 'cells': {
                    let tmp = [...state];
                    for (const cell in action.payload.data) {
                        if (action.payload.data.hasOwnProperty(cell)) {
                            tmp[action.payload.data[cell].id - 1].profile.money = action.payload.data[cell].value && Number(action.payload.data[cell].value).toFixed(1);
                            tmp[action.payload.data[cell].id - 1].active = action.payload.data[cell].status;
                        }
                    }
                    return tmp;
                }
                case 'arrows': {
                    let tmp = [...state];
                    for (const cell in action.payload.data) {
                        if (action.payload.data.hasOwnProperty(cell)) {
                            switch (action.payload.data[cell].id) {
                                case 1:
                                case 2:
                                case 3:
                                case 4: {
                                    let tmp2 = tmp[action.payload.data[cell].id - 1];
                                    tmp2.net.performance = action.payload.data[cell].value && Number(action.payload.data[cell].value).toFixed(3);
                                    tmp2.net.active = action.payload.data[cell].status;
                                    tmp[action.payload.data.id - 1] = tmp2;
                                    break;
                                }
                                case 5:
                                case 9:
                                case 7:
                                case 11: {
                                    const i = [5, 9, 7, 11].indexOf(action.payload.data[cell].id);
                                    let tmp2 = tmp[i];
                                    tmp2.generator.performance = action.payload.data[cell].value && Number(action.payload.data[cell].value).toFixed(3);
                                    tmp2.generator.active = action.payload.data[cell].status;
                                    tmp[i] = tmp2;
                                    break;
                                }
                                case 6:
                                case 10:
                                case 8:
                                case 12: {
                                    const i = [6, 10, 8, 12].indexOf(action.payload.data[cell].id);
                                    let tmp2 = tmp[i];
                                    tmp2.load.performance = action.payload.data[cell].value && Number(action.payload.data[cell].value).toFixed(3);
                                    tmp2.load.active = action.payload.data[cell].status;
                                    tmp[i] = tmp2;
                                    break;
                                }
                                default: {
                                    throw new Error('Undefined id of arrow.')
                                }
                            }
                        }
                    }
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

export default energyCellsReducer;
