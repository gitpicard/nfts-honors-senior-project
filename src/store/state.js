import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
    aircraft: {
        x: 10,
        y: 10,
        heading: 0,
    },
    nav1: {
        obs: 0,
        tuned: 115.9,
        cdiDeflection: 0
    },
    navAids: [
        {
            type: 'vor',
            x: 100,
            y: 100,
            frequency: 115.9
        }
    ]
});