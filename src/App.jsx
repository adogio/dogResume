import React, { Component } from 'react';
import DogTitle from './react/out/title/title';
import DogNav from './react/out/nav/nav';
import DogMain from './react/out/main/main';
import Nav from './navbars/nav/nav';
import Main from './mains/main/main';
import strings from './strings.json';
import './App.css';

class App extends Component {
  things;
  constructor(props) {
    super(props);
    this.things = strings.chinese;
  }

  render() {
    return (
      <div>
        <DogTitle>
          <span>{this.things.mainTitle}&nbsp;{this.things.version}: 0.1</span>
        </DogTitle>
        <DogNav>
          <Nav />
        </DogNav>
        <DogMain>
          <Main />
        </DogMain>
      </div>
    );
  }
}

export default App;
