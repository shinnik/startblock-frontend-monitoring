import * as actionTypes from '../actions/actionTypes';

const initialStore = {
    energyCells: [
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
                active: true,
                performance: 0.052,
            },
            profile: {
                name: 'Alpha',
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
    ],
    connections: [
        {
            active: true,
            output: true,
            performance: 0.052
        },
        {
            active: true,
            output: true,
            performance: 0.052
        },
        {
            active: true,
            output: true,
            performance: 0.052
        },
        {
            active: true,
            output: true,
            performance: 0.052
        },
        {
            active: true,
            output: true,
            performance: 0.052
        },
        {
            active: true,
            output: true,
            performance: 0.052
        },
    ],

    _net: {
        money: 100,
        maxPerformance: 2,
    }
};

function innerPartReducer(store=initialStore, action) {
    switch (action.type) {
        case actionTypes.TUMBLER_TOGGLE: {
            switch (action.payload.id) {
                case 5:
                case 27:
                case 29:
                case 3: {
                    let tmp = store;
                    const tmp2 = tmp.energyCells[ [3, 5, 27, 29].indexOf(action.payload.id) ].net;
                    tmp.energyCells[ [3, 5, 27, 29].indexOf(action.payload.id) ].net = !tmp2;
                    return tmp;
                }
                case 9:
                case 15:
                case 16:
                case 160:
                case 17:
                case 22: {
                    let tmp = store;
                    const tmp2 = tmp.connections[ [9, 15, 16, 160, 17, 22].indexOf(action.payload.id) ].active;
                    tmp.connections[ [9, 15, 16, 160, 17, 22].indexOf(action.payload.id) ].active = !tmp2;
                    return tmp;
                }
                default:
                    return store
            }
        }
        default:
            return store;
    }
}

export default innerPartReducer;
