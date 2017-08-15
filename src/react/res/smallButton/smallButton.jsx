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
            <button className="smlButton" onClick={this.props.click}>
                <i className="fa fa-cog"></i>
            </button>
        );
    }
}

export default SmallButton;
