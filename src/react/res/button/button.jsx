import React, {
    Component
} from 'react';
import './button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    render() {
        return (
            <button className="buttons" onClick={this.click}>
                {this.props.children}
            </button>
        );
    }
    click() {
        if (this.props.type) {
            this.props.click(this.props.type);
        } else {
            this.props.click();
        }
    }
}

export default Button;
