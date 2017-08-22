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
import Zero from './navbars/zero/zero';

import './App.css';

class App extends Component {
	things;
	platform = navigator.userAgent;
	floatRight = {
		float: "right",
		paddingRight: "15px"
	}
	constructor(props) {
		super(props);
		this.things = strings.chinese;
		this.loginRegister = this.loginRegister.bind(this);
		this.startFromZero = this.startFromZero.bind(this);
		this.changeLanguage = this.changeLanguage.bind(this);
		window.dogResume = {};
	}

	render() {
		return (
			<div>{
				this.platform.indexOf("hone") !== -1 || this.platform.indexOf("Android") !== -1 ?
					<Cover>{"Please use desktop for this site"}</Cover> :
					<Cover>
						<DogTitle>
							<span>{this.things.mainTitle}</span>
							<div style={this.floatRight}>
								<Button
									click={this.changeLanguage}
									style={
										{
											width: "100px",
											backgroundColor: "red",
											marginRight: "10px",
											color: "white"
										}
									}>
									{this.things.changeLanguage}
								</Button>
								<Button
									click={this.startFromZero}
									style={
										{
											width: "200px",
											backgroundColor: "green",
											marginRight: "10px",
											color: "white"
										}
									}>
									{this.things.startFromZero}
								</Button>

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
			}</div>
		);
	}

	loginRegister() {
		window.dog.pop(<Login />)
	}
	startFromZero() {
		window.dog.pop(<Zero from="click" />)
	}
	changeLanguage() {
		window.dog.pop(<Zero from="language" />)
	}
}

export default App;
