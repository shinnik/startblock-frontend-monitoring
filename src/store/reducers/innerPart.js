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
        performance: 2000,
    }
};

function innerPartReducer(store=initialStore, action) {
    switch (action.type) {
        case actionTypes.TUMBLER_TOGGLE: {
            return store;
        }
        default:
            return store;
    }
}

export default innerPartReducer;
