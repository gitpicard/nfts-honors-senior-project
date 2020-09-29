import React from 'react';
import Draggable from 'react-draggable';

class VOR extends React.Component {
  render() {
    return (
      <Draggable bounds='parent'>
        <div className="Draggable">
          <img className="Draggable-Icon" alt='aircraft' src={process.env.PUBLIC_URL + '/images/vor.png'} width='32pt' height='32pt' />
        </div>
      </Draggable>
    );
  }
}