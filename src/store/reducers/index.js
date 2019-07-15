import { combineReducers } from 'redux';
import innerPartReducer from "./innerPart";
import headerReducer from "./header";

export const reducers = combineReducers({
    innerPart: innerPartReducer,
    hdr: headerReducer
});

