import React, {
    Component
} from 'react';
import './main.css';

class Main extends Component {
    render() {
        let props = this.props;
        return (
            <div className="main-right">
                <div className="content">
                    {props.children}
                </div>
            </div>
        );
    }

}

export default Main;
