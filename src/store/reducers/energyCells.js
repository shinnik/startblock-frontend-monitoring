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
        case actionTypes.TUMBLER_TOGGLE: {
            switch (action.payload.id) {
                case 5:
                case 27:
                case 29:
                case 3: {
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
