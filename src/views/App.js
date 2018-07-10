import React, { Component } from 'react';
import CustomAlert from './components/CustomAlert/CustomAlert';
import ErrorGenerator from './components/ErrorGenerator/ErrorGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Global errors are displayed here:</h1>
        <CustomAlert />
        <hr />
        <ErrorGenerator />
      </div>
    );
  }
}

export default App;
