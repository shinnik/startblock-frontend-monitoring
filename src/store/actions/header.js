import * as actions from './actionTypes';

const onChangeMode = id => {
    return {
        type: actions.SET_MODE,
        mode: id
    }
}

export default onChangeMode;
