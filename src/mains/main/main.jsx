import React, {
    Component
} from 'react';
import Space from '../space/space';
import Education from '../education/education';
import Name from '../name/name';
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
            dev: false
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
    }

    render() {
        return (
            <div className="main">
                <h3>
                    {this.getTopper()}
                </h3>
                <div className="resume" id="resume">
                    <div className="centerer">
                        <div className="resume-left">
                            {this.state.leftComponents.map(this.leftRanderer)}
                        </div>
                        <div className="resume-right">
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
                    form={this.form.left} />;
            case "education":
                return <Education></Education>;
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
                    form={this.form.right} />;
            case "education":
                return <Education></Education>;
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
        this.selectComponent(c[0].component, true);
    }

    selectLeftTarget(index) {
        this.cancelSelect();
        window.dogResume.global.selected = false;
        let b = this.state.leftComponents;
        if (Boolean(this.cutting)) {
            b.splice(index + 1, 0, { component: this.selected, default: this.cutting }, { component: 'space', default: 'space' });
        } else {
            b.splice(index + 1, 0, { component: this.selected, default: "" }, { component: 'space', default: 'space' });
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
            b.splice(index + 1, 0, { component: this.selected, default: "" }, { component: 'space', default: 'space' });
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
        if (!Boolean(cut)) {
            this.selected = type;
        }
        switch (type) {
            case "education":
                this.setState({
                    triggerdRight: true
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
                if (i % 2 != 0) {
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
