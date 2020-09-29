import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { moveAircraft } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    moveAircraft: (data) => dispatch(moveAircraft(data))
  };
}

class ConnectedAircraft extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      heading: 0
    }
  }

  render() {
    return (
      <Draggable bounds='parent' onStop={(e, data) => this.dragged(e, data)}>
        <div className="Draggable">
          <img
            className="Draggable-Icon"
            alt='aircraft'
            src={process.env.PUBLIC_URL + '/images/aircraft.png'}
            width='32pt'
            height='32pt'
          />
        </div>
      </Draggable>
    )
  }

  dragged(e, data) {
    this.setState({ x: data.x, y: data.y, heading: this.state.heading });
    this.props.moveAircraft(this.state);
  }
}

const Aircraft = connect(null, mapDispatchToProps)(ConnectedAircraft);

export default Aircraft;