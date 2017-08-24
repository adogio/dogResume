import React, {
    Component
} from 'react';
import Input from '../../react/out/input/input';
import Button from '../../react/res/button/button';
import { ajax } from 'caperjs';

class Login extends Component {
    username;
    password;
    request;
    spanStyle = {
        cursor: "pointer",
        textDecoration: "underline",
        color: "blue",
        userSelect: "none"
    }
    constructor(props) {
        super(props);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.request = new ajax('POST');
        console.log(this.request);
    }

    render() {
        return (
            <div>
                <h1>{this.props.things.login}</h1>
                <Input model={this.updateUsername} type="email">{this.props.things.userName}</Input>
                <Input model={this.updatePassword} type="password">{this.props.things.passWord}</Input>
                <Button click={this.register}>{this.props.things.loginButton}</Button>
                <span style={this.spanStyle} onClick={this.register}>{this.props.things.registerButton}</span>
            </div>
        );
    }

    updateUsername(model) {
        this.username = model;
    }

    updatePassword(model) {
        this.password = model;
    }

    login() {

    }

    register() {
        console.log(this.username)
    }
}

export default Login;
