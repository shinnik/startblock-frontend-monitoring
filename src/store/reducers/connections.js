import * as actionTypes from '../actions/actionTypes';

const initialStore = [
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
];

function connectionsReducer(state=initialStore, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}


export default connectionsReducer;
