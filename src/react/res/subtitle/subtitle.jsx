import React, {
    Component
} from 'react';
import './subtitle.css';
class Subtitle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="subtitle">
                {this.props.children}
            </div>
        );
    }
}

export default Subtitle;
