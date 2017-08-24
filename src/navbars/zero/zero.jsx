import React, {
    Component
} from 'react';
import Language from '../language/language';
import ZeroGuide from './zeroGuide';
import ChooseTemplate from './chooseTemplate';

class Zero extends Component {
    constructor(props) {
        super(props);
        this.renderPage = this.renderPage.bind(this);
        this.switchToMainGuide = this.switchToMainGuide.bind(this);
        this.finish = this.finish.bind(this);
        this.toTemplate = this.toTemplate.bind(this);
        this.toMain = this.toMain.bind(this);
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
                return <ZeroGuide things={this.props.things} template={this.toTemplate} />;
            case "language":
                return <Language
                    things={this.props.things}
                    chinese={this.props.chinese}
                    english={this.props.english}
                    currentUI={this.props.currentUI}
                    currentResume={this.props.currentResume}
                    next={this.finish} />;
            case "guide":
                return <Language
                    things={this.props.things}
                    chinese={this.props.chinese}
                    english={this.props.english}
                    currentUI={this.props.currentUI}
                    currentResume={this.props.currentResume}
                    next={this.switchToMainGuide} />;
            case "main":
                return <ZeroGuide things={this.props.things} template={this.toTemplate} />;
            case "template":
                return <ChooseTemplate things={this.props.things} />;
            default:
        }
    }

    switchToMainGuide() {
        this.setState({
            currentPage: "main"
        })
    }
    toTemplate() {
        this.setState({
            currentPage: "template"
        })
    }
    toMain() {
        this.setState({
            currentPage: "main"
        })
    }
    finish() {
        window.dog.unPop();
    }
}

export default Zero;
