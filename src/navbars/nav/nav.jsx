import React, {
    Component
} from 'react';
import Logo from '../../react/res/logo/logo';
import Subtitle from '../../react/res/subtitle/subtitle';
import Quote from '../../react/res/quote/quote';
import strings from '../../strings.json';
import './nav.css';

class Nav extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
    }
    render() {
        return (
            <div>
                <hr />
                <Logo>
                    {this.things.title}
                </Logo>
                <Subtitle>
                    {this.things.subTitle}
                </Subtitle>
                <Quote from={this.things.quoteFrom}>
                    {this.things.quote}
                </Quote>
                <hr />
            </div>
        );
    }
}

export default Nav;
