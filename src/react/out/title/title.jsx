import React, {
    Component
} from 'react';
import './title.css';

class Title extends Component {
    render() {
        return (
            <div className="App-header">
                {this.props.children}
            </div>
        );
    }
}

export default Title;