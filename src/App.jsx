import React, { Component } from 'react';
import DogTitle from './react/out/title/title';
import DogNav from './react/out/nav/nav';
import DogMain from './react/out/main/main';
import Nav from './navbars/nav/nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <DogTitle>12312312</DogTitle>
        <DogNav>
          <Nav />
        </DogNav>
        <DogMain>123</DogMain>
      </div>
    );
  }
}

export default App;
