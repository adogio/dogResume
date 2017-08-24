import React, {
    Component
} from 'react';

class Logo extends Component {
    logoStyle = {
        fontFamily: "ubuntu",
        fontSize: "21px",
        textAlign: "center"
    }

    constructor(props) {
        super(props);
        if (this.props.size) {
            this.logoStyle.fontSize = this.props.size + "px";
        }
        if (this.props.left) {
            this.logoStyle.textAlign = "left";
        }
    }

    render() {
        return (
            <div style={this.logoStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default Logo;
