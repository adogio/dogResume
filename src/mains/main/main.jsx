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
import Thing from '../thing/thing';
import Photo from '../photo/photo';

import '../printable.css';

class template extends Component {
    selected;
    form;
    cutting;
    notPrintViewBorderStyle = { border: "5px solid black" };
    constructor(props) {
        super(props);
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
            isPrintView: false,
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
                icon: { type: "font", style: {} },
                bars: {
                    outer: {
                        backgroundColor: "#ccc"
                    },
                    inner: {
                        backgroundColor: "#51c600"
                    }
                },
                photoBorder: {
                    border: "0px solid white"
                },
                photoBG: {
                    backgroundColor: "#ffd65c",
                    color: "black",
                    border: "2px solid white"
                },
                resume: {
                    border: "3px dashed #8b8b8b"
                }
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
                alert(this.props.things.inCutting);
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
        window.dogResume.printView = () => {
            this.setState({
                isPrintView: true
            })
        }
        window.dogResume.editView = () => {
            this.setState({
                isPrintView: false
            })
        }
    }

    render() {
        // <h3>
        //     {this.getTopper()}
        // </h3>
        return (
            <div style={{ margin: "0px", marginTop: "55px", marginBottom: "20px", textAlign: "center" }}>
                <div
                    id="resume"
                    style={{
                        ...this.state.isPrintView ? this.state.styling.resume : this.notPrintViewBorderStyle,
                        margin: "auto",
                        width: "630px",
                        height: "891px"
                    }}
                >
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
                return <Space
                    key={'l' + index}
                    index={index}
                    style={this.state.triggerdLeft}
                    things={this.props.language}
                    onClick={this.selectLeftTarget} />;
            case "name":
                return <Name onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    things={this.props.language}
                    layout={'l'} />;
            case "thing":
                return <Thing onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    things={this.props.language}
                    layout={'l'} />;
            case "achivement":
                return <Achivement onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    things={this.props.language}
                    layout={'l'} />;
            case "description":
                return <Description onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    bg={this.state.styling.photoBG}
                    things={this.props.language}
                    layout={'l'} />;
            case "photo":
                return <Photo onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    photo={this.state.styling.photoBorder}
                    things={this.props.language}
                    layout={'l'} />;
            case "publication":
                return <Publication onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    things={this.props.language}
                    layout={'l'} />;
            case "connect":
                return <Connect
                    onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    things={this.props.language}
                    layout={'l'} />;
            case "skill":
                return <Skill
                    onChange={this.changeLeft}
                    index={index}
                    key={'l' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.left}
                    bars={this.state.styling.bars}
                    things={this.props.language}
                    layout={'l'} />;
            default:
        }
    }

    rightRanderer(i, index) {
        switch (i.component) {
            case "space":
                return <Space
                    key={'r' + index}
                    index={index}
                    style={this.state.triggerdRight}
                    things={this.props.language}
                    onClick={this.selectRightTarget} />;
            case "name":
                return <Name onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.right}
                    things={this.props.language}
                    layout={'r'} />;
            case "thing":
                return <Thing onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.right}
                    things={this.props.language}
                    layout={'r'} />;
            case "education":
                return <Education
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    things={this.props.language}
                    form={this.form.right} />;
            case "summary":
                return <Summary
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    things={this.props.language}
                    form={this.form.right} />;
            case "experience":
                return <Experience
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    things={this.props.language}
                    form={this.form.right} />;
            case "project":
                return <Project
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    things={this.props.language}
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
                    things={this.props.language}
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
                    things={this.props.language}
                    layout={'r'} />;
            case "connect":
                return <Connect
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    form={this.form.right}
                    things={this.props.language}
                    layout={'r'} />;
            case "skill":
                return <Skill
                    onChange={this.changeRight}
                    index={index}
                    key={'r' + index}
                    dev={this.state.dev}
                    default={i.default}
                    icon={this.state.styling.icon}
                    bars={this.state.styling.bars}
                    form={this.form.right}
                    things={this.props.language}
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
        return this.props.things.resumeTopper.default;
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
            case "photo":
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
        let style = window.dogResume.getStylingSelected();

        return JSON.stringify({ left: left, right: right, style: style });

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

        if (parsed.style) window.dogResume.setStyling(parsed.style);

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
