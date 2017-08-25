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
        this.chinese = this.chinese.bind(this);
        this.english = this.english.bind(this);
        this.state = {
            currentPage: this.props.from,
            things: this.props.chineseThings ? this.props.chineseThings : this.props.things
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
                return <ZeroGuide things={this.state.things} template={this.toTemplate} />;
            case "language":
                return <Language
                    things={this.props.things}
                    chinese={this.chinese}
                    english={this.english}
                    currentUI={this.props.currentUI}
                    currentResume={this.props.currentResume}
                    next={this.finish} />;
            case "guide":
                return <Language
                    things={this.state.things}
                    chinese={this.chinese}
                    english={this.english}
                    currentUI={this.props.currentUI}
                    currentResume={this.props.currentResume}
                    next={this.switchToMainGuide} />;
            case "main":
                return <ZeroGuide things={this.state.things} template={this.toTemplate} />;
            case "template":
                return <ChooseTemplate things={this.state.things} />;
            default:
        }
    }

    switchToMainGuide() {
        this.setState({
            currentPage: "main"
        });
    }
    chinese() {
        this.props.chinese();
        this.setState({
            things: this.props.chineseThings
        });
    }
    english() {
        this.props.english();
        this.setState({
            things: this.props.englishThings
        });
    }
    toTemplate() {
        this.setState({
            currentPage: "template"
        });
    }
    toMain() {
        this.setState({
            currentPage: "main"
        });
    }
    finish() {
        window.dog.unPop();
    }
}

export default Zero;
