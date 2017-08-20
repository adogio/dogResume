import React, {
    Component
} from 'react';

class RightLane extends Component {
    style = {
        paddingRight: "6px"
    }
    render() {
        return (
            <span style={this.style}>
                {this.props.type === "font" ?
                    <i className={"fa fa-" + this.props.icon + " fa-fw"} style={this.props.style}></i> :
                    <span style={this.props.style}>—&nbsp;</span>
                }
            </span>
        );
    }
}

export default RightLane;
