import { combineReducers } from 'redux';
import innerPartReducer from "./innerPart";

export const reducers = combineReducers({
    innerPart: innerPartReducer
});

