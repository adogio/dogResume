import React, {
    Component
} from 'react';
import Small from '../../react/res/smallButton/smallButton';
import Logo from '../../react/res/secondLogo/secondLogo';
import Button from '../../react/res/button/button';
import TemplateInsider from './templateInsider';
import templates from './templates.json';

class ChooseTemplate extends Component {
    main = {
        width: "120px",
        height: "150px",
        marginTop: "5px",
        marginLeft: "1px",
        marginRight: "1px"
    }
    leftColor;
    rightColor;

    constructor(props) {
        super(props);
        this.finish = this.finish.bind(this);
        this.renderer = this.renderer.bind(this);
        this.leftColor = window.dogResume.getStyling().left.backgroundColor;
        this.rightColor = window.dogResume.getStyling().right.backgroundColor;
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Logo>{this.props.things.template}</Logo>
                {templates.map(this.renderer)}
                <Button style={{ marginTop: "30px" }} click={this.finish}>{this.props.things.done}</Button>
            </div>
        );
    }
    renderer(i, index) {
        return <Small
            style={this.main}
            key={index + Math.random()}
            click={this.inputResume}
            args={i.template}>
            <TemplateInsider
                things={this.props.things}
                left={{ color: this.leftColor }}
                right={{ color: this.rightColor }}
                list={i.template}
                text={this.props.things.id === "cn" ? i.text.cn : i.text.en} />
        </Small>;
    }
    finish() {
        window.dog.unPop();
    }
    inputResume(arg) {
        console.log(arg);
        window.dogResume.inputJson(JSON.stringify(arg));
    }
}

export default ChooseTemplate;
