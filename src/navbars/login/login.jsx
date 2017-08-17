import React, {
    Component
} from 'react';
import Input from '../../react/out/input/input';
import strings from '../../strings.json';
import Button from '../../react/res/button/button';

class Login extends Component {
    things;
    username;
    password;
    spanStyle = {
        cursor: "pointer",
        textDecoration: "underline",
        color: "blue"
    }
    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
                <h1>{this.things.login}</h1>
                <Input model={this.updateUsername}>{this.things.userName}</Input>
                <Input model={this.updatePassword} type="password">{this.things.passWord}</Input>
                <Button click={this.register}>{this.things.loginButton}</Button>
                <span style={this.spanStyle} onClick={this.register}>{this.things.registerButton}</span>
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
