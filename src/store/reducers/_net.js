import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/updateObject";
import {dots} from "../../constants/names";

const initialStore = {
    money: dots,
    performance: dots,
    sumPerformance: dots
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
        case actionTypes.NEW_WEBSOCKET_MESSAGE: {
            if (action.payload.uri === 'router') {
                return updateObject(state, {
                    sumPerformance: action.payload.data.power && Number(action.payload.data.power).toFixed(3),
                    money: action.payload.data.balance && Number(action.payload.data.balance).toFixed(1),
                    performance: action.payload.data.energy && Number(action.payload.data.energy).toFixed(3)
                })
            }
            return state;
        }
        default:
            return state;
    }
}


export default _netReducer;
