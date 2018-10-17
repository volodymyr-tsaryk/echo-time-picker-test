import React, { Component } from 'react';
import { EchoTimePicker } from 'echo-component-library';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>Open TimePicker and then click on button</div>
          <button onClick={() => {
              console.log('Button clicked');
          }}>button</button>
          <EchoTimePicker
              onTimeSelect={() => {
                console.log('Time selected')
              }}
          />
      </div>
    );
  }
}

export default App;
