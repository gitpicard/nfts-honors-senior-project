import { MOVE_AIRCRAFT, MOVE_VOR } from '../actions/constants';
import { initialState } from '../store/state';
import Immutable from 'immutable';

function getCdiDeflection(aircraft, vor, obs) {
    let degreesToVor = Math.round(Math.atan2(aircraft.y - vor.y, aircraft.x - vor.x) * (180 / Math.PI)) % 360;
    degreesToVor -= 90;
    if (degreesToVor < 0)
        degreesToVor += 360;

    let deflection = obs - degreesToVor;
    if (deflection > 180)
        deflection -= 360;
    else if (deflection < -180)
        deflection += 360;
    let isFrom = deflection >= 90 || deflection <= -90;

    return {
        deflection: -Math.max(Math.min(deflection, 6), -6),
        isFrom: isFrom,
    };
}

function getTunedVor(navAids, tuned) {
    return navAids.find(c => c.frequency === tuned);
}

export function moveReducer(state = initialState, action) {
    if (action.type === MOVE_AIRCRAFT) {
        return Immutable.mergeDeep(state, {
            aircraft: {
                x: action.payload.x,
                y: action.payload.y,
                heading: action.payload.heading,
            },
            nav1: {
                cdiDeflection: getCdiDeflection(
                    action.payload,
                    getTunedVor(state.get('navAids').toJS(), state.get('nav1').get('tuned')),
                    0
                )
            }
        });
    }
    else if (action.type === MOVE_VOR) {
        let newState = Immutable.set(state, 'navAids',
            Immutable.set(state.get('navAids'), action.payload.index, {
                ...Immutable.get(Immutable.get(state, 'navAids'), action.payload.index),
                x: action.payload.x,
                y: action.payload.y
            })
        );
        return Immutable.mergeDeep(newState, {
            'nav1': {
                cdiDeflection: getCdiDeflection(
                    state.get('aircraft').toJS(),
                    action.payload,
                    0
                )
            }
        });
    }

    return state;
}