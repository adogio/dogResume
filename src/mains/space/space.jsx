import React, {
    Component
} from 'react';
import './space.css';
class Space extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.triggerd = this.triggerd.bind(this);
    }

    render() {
        return (
            <div className="space" style={this.triggerd()} onClick={this.click}>
                {this.props.things.putItHere}
            </div>
        );
    }
    triggerd() {
        if (!this.props.style) {
            return {
                display: "none"
            }
        } else {
            return {}
        }
    }
    click() {
        this.props.onClick(this.props.index);
    }
}

export default Space;
