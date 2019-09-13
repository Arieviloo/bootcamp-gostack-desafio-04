import React, { Component } from 'react';
import Header from './components/header/index';

class App extends Component {
  render() {
    console.log(this.state);
    return <Header />;
  }
}

export default App;
