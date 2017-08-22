import React, {
    Component
} from 'react';
import strings from '../../strings.json';
import Button from '../../react/res/button/button';

class Language extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
    }

    render() {
        return (
            <div>
                <br />
                <Button>123</Button>
            </div>
        );
    }
}

export default Language;
