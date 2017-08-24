import React, {
    Component
} from 'react';
import Small from '../../react/res/smallButton/smallButton';

class StylingButton extends Component {
    smallStyle = {
        width: "85px",
        height: "100px"
    }

    render() {
        return (
            <Small style={this.smallStyle} click={this.props.click} args={this.props.args}>
                <div>
                    <div style={{ width: "30%", height: "70px", float: "left", backgroundColor: this.props.left }}></div>
                    <div style={{ width: "70%", height: "70px", float: "left", backgroundColor: this.props.right }}></div>
                    {this.props.children}
                </div>
            </Small>
        );
    }
}

export default StylingButton;
