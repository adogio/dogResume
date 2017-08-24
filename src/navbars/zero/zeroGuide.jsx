import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/secondLogo/secondLogo';
import Small from '../../react/res/smallButton/smallButton';
import Example from './stylingButton';
import Name from '../../mains/name/name';

class ZeroGuide extends Component {

    navStyle = {
        backgroundColor: "#5e5e5e",
        float: "left",
        width: "25%",
        height: "240px",
        marginRight: "5px"
    };

    animateSlow = {
        WebkitAnimationDuration: "1.5s",
        AnimationDuration: "1.5s"
    };
    currentJson = JSON.parse(window.dogResume.outputJson());
    form = {

    };
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.comp = this.comp.bind(this);
        this.switchDisplay = this.switchDisplay.bind(this);
        this.changeMainStyle = this.changeMainStyle.bind(this);
        this.nothingToDo = this.nothingToDo.bind(this);
        this.stopSo = this.stopSo.bind(this);
        this.cutTest = this.cutTest.bind(this);
        this.editTest = this.editTest.bind(this);
        this.devAble = this.devAble.bind(this);
        this.state = {
            currentStep: 6,
            name: { default: { name: "" } },
            dev: false,
            cutting: false
        }
        this.form = {
            up: this.nothingToDo,
            down: this.nothingToDo,
            del: this.stopSo,
            cut: this.cutTest
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
                {this.comp(1, 2) ? <Logo size="18" left>{this.props.things.zero.clickNext}</Logo> : null}
                {this.comp(1, 2) ? <Button click={this.next}>{this.props.things.zero.next}</Button> : null}
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
                        &nbsp;
                        <Example left="#624c82" right="#d7d7d7" click={this.changeMainStyle} args={1}>
                            {this.props.things.zero.styles.purpleGray}
                        </Example>
                        &nbsp;
                        <Example left="#333" right="white" click={this.changeMainStyle} args={2}>
                            {this.props.things.zero.styles.drakGrayWhite}
                        </Example>
                        &nbsp;
                        <Example left="white" right="white" click={this.changeMainStyle} args={3}>
                            {this.props.things.zero.styles.noneBG}
                        </Example>
                    </div>
                </div>;
            case 3:
                return <div>
                    <div style={this.navStyle}>
                        <FackButton things={this.props.things} />
                        <div className="animated tada infinite" style={this.animateSlow}>
                            <Small style={{
                                width: "100%",
                                borderLeft: "5px solid #c8ffc9",
                                borderRight: "5px solid #c8ffc9"
                            }} click={this.next}>
                                {this.props.things.name}
                            </Small>
                        </div>
                        <FackButton things={this.props.things} />
                        <FackButton things={this.props.things} />
                        <FackButton things={this.props.things} />
                        <FackButton things={this.props.things} />
                    </div>
                    <Logo size="18" left>
                        {this.props.things.zero.pickComponenet}
                    </Logo>
                    <br />
                    <Logo size="18" left>
                        {this.props.things.zero.pickName}
                        {this.props.things.zero.clickName}
                    </Logo>
                </div>;
            case 4:
                return <div>
                    <Logo size="18" left>
                        {this.props.things.zero.putItHere}
                    </Logo>
                    <div style={{
                        height: "34px",
                        width: "160px",
                        margin: "auto",
                        border: "3px dashed #8b8b8b",
                        fontSize: "24px",
                        textAlign: "center",
                        cursor: "pointer",
                        ...this.animateSlow
                    }}
                        onClick={this.next}
                        className="animated tada infinite">
                        {this.props.things.putItHere}
                    </div>
                    <br />
                    <Logo size="18" left>
                        {this.props.things.zero.putName}
                    </Logo>
                </div>;
            case 5:
                return <div>
                    <Logo size="18" left>
                        {this.state.dev ?
                            <span>{this.props.things.zero.clickEdit}</span>
                            : <span>{this.props.things.zero.clickDetail}</span>
                        }
                    </Logo>
                    <div style={this.navStyle}>
                        <FackButton things={this.props.things} />
                        <FackButton things={this.props.things} />
                        <FackButton things={this.props.things} />
                        <hr />
                        <div className={this.state.dev ? "" : "animated tada infinite"} style={this.animateSlow}>
                            <Small style={{
                                width: "100%"
                            }} click={this.devAble}>
                                {this.state.dev ? this.props.things.viewMode : this.props.things.detailMode}
                            </Small>
                        </div>
                        <FackButton things={this.props.things} />
                        <hr />
                        <FackButton things={this.props.things} />
                        <FackButton things={this.props.things} />
                    </div>
                    <div style={{ textAlign: "center", width: "60%", float: "left" }}>
                        {this.state.cutting ? <div style={{
                            height: "34px",
                            width: "160px",
                            margin: "auto",
                            border: "3px dashed #8b8b8b",
                            fontSize: "24px",
                            textAlign: "center",
                            cursor: "pointer"
                        }}
                            onClick={this.cutTest}>
                            {this.props.things.putItHere}
                        </div> : <Name
                                onChange={this.editTest}
                                index={0}
                                key={'l' + 0}
                                dev={this.state.dev}
                                default={this.state.name.default}
                                form={this.form}
                                things={this.props.things}
                                layout={'l'} />
                        }
                    </div>
                    {this.state.name.default.name ? <Button click={this.next}>{this.props.things.zero.next}</Button> : null}
                </div>
            case 6:
                return <div style={this.navStyle}>
                    <FackButton things={this.props.things} />
                    <FackButton things={this.props.things} />
                    <FackButton things={this.props.things} />
                    <hr />
                    <FackButton things={this.props.things} />
                    <FackButton things={this.props.things} />
                    <hr />
                    <div className="animated tada infinite" style={this.animateSlow}>
                        <Small style={{
                            width: "100%"
                        }}>
                            {this.props.things.style}
                        </Small>
                    </div>
                    <FackButton things={this.props.things} />
                </div>
            default:
                return null;
        }
    }
    next() {
        this.setState({
            currentStep: this.state.currentStep + 1
        }, specific);
        function specific() {
            // if (this.state.currentStep === 3) {
            //     window.dog.unPop();
            // }
        }
    }
    devAble() {
        if (this.state.dev) {
            this.setState({
                dev: false
            })
        } else {
            this.setState({
                dev: true
            })
        }
    }
    nothingToDo() {

    }
    stopSo() {
        alert(this.props.things.zero.noDel);
    }
    cutTest() {
        if (this.state.cutting) {
            this.setState({
                cutting: false
            })
        } else {
            this.setState({
                cutting: true
            })
        }
    }
    editTest(a, b) {
        this.setState({
            name: { default: { name: b.name } }
        })
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
                this.currentJson.style.rightBG = 1;
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

class FackButton extends Component {

    fakeButtonStyle = {
        width: "100%",
        height: "25px",
        cursor: "pointer",
        backgroundColor: "buttonface",
        color: "black",
        fontSize: "11px",
        textAlign: "center",
        paddingTop: "5px",
        boxSizing: "border-box"
    };

    render() {
        return <div style={{
            ...this.fakeButtonStyle,
            borderLeft: Math.random() > 0.5 ? "5px solid #c8ffc9" : "5px solid transparent",
            borderRight: Math.random() > 0.5 ? "5px solid #c8ffc9" : "5px solid transparent"
        }}>{this.props.things.zero.otherComponent}</div>
    }

}
