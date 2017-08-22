import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/logo/logo';

class Language extends Component {
    constructor(props) {
        super(props);
        console.log('ter');
    }

    render() {
        return (
            <div>
                <Logo>{this.props.things.language.title}</Logo>
                <br />
                <Button click={this.props.next}>123</Button>
            </div>
        );
    }
}

export default Language;
