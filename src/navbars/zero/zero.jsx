import React, {
    Component
} from 'react';
import Language from '../language/language';
import Button from '../../react/res/button/button';
import ZeroGuide from './zeroGuide';

class Zero extends Component {
    constructor(props) {
        super(props);
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
                return <Language things={this.props.things} next={this.finish} />;
            case "guide":
                return <Language things={this.props.things} next={this.switchToMainGuide} />;
            case "main":
                return <ZeroGuide things={this.props.things} />
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
