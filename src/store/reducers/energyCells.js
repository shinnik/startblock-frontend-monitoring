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
                    let tmp2 = Object.assign({}, tmp[ [3, 5, 27, 29].indexOf(action.payload.id) ]);
                    tmp2.net.active = !tmp2.net.active;
                    tmp[ [3, 5, 27, 29].indexOf(action.payload.id) ] = tmp2;
                    return tmp;
                    // console.log(tmp2);
                    // tmp.energyCells[[3, 5, 27, 29].indexOf(action.payload.id)].net.active= !tmp2;
                    // console.log(tmp);
                    // return tmp;
                }
                case 9:
                case 15:
                case 16:
                case 160:
                case 17:
                case 22: {
                    // let tmp=store;
                    // const tmp2=tmp.connections[[9, 15, 16, 160, 17, 22].indexOf(action.payload.id)].active;
                    // tmp.connections[[9, 15, 16, 160, 17, 22].indexOf(action.payload.id)].active= !tmp2;
                    // return tmp;
                    return state;
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
