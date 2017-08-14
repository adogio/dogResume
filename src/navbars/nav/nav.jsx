import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/logo/logo';
import strings from '../../strings.json';

class Nav extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
    }
    render() {
        return (
            <div>
                <Logo>{this.things.title}</Logo>
                <Button></Button>
            </div>
        );
    }
}

export default Nav;
