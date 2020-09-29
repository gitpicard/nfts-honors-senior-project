import { MOVE_AIRCRAFT, MOVE_VOR } from './constants';

export function moveAircraft(payload) {
    return { type: MOVE_AIRCRAFT, payload };
}

export function moveVor(payload) {
    return { type: MOVE_VOR, payload };
}