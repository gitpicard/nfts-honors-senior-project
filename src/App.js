import React from 'react';
import Map from './components/MapView';
import CDI from './components/CDIView';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Map />
        <CDI nav='nav1' />
        <CDI nav='nav2' />
      </div>
    );
  }
}

export default App;
