import React, {
    Component
} from 'react';
import Space from '../space/space';
import Education from '../education/education';
import Connect from '../connect/connent';
import Experience from '../experience/experience';
import Project from '../project/project';
import Name from '../name/name';
import Skill from '../skill/skill';
import Achivement from '../achivement/achivement';
import Publication from '../publication/publication';
import Description from '../description/description';
import Summary from '../summary/summary';
import './main.css';
import '../printable.css';
import strings from '../../strings.json';

class template extends Component {
    things;
    selected;
    form;
    cutting;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.selected = '';
        this.getTopper = this.getTopper.bind(this);
        this.leftRanderer = this.leftRanderer.bind(this);
        this.rightRanderer = this.rightRanderer.bind(this);
        this.selectComponent = this.selectComponent.bind(this);
        this.selectLeftTarget = this.selectLeftTarget.bind(this);
        this.selectRightTarget = this.selectRightTarget.bind(this);
        this.cancelSelect = this.cancelSelect.bind(this);
        this.detailMode = this.detailMode.bind(this);
        this.viewMode = this.viewMode.bind(this);
        this.changeLeft = this.changeLeft.bind(this);
        this.changeRight = this.changeRight.bind(this);
        this.upLeft = this.upLeft.bind(this);
        this.downLeft = this.downLeft.bind(this);
        this.delLeft = this.delLeft.bind(this);
        this.upRight = this.upRight.bind(this);
        this.downRight = this.downRight.bind(this);
        this.delRight = this.delRight.bind(this);
        this.cutLeft = this.cutLeft.bind(this);
        this.cutRight = this.cutRight.bind(this);
        this.outputJson = this.outputJson.bind(this);
        this.inputJson = this.inputJson.bind(this);
        this.cutting = null;
        this.form = {
            left: {
                up: this.upLeft,
                down: this.downLeft,
                del: this.delLeft,
                cut: this.cutLeft
            }, right: {
                up: this.upRight,
                down: this.downRight,
                del: this.delRight,
                cut: this.cutRight
            }

        }
        this.state = {
            leftComponents: [{ component: 'space', default: 'space' }],
            rightComponents: [{ component: 'space', default: 'space' }],
            triggerdLeft: false,
            triggerdRight: false,
            dev: false,
            styling: {
                left: {
                    color: "#222222",
                    boxSizing: "border-box",
                    borderRight: "2px solid black",
                    backgroundColor: "#c7c7c7"
                },
                right: {
                    color: "#040404",
                    backgroundColor: "#d7d7d7"
                },
                icon: { type: "font", style: {} }
            }
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.resumeId);
        window.dogResume.global = {};
        window.dogResume.global.selected = false;
        window.dogResume.selectComponent = (type) => {
            this.selectComponent(type);
            window.dogResume.global.selected = true;
            return 1;
        }
        window.dogResume.cancelSelect = () => {
            if (this.cutting != null) {
                alert(this.things.inCutting);
                return 0;
            }
            window.dogResume.global.selected = false;
            this.cancelSelect();
            return 1;
        }
        window.dogResume.detailMode = () => {
            this.detailMode();
            return 1;
        }
        window.dogResume.viewMode = () => {
            this.viewMode();
            return 1;
        }
        window.dogResume.outputJson = () => {
            return this.outputJson();
        }
        window.dogResume.inputJson = (json) => {
            return this.inputJson(json);
        }
        window.dogResume.styling = (style) => {
            this.setState({
                styling: style
            });
        }
        window.dogResume.getStyling = () => {
            return this.state.styling;
        }
    }

    render() {
        return (
            <div className="main">
                <h3>
                    {this.getTopper()}
                </h3>
                <div className="resume" id="resume">
                    <div className="centerer">
                        <div className="resume-left" style={this.state.styling.left}>
                            {this.state.leftComponents.map(this.leftRanderer)}
                        </div>
                        <div className="resume-right" style={this.state.styling.right}>
                            {this.state.rightComponents.map(this.rightRanderer)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    detailMode() {
        this.setState({
            dev: false
        })
    }

    viewMode() {
        this.setState({
            dev: true
        })
    }

    leftRanderer(i, index) {
        switch (i.component) {
            case "space":
                return <Space key={'l' + index} index={index} style={this.state.triggerdLeft} onClick={this.selectLeftTarget}></Space>;
            case "name":
                return <Name onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    layout={'l'} />;
            case "achivement":
                return <Achivement onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    layout={'l'} />;
            case "description":
                return <Description onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    layout={'l'} />;
            case "publication":
                return <Publication onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    layout={'l'} />;
            case "connect":
                return <Connect
                    onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    layout={'l'} />;
            case "skill":
                return <Skill
                    onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    layout={'l'} />;
            default:
        }
    }

    rightRanderer(i, index) {
        switch (i.component) {
            case "space":
                return <Space key={'r' + index} index={index} style={this.state.triggerdRight} onClick={this.selectRightTarget}></Space>;
            case "name":
                return <Name onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.right}
                    layout={'r'} />;
            case "education":
                return <Education
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    form={this.form.right} />;
            case "summary":
                return <Summary
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    form={this.form.right} />;
            case "experience":
                return <Experience
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    form={this.form.right} />;
            case "project":
                return <Project
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    form={this.form.right} />;
            case "achivement":
                return <Achivement
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    form={this.form.right}
                    layout={'r'} />;
            case "publication":
                return <Publication
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    form={this.form.right}
                    layout={'r'} />;
            case "connect":
                return <Connect
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.right}
                    layout={'r'} />;
            case "skill":
                return <Skill
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    form={this.form.right}
                    layout={'r'} />;
            default:
        }
    }
    changeLeft(index, content) {
        let b = this.state.leftComponents;
        b[index].default = content;
        this.setState({
            leftComponents: b
        })
    }
    changeRight(index, content) {
        let b = this.state.rightComponents;
        b[index].default = content;
        this.setState({
            rightComponents: b
        })
    }
    // The reason to sperate left and right is in the future left and right have different logic(maybe)
    upLeft(index) {
        if (index === 1) {
            return 0;
        }
        let b = this.state.leftComponents;
        let thing = b[index];
        b.splice(index, 2);
        b.splice(index - 2, 0, thing, { component: 'space', default: 'space' })
        this.setState({
            leftComponents: b
        })
    }

    downLeft(index) {
        if (index === this.state.leftComponents.length - 1) {
            return 0;
        }
        let b = this.state.leftComponents;
        let thing = b[index];
        b.splice(index, 2);
        b.splice(index + 2, 0, thing, { component: 'space', default: 'space' })
        this.setState({
            leftComponents: b
        })
    }

    delLeft(index) {
        let b = this.state.leftComponents;
        b.splice(index, 2);
        this.setState({
            leftComponents: b
        })
    }

    cutLeft(index) {
        let b = this.state.leftComponents;
        let c = b.splice(index, 2);
        this.setState({
            leftComponents: b
        })
        this.cutting = c[0].default;
        this.selected = c[0].component;
        this.selectComponent(c[0].component, true);
    }

    upRight(index) {
        if (index === 1) {
            return 0;
        }
        let b = this.state.rightComponents;
        let thing = b[index];
        b.splice(index, 2);
        b.splice(index - 2, 0, thing, { component: 'space', default: 'space' })
        this.setState({
            rightComponents: b
        })
    }

    downRight(index) {
        if (index === this.state.rightComponents.length - 1) {
            return 0;
        }
        let b = this.state.rightComponents;
        let thing = b[index];
        b.splice(index, 2);
        b.splice(index + 2, 0, thing, { component: 'space', default: 'space' })
        this.setState({
            rightComponents: b
        })
    }

    delRight(index) {
        let b = this.state.rightComponents;
        b.splice(index, 2);
        this.setState({
            rightComponents: b
        })
    }

    cutRight(index) {
        let b = this.state.rightComponents;
        let c = b.splice(index, 2);
        this.setState({
            rightComponents: b
        })
        this.cutting = c[0].default;
        this.selected = c[0].component;
        this.selectComponent(c[0].component, true);
    }

    selectLeftTarget(index) {
        this.cancelSelect();
        window.dogResume.global.selected = false;
        let b = this.state.leftComponents;
        if (Boolean(this.cutting)) {
            b.splice(index + 1, 0, { component: this.selected, default: this.cutting }, { component: 'space', default: 'space' });
        } else {
            b.splice(index + 1, 0, { component: this.selected, default: {} }, { component: 'space', default: 'space' });
        }
        this.setState({
            leftComponents: b
        })
        this.cutting = null;
    }

    selectRightTarget(index) {
        this.cancelSelect();
        window.dogResume.global.selected = false;
        let b = this.state.rightComponents;
        if (Boolean(this.cutting)) {
            b.splice(index + 1, 0, { component: this.selected, default: this.cutting }, { component: 'space', default: 'space' });
        } else {
            b.splice(index + 1, 0, { component: this.selected, default: {} }, { component: 'space', default: 'space' });
        }
        this.setState({
            rightComponents: b
        })
        this.cutting = null;
    }

    getTopper() {
        return this.things.resumeTopper.default;
    }

    selectComponent(type, cut) {
        if (!cut) {
            this.selected = type;
        }
        switch (type) {
            case "experience":
            case "education":
            case "project":
            case "summary":
                this.setState({
                    triggerdRight: true
                })
                break;
            case "connect":
            case "description":
                this.setState({
                    triggerdLeft: true
                })
                break;
            default:
                this.setState({
                    triggerdLeft: true,
                    triggerdRight: true
                })
        }

    }

    cancelSelect() {
        this.setState({
            triggerdLeft: false,
            triggerdRight: false
        })
    }

    outputJson() {
        let left = removeSpace(this.state.leftComponents);
        let right = removeSpace(this.state.rightComponents);

        return JSON.stringify({ left: left, right: right });

        function removeSpace(componentStream) {
            let output = [];
            for (let i = 0; i < componentStream.length; i++) {
                if (i % 2 !== 0) {
                    output.push(componentStream[i]);
                }
            }
            return output;
        }
    }

    inputJson(json) {
        let parsed = JSON.parse(json);

        this.setState({
            leftComponents: addSpace(parsed.left),
            rightComponents: addSpace(parsed.right)
        })

        return 1;

        function addSpace(componentStream) {
            let output = [{ component: 'space', default: 'space' }];
            for (let i = 0; i < componentStream.length; i++) {
                output.push(componentStream[i]);
                output.push({ component: 'space', default: 'space' });
            }
            return output;
        }
    }
}

export default template;
