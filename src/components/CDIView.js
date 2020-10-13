import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

function mapStateToProps(state) {
    return {
        deflection: Immutable.get(Immutable.get(state.moveReducer, 'nav1'), 'cdiDeflection')
    }
}

class ConnectedCDI extends React.Component {
    constructor() {
        super();
    }

    getOffset(deflection) {
        console.log(deflection);
        return Math.min(Math.max(deflection * 3, -3 * 12), 3 * 12);
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <img
                    id='vor-back'
                    style={{ position: 'relative', top: 0, left: 0, zIndex: 1 }}
                    alt='vor-back'
                    src={process.env.PUBLIC_URL + '/images/vor-back.png'}
                />
                <img
                    style={{ position: 'relative', top: -40, left: -86 + this.getOffset(this.props.deflection.deflection), zIndex: 2 }}
                    alt='vor-needle'
                    src={process.env.PUBLIC_URL + '/images/vor-needle.png'}
                />
                <img
                    style={{ position: 'relative', top: -14, left: -158, zIndex: 3 }}
                    alt='vor-face'
                    src={process.env.PUBLIC_URL + '/images/vor-face.png'}
                />
            </div>
        );
    }
}

const CDI = connect(mapStateToProps, null)(ConnectedCDI);

export default CDI;