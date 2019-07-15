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
        default:
            return state;
    }
}


export default connectionsReducer;
