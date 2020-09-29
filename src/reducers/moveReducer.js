import { MOVE_AIRCRAFT, MOVE_VOR } from '../actions/constants';

export function moveReducer(state, action) {
    if (action.type === MOVE_AIRCRAFT) {
        return Object.assign({}, state, {
            x: action.payload.x,
            y: action.payload.y,
            heading: action.payload.heading
        });
    }
    else if (action.type === MOVE_VOR) {
        return Object.assign({}, state, [{
            x: action.payload.x,
            y: action.payload.y
        }]);
    }

    return state;
}