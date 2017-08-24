import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/secondLogo/secondLogo';
import Small from '../../react/res/smallButton/smallButton';
import Example from './stylingButton';

class ZeroGuide extends Component {
    currentJson = JSON.parse(window.dogResume.outputJson());

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.comp = this.comp.bind(this);
        this.switchDisplay = this.switchDisplay.bind(this);
        this.changeMainStyle = this.changeMainStyle.bind(this);
        this.state = {
            currentStep: 1
        }
    }

    render() {
        return (
            <div>
                <br />
                {this.comp(1) ? <Logo size="24">
                    {this.props.things.zero.welcome}
                    <hr />
                </Logo> : null}
                {this.switchDisplay()}
                <Logo size="18" left>{this.props.things.zero.clickNext}</Logo>
                <br />
                <Button click={this.next}>{this.props.things.zero.next}</Button>
                {!this.comp(1) ? <Button style={{ height: "24px", fontSize: "15px" }} click={this.previous}>{this.props.things.zero.previous}</Button> : null}
            </div>
        );
    }
    switchDisplay() {
        switch (this.state.currentStep) {
            case 1:
                return <div>
                    <Logo size="18" left>
                        {this.props.things.zero.welcome2}
                    </Logo>
                </div>;
            case 2:
                return <div>
                    <Logo size="18">{this.props.things.zero.pickStyle}</Logo>
                    <br />
                    <Logo size="18">{this.props.things.zero.pickStyle2}</Logo>
                    <div style={{ textAlign: "center" }}>
                        <Example left="#c7c7c7" right="white" click={this.changeMainStyle} args={0}>
                            {this.props.things.zero.styles.grayWhite}
                        </Example>
                        <Example left="#624c82" right="#d7d7d7" click={this.changeMainStyle} args={1}>
                            {this.props.things.zero.styles.purpleGray}
                        </Example>
                        <Example left="#333" right="white" click={this.changeMainStyle} args={2}>
                            {this.props.things.zero.styles.drakGrayWhite}
                        </Example>
                        <Example left="white" right="white" click={this.changeMainStyle} args={3}>
                            {this.props.things.zero.styles.noneBG}
                        </Example>
                    </div>
                </div>;
            case 3:
                return <div>
                    <Logo size="18" left>
                        {this.props.things.zero.welcome2}
                    </Logo>
                </div>;
            case 4:
                return <div>
                    <Logo size="18" left>
                        {this.props.things.zero.welcome2}
                    </Logo>
                </div>;
            case 5:
                return <div>
                    <Logo size="18" left>
                        {this.props.things.zero.welcome2}
                    </Logo>
                </div>;
            default:
                return null;
        }
    }
    next() {
        this.setState({
            currentStep: this.state.currentStep + 1
        });
    }
    previous() {
        this.setState({
            currentStep: this.state.currentStep - 1
        });
    }
    comp(...steps) {
        for (let i = 0; i < steps.length; i++) {
            if (this.state.currentStep === steps[i]) {
                return true;
            }
        }
        return false;
    }
    changeMainStyle(id) {
        switch (id) {
            case 0:
                this.currentJson.style.leftBG = 2;
                this.currentJson.style.rightBG = 1;
                break;
            case 1:
                this.currentJson.style.leftBG = 4;
                this.currentJson.style.rightBG = 2;
                break;
            case 2:
                this.currentJson.style.leftBG = 3;
                this.currentJson.style.rightBG = 2;
                break;
            case 3:
                this.currentJson.style.leftBG = 1;
                this.currentJson.style.rightBG = 1;
                break;
            default:
        }
        this.deployJson();
    }
    deployJson() {
        window.dogResume.inputJson(JSON.stringify(this.currentJson));
        const b = window.dogResume.getStyling();
        console.log(b);
        window.dogResume.styling(b);
    }
}

export default ZeroGuide;
