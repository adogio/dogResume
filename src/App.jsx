import React, { Component } from 'react';
import Cover from './react/res/cover/cover';
import DogTitle from './react/out/title/title';
import DogNav from './react/out/nav/nav';
import DogMain from './react/out/main/main';
import Nav from './navbars/nav/nav';
import Main from './mains/main/main';
import Button from './react/res/smallButton/smallButton';
import strings from './strings.json';
import './App.css';

class App extends Component {
  things;
  floatRight = {
    float: "right",
    paddingRight: "15px"
  }
  constructor(props) {
    super(props);
    this.things = strings.chinese;
    window.dogResume = {};
  }

  render() {
    return (
      <Cover>
        <DogTitle>
          <span>{this.things.mainTitle}&nbsp;{this.things.version}: 0.1</span>
          <div style={this.floatRight}>
            <Button style={{ width: "100px" }}>{this.things.loginAndRegister}</Button>
          </div>
        </DogTitle>
        <DogNav>
          <Nav />
        </DogNav>
        <DogMain>
          <Main />
        </DogMain>
        <iframe title="printf" id="printf" src="" width="0" height="0" frameBorder="0"></iframe>
      </Cover>
    );
  }
}

export default App;
