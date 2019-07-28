import * as actionTypes from '../actions/actionTypes';

const initialStore = {
    money: -100,
    performance: 2,
    limitedPerformance: 1,
    defaultPerformance: 2
};

function _netReducer(state=initialStore, action) {
    switch (action.type) {
        case actionTypes.SET_MODE: {
            if (action.mode === 'limited_network')
                return {
                    ...state,
                    performance: state.limitedPerformance
                };
            else
                return {
                    ...state,
                    performance: state.defaultPerformance
                };
        }
        default:
            return state;
    }
}


export default _netReducer;
