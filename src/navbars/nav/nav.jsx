import React, {
    Component
} from 'react';
import Logo from '../../react/res/logo/logo';
import Subtitle from '../../react/res/subtitle/subtitle';
import Quote from '../../react/res/quote/quote';
import strings from '../../strings.json';
import Button from '../../react/res/button/button';
import Credit from '../../react/res/credit/credit';
import './nav.css';
import a from '../../mains/printable.json';

class Nav extends Component {
    things;
    detail;

    buttonStyleLeftOnly = {
        height: "38px",
        borderRight: "21px solid transparent",
        borderLeft: "21px solid #c8ffc9"
    };

    buttonStyleRightOnly = {
        height: "38px",
        borderLeft: "21px solid transparent",
        borderRight: "21px solid #c8ffc9"
    };

    buttonStyleLeftAndRight = {
        height: "38px",
        borderLeft: "21px solid #c8ffc9",
        borderRight: "21px solid #c8ffc9"
    };

    buttonStyle = {
        height: "38px"
    };

    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.detail = true;
        this.selected = false;
        this.clickButton = this.clickButton.bind(this);
        this.cancelSelect = this.cancelSelect.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.printResume = this.printResume.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
        this.state = {
            detail: this.things.detailMode,
            component: true
        }
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
                {this.state.component ?
                    <div>
                        <Subtitle>{this.things.components}</Subtitle>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="education">{this.things.education}</Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="connect">{this.things.connect}</Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="experience">{this.things.experience}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="skill">{this.things.skill}</Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="project">{this.things.project}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="name">{this.things.name}</Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="description">{this.things.description}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="achivement">{this.things.achivement}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="publication">{this.things.publication}</Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="summary">{this.things.summary}</Button>
                        <hr />
                        <Subtitle>{this.things.componenetTool}</Subtitle>
                        <Button style={this.buttonStyle} click={this.changeMode}>{this.state.detail}</Button>
                        <Button style={this.buttonStyle} click={this.cancelSelect}>{this.things.cancel}</Button>
                        <hr />
                    </div>
                    :
                    <div>Styleing</div>
                }
                <Subtitle>{this.things.complete}</Subtitle>
                <Button style={this.buttonStyle} click={this.changeStyle}>{this.state.component ? this.things.style : this.things.componenet}</Button>
                <Button style={this.buttonStyle} click={this.printResume}>{this.things.print}</Button>
                <hr />
                <Subtitle>{this.things.dogResume}</Subtitle>
                <Button style={this.buttonStyle} click={this.printResume}>{this.things.like}</Button>
                <Button style={this.buttonStyle} click={this.printResume} Title="123">{this.things.bug}</Button>
                <Credit>adog.io</Credit>
            </div>
        );
    }

    clickButton(type) {
        window.dogResume.cancelSelect();
        window.dogResume.selectComponent(type);
    }

    cancelSelect() {
        window.dogResume.cancelSelect();
    }

    changeStyle() {
        if (this.state.component) {
            this.setState({
                component: false
            })
        } else {
            this.setState({
                component: true
            })
        }
    }

    printResume() {
        if (!this.detail) {
            alert(this.things.toView);
        } else if (window.dogResume.global.selected) {
            alert(this.things.toUnselect);
        } else {
            let cssLink = document.createElement("link");
            cssLink.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
            cssLink.rel = "stylesheet";
            cssLink.type = "text/css";

            let print = "<html><head></head>";
            print += "<body>" + document.getElementById('resume').innerHTML + "</body>";
            print += "<style>"
            print += a;
            print += ".centerer{outline:3px dashed #8b8b8b;}"
            print += "</style></html>"
            var f = document.getElementById('printf');
            f.onload = function () {
                f.contentWindow.print();
            }
            f.contentDocument.write(print);
            f.contentDocument.body.appendChild(cssLink);
            f.contentDocument.close();
        }
    }

    changeMode() {
        if (this.detail) {
            window.dogResume.viewMode();
            this.detail = false;
            this.setState({
                detail: this.things.viewMode
            })
        } else {
            window.dogResume.detailMode();
            this.detail = true;
            this.setState({
                detail: this.things.detailMode
            })
        }
    }
}

export default Nav;
