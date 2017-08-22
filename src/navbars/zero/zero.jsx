import React, {
    Component
} from 'react';
import strings from '../../strings.json';
import Language from '../language/language';

class Zero extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
    }

    render() {
        return (
            <div>
                123
            </div>
        );
    }
}

export default Zero;
