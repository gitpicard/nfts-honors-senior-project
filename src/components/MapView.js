import React from 'react';
import Aircraft from './AircraftView';
import VOR from './VORView';

class Map extends React.Component {
  render() {
    return (
      <div className="Map">
        <Aircraft />
        <VOR />
      </div>
    );
  }
}

export default Map;