import React, {
    Component
} from 'react';
import strings from '../../strings.json';
import Language from '../language/language';
import Button from '../../react/res/button/button';
import ZeroGuide from './zeroGuide';

class Zero extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.renderPage = this.renderPage.bind(this);
        this.switchToMainGuide = this.switchToMainGuide.bind(this);
        this.finish = this.finish.bind(this);
        this.state = {
            currentPage: this.props.from
        }
    }

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        );
    }

    renderPage() {
        switch (this.state.currentPage) {
            case "click":
                return null;
            case "language":
                return <Language next={this.finish} />;
            case "guide":
                return <Language next={this.switchToMainGuide} />;
            case "main":
                return <ZeroGuide />
            default:
        }
    }

    switchToMainGuide() {

    }

    finish() {
        window.dog.unPop();
    }
}

export default Zero;
