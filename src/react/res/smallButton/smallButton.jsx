import React, {
    Component
} from 'react';
import './smallButton.css';
class SmallButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="smlButton" onClick={this.props.click} style={this.props.style}>
                {this.props.children}
            </button>
        );
    }
}

export default SmallButton;
