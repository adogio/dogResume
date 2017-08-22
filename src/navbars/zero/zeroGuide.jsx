import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';

class Language extends Component {
    constructor(props) {
        super(props);
        console.log('test');
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
