import React, {
    Component
} from 'react';
import Space from '../space/space';
import Education from '../education/education';
import Name from '../name/name';
import './main.css';
import strings from '../../strings.json';

class template extends Component {
    things;
    selected;
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
        this.state = {
            leftComponents: [{ component: 'space', default: 'space' }],
            rightComponents: [{ component: 'space', default: 'space' }],
            triggerdLeft: false,
            triggerdRight: false,
            dev: false
        }
    }

    componentDidMount() {
        window.dogResume.selectComponent = (type) => {
            this.selectComponent(type);
        }
        window.dogResume.cancelSelect = () => {
            this.cancelSelect();
        }
        window.dogResume.detailMode = () => {
            this.detailMode();
        }
        window.dogResume.viewMode = () => {
            this.viewMode();
        }
    }

    render() {
        return (
            <div className="main">
                <h3>
                    {this.getTopper()}
                </h3>
                <div className="resume">
                    <div className="resume-left">
                        {this.state.leftComponents.map(this.leftRanderer)}
                    </div>
                    <div className="resume-right">
                        {this.state.rightComponents.map(this.rightRanderer)}
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
                return <Name onChange={this.changeLeft} index={index} key={'l' + index} dev={this.state.dev} default={i.default}/>;
            default:
        }
    }

    rightRanderer(i, index) {
        switch (i.component) {
            case "space":
                return <Space key={'r' + index} index={index} style={this.state.triggerdRight} onClick={this.selectRightTarget}></Space>;
            case "name":
                return <Name onChange={this.changeRight} index={index} key={'r' + index} dev={this.state.dev} default={i.default}/>;
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
    selectLeftTarget(index) {
        this.cancelSelect();
        let b = this.state.leftComponents;
        b.splice(index + 1, 0, { component: this.selected, default: "" }, { component: 'space', default: 'space' });
        this.setState({
            leftComponents: []
        })
        this.setState({
            leftComponents: b
        })
    }

    selectRightTarget(index) {
        this.cancelSelect();
        let b = this.state.rightComponents;
        b.splice(index + 1, 0, { component: this.selected, default: "" }, { component: 'space', default: 'space' });
        this.setState({
            rightComponents: []
        })
        this.setState({
            rightComponents: b
        })
    }

    getTopper() {
        return this.things.resumeTopper.default;
    }

    selectComponent(type) {
        this.selected = type;
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
}

export default template;
