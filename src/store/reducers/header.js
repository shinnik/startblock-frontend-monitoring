import * as actions from '../actions/actionTypes';

const initialState = {
    mode: 'none',
    generator: 4,
    net: 3,
    load: 4,
    connections: 6,
    limited: false
};

function check({generator, net, load, connections, limited}) {
    if (generator === 4) {
        if (net === 4) {
            if (load === 4) {
                if (connections === 6) {
                    if (limited)
                        return 'limited_network';
                    else
                        return 'regular';
                }
                else {
                    if (connections === 0 && !limited) {
                        return 'no_neighbors';
                    }
                    else
                        return 'none';
                }
            }
            else
                return 'none';
        }
        else {
            if (net === 0 && load === 4 && connections === 6 && !limited) {
                return 'no_network';
            }
            else
                return 'none';
        }
    }
    else {
        return 'none';
    }
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_MODE: {
            switch (action.mode) {
                case 'limited_network':
                    return {...state, mode: action.mode, limited: true,
                        generator: 4,
                        net: 4,
                        load: 4,
                        connections: 6,
                    };
                case 'regular':
                    return {...state, mode: action.mode, limited: false,
                        generator: 4,
                        net: 4,
                        load: 4,
                        connections: 6};
                case 'no_neighbors':
                    return {...state, mode: action.mode, limited: false,
                        generator: 4,
                        net: 4,
                        load: 4,
                        connections: 0};
                case 'no_network':
                    return {...state, mode: action.mode, limited: false,
                        generator: 4,
                        net: 0,
                        load: 4,
                        connections: 6};
                default:
                    return {...state, mode: action.mode}
            }
        }
        case actions.TUMBLER_TOGGLE: {
            let istate = {};
            switch (action.payload.id) {
                case 3:
                case 5:
                case 27:
                case 29: {
                    istate = {
                        ...state,
                        net: state.net-(-1)**action.payload.state
                    };
                    break;
                }
                case 7:
                case 11:
                case 19:
                case 24: {
                    istate = {
                        ...state,
                        generator: state.generator-(-1)**action.payload.state
                    };
                    break;
                }
                case 9:
                case 16:
                case 15:
                case 160:
                case 17:
                case 22: {
                    istate = {
                        ...state,
                        connections: state.connections-(-1)**action.payload.state
                    };
                    break;
                }
                case 12:
                case 13:
                case 20:
                case 25: {
                    istate = {
                        ...state,
                        load: state.load-(-1)**action.payload.state
                    };
                    break;
                }
                default:
                        break;
            }
            return {
                ...istate,
                mode: check(istate)
            }
        }
        default:
            return state;
    }
};

export default headerReducer;
