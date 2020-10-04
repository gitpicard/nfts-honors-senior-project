import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { moveVor } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    moveVor: (data) => dispatch(moveVor(data))
  };
}

class ConnectedVOR extends React.Component {
  constructor() {
    super();

    this.state = {
      x: 0,
      y: 0,
      frequency: 115.9
    }
  }

  render() {
    return (
      <Draggable bounds='parent' onStop={(e, data) => this.dragged(e, data)}>
        <div className="Draggable">
          <img
            className="Draggable-Icon"
            alt='aircraft'
            src={process.env.PUBLIC_URL + '/images/vor.png'}
            width='32pt'
            height='32pt'
          />
        </div>
      </Draggable>
    );
  }

  dragged(e, data) {
    this.setState({ x: data.x, y: data.y, index: this.props.index });
    this.props.moveVor(this.state);
  }
}

const VOR = connect(null, mapDispatchToProps)(ConnectedVOR);

export default VOR;