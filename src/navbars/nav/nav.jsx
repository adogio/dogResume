import React, {
    Component
} from 'react';
import Logo from '../../react/res/logo/logo';
import Subtitle from '../../react/res/subtitle/subtitle';
import Quote from '../../react/res/quote/quote';
import strings from '../../strings.json';
import Button from '../../react/res/button/button';
import './nav.css';

class Nav extends Component {
    things;
    detail;

    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.detail = true;
        this.changeMode = this.changeMode.bind(this);
        this.state = {
            detail: this.things.detailMode
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
                <Subtitle>{this.things.components}</Subtitle>
                <Button click={this.clickButton} type="education">{this.things.education}</Button>
                <Button click={this.clickButton} type="connect">{this.things.connect}</Button>
                <Button click={this.clickButton} type="experience">{this.things.experience}</Button>
                <Button click={this.clickButton} type="skill">{this.things.skill}</Button>
                <Button click={this.clickButton} type="project">{this.things.project}</Button>
                <Button click={this.clickButton} type="name">{this.things.name}</Button>
                <hr />
                <Button click={this.changeMode}>{this.state.detail}</Button>
                <Button click={this.cancelSelect}>{this.things.cancel}</Button>
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
