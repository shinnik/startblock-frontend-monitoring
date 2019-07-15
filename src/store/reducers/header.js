import * as actions from '../actions/actionTypes';

const initialState = {
    mode: 'regular'
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_MODE:
            return { ...state, mode: action.mode };
        default:
            return state;
    }
};

export default headerReducer;
