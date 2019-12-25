import * as actionTypes from './actionTypes';


export const onToggle = (tumbler) => {
    return {
        type: actionTypes.TUMBLER_TOGGLE,
        payload: {
            ...tumbler
        }
    }
};

export const onWebsocketMessage = (message) => {
    console.log(message, 'MESS');
    return {
        type: actionTypes.NEW_WEBSOCKET_MESSAGE,
        ...message
    }
};
