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
        this.state = {
            leftComponents: ['space'],
            rightComponents: ['space'],
            triggerdLeft: false,
            triggerdRight: false
        }
    }

    componentDidMount() {
        window.dogResume.selectComponent = (type) => {
            this.selectComponent(type);
        }
        window.dogResume.cancelSelect = () => {
            this.cancelSelect();
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

    leftRanderer(i, index) {
        switch (i) {
            case "space":
                return <Space key={'l' + index} index={index} style={this.state.triggerdLeft} onClick={this.selectLeftTarget}></Space>;
            case "name":
                return <Name key={'l' + index} />;
            default:
        }
    }

    rightRanderer(i, index) {
        switch (i) {
            case "space":
                return <Space key={'r' + index} index={index} style={this.state.triggerdRight} onClick={this.selectRightTarget}></Space>;
            case "name":
                return <Name key={'r' + index} />;
            default:
        }
    }

    selectLeftTarget(index) {
        console.log(index);
        this.cancelSelect();
        let b = this.state.leftComponents;
        b.splice(index + 1, 0, this.selected, 'space');
        this.setState({
            leftComponents: b
        })
    }

    selectRightTarget(index) {
        console.log(index);
        this.cancelSelect();
        let b = this.state.rightComponents;
        b.splice(index + 1, 0, this.selected, 'space');
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
