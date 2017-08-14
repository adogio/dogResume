import React, {
    Component
} from 'react';
import './main.css';
import strings from '../../strings.json';

class template extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
    }

    render() {
        return (
            <div className="main">
                <h3>{this.things.resumeTopper}</h3>
                <div className="resume">
                    <div className="resume-left"></div>
                    <div className="resume-right"></div>
                </div>
            </div>
        );
    }
}

export default template;
