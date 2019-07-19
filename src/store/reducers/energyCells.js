import * as actionTypes from '../actions/actionTypes';

const initialStore = [
    {
        generator: {
            type: 1,
            output: false,
            performance: 0.052,
            active: true,
        },
        load: {
            performance: 0.052,
            active: true,
        },
        net: {
            active: false,
            performance: 0.052,
        },
        profile: {
            name: 'Alpha',
            money: 100
        }
    },
    {
        generator: {
            type: 2,
            output: false,
            performance: 0.052,
            active: true,
        },
        load: {
            performance: 0.052,
            active: true,
        },
        net: {
            active: true,
            performance: 0.052,
        },
        profile: {
            name: 'Beta',
            money: 100
        }
    },
    {
        generator: {
            type: 0,
            output: false,
            performance: 0.052,
            active: true,
        },
        load: {
            performance: 0.052,
            active: true,
        },
        net: {
            active: true,
            performance: 0.052,
        },
        profile: {
            name: 'Gamma',
            money: 100
        }
    },
    {
        generator: {
            type: 1,
            output: false,
            performance: 0.052,
            active: true,
        },
        load: {
            active: true,
            performance: 0.052,
        },
        net: {
            active: true,
            performance: 0.052,
        },
        profile: {
            name: 'Delta',
            money: 100
        }
    },
];

function energyCellsReducer(state = initialStore, action) {
    switch (action.type) {
        case actionTypes.SET_MODE: {
            switch (action.mode) {
                case 'regular': {
                    let tmp = Array.from(state);
                    tmp.forEach((value, index, array) => {
                        let tmp2 = Object.assign({}, array[index]);
                        tmp2.generator = Object.assign({}, tmp2.generator);
                        tmp2.net = Object.assign({}, tmp2.net);
                        tmp2.load = Object.assign({}, tmp2.load);
                        tmp2.generator.active = true;
                        tmp2.net.active = true;
                        tmp2.load.active = true;
                        array[index] = tmp2;
                    });
                    return tmp;
                }
                case 'limited_network': {
                    return state;
                }
                case 'no_neighbors': {
                    return state;
                }
                case 'no_network': {
                    let tmp = Array.from(state);
                    tmp.forEach((value, index, array) => {
                        let tmp2 = Object.assign({}, array[index]);
                        tmp2.net = Object.assign({}, tmp2.net);
                        tmp2.net.active = false;
                        array[index] = tmp2;
                    });
                    return tmp;
                }
                    return state;
                default:
                    throw new Error('Unknown mode');
            }
        }
        case actionTypes.TUMBLER_TOGGLE: {
            switch (action.payload.id) {
                case 7:
                case 19:
                case 11:
                case 24: {
                    let tmp = Array.from(state);
                    const i = [7, 11, 19, 24].indexOf(action.payload.id);
                    let tmp2 = Object.assign({}, tmp[ i ]);
                    tmp2.generator = Object.assign({}, tmp2.generator);
                    tmp2.generator.active = !tmp2.generator.active;
                    tmp[ i ] = tmp2;
                    return tmp;
                }
                case 12:
                case 13:
                case 20:
                case 25: {
                    let tmp = Array.from(state);
                    const i = [12, 13, 20, 25].indexOf(action.payload.id);
                    let tmp2 = Object.assign({}, tmp[ i ]);
                    tmp2.load = Object.assign({}, tmp2.load);
                    tmp2.load.active = !tmp2.load.active;
                    tmp[ i ] = tmp2;
                    return tmp;
                }
                case 3:
                case 5:
                case 27:
                case 29: {
                    let tmp = Array.from(state);
                    const i = [3, 5, 27, 29].indexOf(action.payload.id);
                    let tmp2 = Object.assign({}, tmp[ i ]);
                    tmp2.net = Object.assign({}, tmp2.net);
                    tmp2.net.active = !tmp2.net.active;
                    tmp[ i ] = tmp2;
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
