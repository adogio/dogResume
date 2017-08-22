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
	platform = navigator.userAgent;
	floatRight = {
		float: "right",
		paddingRight: "15px"
	}
	constructor(props) {
		super(props);
		this.loginRegister = this.loginRegister.bind(this);
		this.startFromZero = this.startFromZero.bind(this);
		this.changeLanguage = this.changeLanguage.bind(this);
		window.dogResume = {};
		this.state = {
			things: strings.chinese
		}
	}

	render() {
		const MainWithProps = (props) => {
			return <Main things={this.state.things} {...props} />
		}
		return (
			<div>{
				this.platform.indexOf("hone") !== -1 || this.platform.indexOf("Android") !== -1 ?
					<Cover>{"Please use desktop for this site"}</Cover> :
					<Cover>
						<DogTitle>
							<span>{this.state.things.mainTitle}</span>
							<div style={this.floatRight}>
								<Button
									click={this.changeLanguage}
									style={
										{
											width: "135px",
											backgroundColor: "red",
											marginRight: "10px",
											color: "white"
										}
									}>
									{this.state.things.changeLanguage}
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
									{this.state.things.startFromZero}
								</Button>

								<Button
									click={this.loginRegister}
									style={{ width: "100px" }}>
									{this.state.things.loginAndRegister}
								</Button>
							</div>
						</DogTitle>
						<DogNav>
							<Nav things={this.state.things} />
						</DogNav>
						<DogMain>
							<BrowserRouter>
								<div>
									<Route exact={true} path="/" component={MainWithProps} />
									<Route path="/:resumeId" component={MainWithProps} />
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
		window.dog.pop(<Zero from="click" things={this.state.things} />)
	}

	changeLanguage() {
		window.dog.pop(<Zero from="language" things={this.state.things} />)
	}
}

export default App;
