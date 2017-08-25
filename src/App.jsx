import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
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
import fastCookie from './react/res/cookie/fastCookie';

import './App.css';

class App extends Component {
	platform = navigator.userAgent;
	floatRight = {
		float: "right",
		paddingRight: "15px"
	}
	fastCookie;
	constructor(props) {
		super(props);
		this.fastCookie = new fastCookie();
		this.loginRegister = this.loginRegister.bind(this);
		this.startFromZero = this.startFromZero.bind(this);
		this.changeLanguage = this.changeLanguage.bind(this);
		this.changeToChinese = this.changeToChinese.bind(this);
		this.changeToEnglish = this.changeToEnglish.bind(this);
		this.chooseTemplate = this.chooseTemplate.bind(this);
		this.startFromReallyZero = this.startFromReallyZero.bind(this);
		window.dogResume = {};
		this.state = {
			things: strings.chinese,
			language: strings.chinese,
			currentUI: 0,
			currentResume: 0
		}
	}
	componentDidMount() {
		let Rlanguage = this.fastCookie.getCookie('resumeLanguage');
		let Ulanguage = this.fastCookie.getCookie('UILanguage');
		if (Rlanguage === "english") {
			this.changeToEnglish(true);
		}
		if (Ulanguage === "english") {
			this.changeToEnglish(false);
		}
		if (Rlanguage == null && Ulanguage == null) {
			this.startFromReallyZero();
			this.fastCookie.setCookie("resumeLanguage", "chinese", "d5");
			this.fastCookie.setCookie("UILanguage", "chinese", "d5")
		}
	}
	render() {
		const MainWithProps = (props) => {
			return <Main
				things={this.state.things}
				language={this.state.language}
				{...props} />
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
									click={this.chooseTemplate}
									style={
										{
											width: "135px",
											backgroundColor: "blue",
											marginRight: "10px",
											color: "white"
										}
									}>
									{this.state.things.chooseResume}
								</Button>
								<Button
									click={this.startFromZero}
									style={
										{
											width: "180px",
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
							<HashRouter>
								<div>
									<Route exact={true} path="/" component={MainWithProps} />
									<Route path="/:resumeId" component={MainWithProps} />
								</div>
							</HashRouter>
						</DogMain>
						<iframe title="printf" id="printf" src="" width="0" height="0" frameBorder="0" />
						<iframe title="printTemp" id="printTemp" src="" width="0" height="0" frameBorder="0" />
					</Cover>
			}</div>
		);
	}

	loginRegister() {
		window.dog.pop(<Login
			things={this.state.things} />)
	}

	startFromZero() {
		window.dog.pop(<Zero
			from="click"
			currentUI={this.state.currentUI}
			currentResume={this.state.currentResume}
			things={this.state.things} />)
	}
	startFromReallyZero() {
		window.dog.pop(<Zero
			from="guide"
			currentUI={this.state.currentUI}
			chinese={this.changeToChinese}
			english={this.changeToEnglish}
			currentResume={this.state.currentResume}
			chineseThings={strings.chinese}
			englishThings={strings.english}
			things={this.state.things} />)
	}
	chooseTemplate() {
		window.dog.pop(<Zero
			from="template"
			currentUI={this.state.currentUI}
			currentResume={this.state.currentResume}
			things={this.state.things} />)
	}

	changeLanguage() {
		window.dog.pop(<Zero
			from="language"
			chinese={this.changeToChinese}
			english={this.changeToEnglish}
			currentUI={this.state.currentUI}
			currentResume={this.state.currentResume}
			things={this.state.things} />)
	}

	changeToChinese(isResume) {
		let temp = window.dogResume.outputJson();
		if (isResume) {
			this.fastCookie.setCookie("resumeLanguage", "chinese", "d5");
			this.setState({
				language: strings.chinese,
				currentResume: 0
			}, update);
		} else {
			this.fastCookie.setCookie("UILanguage", "chinese", "d5");
			this.setState({
				things: strings.chinese,
				currentUI: 0
			}, update);
		}
		function update() {
			setTimeout(function () {
				window.dogResume.inputJson(temp);
			}, 0);
		}
	}

	changeToEnglish(isResume) {
		let temp = window.dogResume.outputJson();
		if (isResume) {
			this.fastCookie.setCookie("resumeLanguage", "english", "d5");
			this.setState({
				language: strings.english,
				currentResume: 1
			}, update);
		} else {
			this.fastCookie.setCookie("UILanguage", "english", "d5");
			this.setState({
				things: strings.english,
				currentUI: 1
			}, update);
		}
		function update() {
			setTimeout(function () {
				window.dogResume.inputJson(temp);
			}, 0);
		}
	}
}

export default App;
