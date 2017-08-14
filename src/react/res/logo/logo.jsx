import React, {
    Component
} from 'react';
import './logo.css';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                {this.props.children}
            </div>
        );
    }
}

export default Logo;
