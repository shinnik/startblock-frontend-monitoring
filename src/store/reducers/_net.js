import * as actionTypes from '../actions/actionTypes';

const initialStore = {
    money: -100,
        maxPerformance: 2,
};

function _netReducer(state=initialStore, action) {
    switch (action.type) {
        default:
            return state;
    }
}


export default _netReducer;
