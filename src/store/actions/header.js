import * as actions from './actionTypes';

const ID_MAP = {
    'regular': 1,
    'limited_network': 2,
    'no_network': 3,
    'no_neighbors': 4
};

const onChangeMode = id => {

    return {
        type: actions.SET_MODE,
        mode: id
    }
}

export default onChangeMode;
