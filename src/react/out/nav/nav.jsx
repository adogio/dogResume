import React, {
    Component
} from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="nav-left">
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Nav;
