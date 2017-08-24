import React, {
    Component
} from 'react';
import Small from '../../react/res/smallButton/smallButton';
import Logo from '../../react/res/secondLogo/secondLogo';
import Button from '../../react/res/button/button';

class ChooseTemplate extends Component {
    main = {
        width: "120px",
        height: "150px"
    }
    left = {

    };
    leftColor;
    rightColor;
    constructor(props) {
        super(props);
        this.finish = this.finish.bind(this);
        this.leftColor = window.dogResume.getStyling().left.backgroundColor;
        this.rightColor = window.dogResume.getStyling().right.backgroundColor;
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Logo>{this.props.things.template}</Logo>
                <Small style={this.main}>
                    <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <div style={{
                            width: "30%",
                            height: "120px",
                            float: "left",
                            backgroundColor: this.leftColor
                        }} />
                        <div style={{
                            width: "70%",
                            height: "120px",
                            float: "left",
                            backgroundColor: this.rightColor
                        }} />
                        {this.props.things.templateList[0]}
                    </div>
                </Small>
                &nbsp;
                <Small style={this.main}>
                    <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <div style={{
                            width: "30%",
                            height: "120px",
                            float: "left",
                            backgroundColor: this.leftColor
                        }} />
                        <div style={{
                            width: "70%",
                            height: "120px",
                            float: "left",
                            backgroundColor: this.rightColor
                        }} />
                        {this.props.things.templateList[1]}
                    </div>
                </Small>
                &nbsp;
                <Small style={this.main}>
                    <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <div style={{
                            width: "30%",
                            height: "120px",
                            float: "left",
                            backgroundColor: this.leftColor
                        }} />
                        <div style={{
                            width: "70%",
                            height: "120px",
                            float: "left",
                            backgroundColor: this.rightColor
                        }} />
                        {this.props.things.templateList[2]}
                    </div>
                </Small>
            </div>
        );
    }

    finish() {
        window.dog.unPop();
    }
}

export default ChooseTemplate;
