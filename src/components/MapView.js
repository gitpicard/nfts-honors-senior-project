import React from 'react';
import Aircraft from './AircraftView';

class Map extends React.Component {
  render() {
    return (
      <div className="Map">
        <Aircraft />
      </div>
    );
  }
}

export default Map;