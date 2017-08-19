import React, {
    Component
} from 'react';
import strings from '../../strings.json';
import Input from '../../react/res/smallInput/smallInput';
import Button from '../../react/res/smallButton/smallButton';

class Bar extends Component {
    things;
    barStyle = {
        backgroundColor: "#ccc"
    };
    skillStyle = {
        textAlign: "left"
    }
    levels = [1, 2, 3, 4, 5];
    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.updateBar = this.updateBar.bind(this);
        this.selectLevel = this.selectLevel.bind(this);
        this.mapLevelButtons = this.mapLevelButtons.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.isEdit ?
                    <Input value={this.props.skill.skill} model={this.updateBar} /> :
                    <div style={this.skillStyle}>
                        <i className="fa fa-chevron-right fa-fw" />
                        {this.props.skill.skill}
                    </div>
                }
                {this.props.isEdit ?
                    <div>
                        {this.levels.map(this.mapLevelButtons)}
                    </div> :
                    <div className="common-bar-outer" style={this.barStyle}>
                        <div className="common-bar-inner" style={{ width: this.props.skill.level * 20 + "%", backgroundColor: "#51c600", height: "10px" }}>
                        </div>
                    </div>
                }
            </div>
        );
    }

    updateBar(e) {
        let b = this.props.skill;
        b.skill = e;
        this.props.onChange(b, this.props.index);
    }

    selectLevel(level) {
        let b = this.props.skill;
        b.level = level;
        this.props.onChange(b, this.props.index);
    }

    mapLevelButtons(i, index) {
        let style = {};
        if (this.props.skill.level == i) {
            style = {
                backgroundColor: "green",
                fontWeight: "bold"
            };
        }
        return <Button key={index} click={this.selectLevel} style={style} args={i}>{i}</Button>;
    }
}

export default Bar;
