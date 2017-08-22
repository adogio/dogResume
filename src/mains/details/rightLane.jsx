import React, {
    Component
} from 'react';

class RightLane extends Component {
    style = {
        paddingRight: "6px"
    }
    smallStyle = {
        fontSize: "16px"
    }
    constructor(props) {
        super(props);
        this.renderIcon = this.renderIcon.bind(this);
    }

    render() {
        return (
            <span style={this.style}>
                {this.renderIcon()}
            </span>
        );
    }

    renderIcon() {
        switch (this.props.type) {
            case "font":
                return <i className={"fa fa-" + this.props.icon + " fa-fw"} style={this.props.style}></i>;
            case "smallFont":
                return <i className={"fa fa-" + this.props.icon + " fa-fw"} style={{ ...this.props.style, ...this.smallStyle }}></i>;
            default:
                return <span style={this.props.style}>—&nbsp;</span>;
        }
    }
}

export default RightLane;
