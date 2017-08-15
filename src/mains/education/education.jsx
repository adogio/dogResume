import React, {
    Component
} from 'react';
import './education.css';
class Education extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>{this.props.test}</div>
        );
    }
}

export default Education;
