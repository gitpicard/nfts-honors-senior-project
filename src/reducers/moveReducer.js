import { MOVE_AIRCRAFT, MOVE_VOR } from '../actions/constants';
import { initialState } from '../store/state';

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

    console.log('ac ' + aircraft.x + ' ' + aircraft.y + ' vor ' + vor.x + ' ' + vor.y);
    console.log('current radial: ' + degreesToVor + ' cdi: ' + -Math.max(Math.min(deflection, 6), -6) + ' from: ' + isFrom);
    return {
        deflection: -Math.max(Math.min(deflection, 6), -6),
        isFrom: isFrom,
    };
}

export function moveReducer(state = initialState, action) {
    if (action.type === MOVE_AIRCRAFT) {

        let ac = {
            x: action.payload.x,
            y: action.payload.y,
            heading: action.payload.heading
        }

        return Object.assign({}, state, {
            aircraft: ac,
            navRadio: {
                frequency: state.navRadio.frequency,
                obs: state.navRadio.obs,
                cdi: getCdiDeflection(ac, state.vor, state.navRadio.obs).deflection
            }
        });
    }
    else if (action.type === MOVE_VOR) {

        let v = {
            x: action.payload.x,
            y: action.payload.y,
            frequency: state.vor.frequency
        };

        return Object.assign({}, state, {
            vor: v,
            navRadio: {
                frequency: state.navRadio.frequency,
                obs: state.navRadio.obs,
                cdi: getCdiDeflection(state.aircraft, v, state.navRadio.obs).deflection
            }
        });
    }

    return state;
}