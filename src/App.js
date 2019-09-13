import React, { Component } from 'react';
import Header from './components/header/index';
import PostList from './components/PostList/index';

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}

export default App;
