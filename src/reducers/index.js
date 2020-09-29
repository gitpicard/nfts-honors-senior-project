import { MOVE_AIRCRAFT, MOVE_VOR } from '../actions/constants';
import { moveReducer } from './moveReducer';

const initialState = {
    aircraft: {
        x: 10,
        y: 10,
        heading: 0
    },
    vors: [
        {
            x: 100,
            y: 100,
            frequency: 115.9
        }
    ],
    navRadio: {
        frequency: 115.9,
        obs: 0
    }
};

function rootReducer(state = initialState, action) {
    console.log(state);
    if (action.type === MOVE_AIRCRAFT) {
        return Object.assign({}, state, {
            aircraft: moveReducer(state.aircraft, action)
        })
    }
    else if (action.type === MOVE_VOR) {
        return Object.assign({}, state, {
            vors: moveReducer(state.vors, action)
        })
    }
    return state;
}

export default rootReducer;