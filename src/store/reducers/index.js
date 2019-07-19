import { combineReducers } from 'redux';
import headerReducer from "./header";
import energyCellsReducer from './energyCells';
import connectionsReducer from './connections';
import _netReducer from './_net';

export const reducers = combineReducers({
    energyCells: energyCellsReducer,
    connections: connectionsReducer,
    _net: _netReducer,
    hdr: headerReducer
});

