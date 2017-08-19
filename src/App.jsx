import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Cover from './react/res/cover/cover';
import DogTitle from './react/out/title/title';
import DogNav from './react/out/nav/nav';
import DogMain from './react/out/main/main';
import Nav from './navbars/nav/nav';
import Main from './mains/main/main';
import Button from './react/res/smallButton/smallButton';
import strings from './strings.json';
import Login from './navbars/login/login';

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
		this.loginRegister = this.loginRegister.bind(this);
		window.dogResume = {};
	}

	render() {
		return (
			<Cover>
				<DogTitle>
					<span>{this.things.mainTitle}&nbsp;{this.things.version}: 0.1</span>
					<div style={this.floatRight}>
						<Button
							click={this.loginRegister}
							style={{ width: "100px" }}>
							{this.things.loginAndRegister}
						</Button>
					</div>
				</DogTitle>
				<DogNav>
					<Nav />
				</DogNav>
				<DogMain>
					<BrowserRouter>
						<div>
							<Route exact={true} path="/" component={Main} />
							<Route path="/:resumeId" component={Main} />
						</div>
					</BrowserRouter>
				</DogMain>
				<iframe title="printf" id="printf" src="" width="0" height="0" frameBorder="0">
				</iframe>
			</Cover>
		);
	}

	loginRegister() {
		window.dog.pop(<Login />)
	}
}

export default App;
