import React, {
    Component
} from 'react';
import strings from '../../strings.json';

class template extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default template;
