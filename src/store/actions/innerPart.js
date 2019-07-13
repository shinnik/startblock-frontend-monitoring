import * as actionTypes from './actionTypes';


export const onToggle = (tumbler) => {
    return {
        type: actionTypes.TUMBLER_TOGGLE,
        payload: {
            ...tumbler
        }
    }
};
