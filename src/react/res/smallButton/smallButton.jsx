import React, {
    Component
} from 'react';
import './smallButton.css';
class SmallButton extends Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    render() {
        return (
            <button className="smlButton" onClick={this.click} style={this.props.style}>
                {this.props.children}
            </button>
        );
    }

    click() {
        if (this.props.click) this.props.click(this.props.args);
        if (this.props.onClick) this.props.onClick(this.props.args);
    }
}

export default SmallButton;
