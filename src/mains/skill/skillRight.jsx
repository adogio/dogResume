import React, {
    Component
} from 'react';
import Bar from '../group/bar';
import Button from '../../react/res/smallButton/smallButton';
import strings from '../../strings.json';

class SkillRight extends Component {
    things;

    addStyle = {
        backgroundColor: "#729672",
        color: "white",
        width: "100px"
    };

    delStyle = {
        backgroundColor: "#984e4e",
        color: "white",
        width: "65px"
    };

    gridsLeft = {
        float: "left",
        width: "48%"
    };

    gridsRight = {
        float: "right",
        width: "48%"
    };

    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.renderQueueLeft = this.renderQueueLeft.bind(this);
        this.renderQueueRight = this.renderQueueRight.bind(this);
        this.changeBar = this.changeBar.bind(this);
        this.addBar = this.addBar.bind(this);
        this.delBar = this.delBar.bind(this);
    }

    render() {
        return (
            <div>
                <div style={this.gridsLeft}>
                    {this.props.skill.map(this.renderQueueLeft)}
                </div>
                <div style={this.gridsRight}>
                    {this.props.skill.map(this.renderQueueRight)}
                </div>
                {this.props.isEdit ? <Button click={this.addBar} style={this.addStyle}><i className="fa fa-plus"></i></Button> : null}
            </div>
        );
    }

    renderQueueLeft(i, index) {
        if (index % 2 !== 0) {
            return null;
        }
        return <span key={index}>
            <Bar skill={i} index={index} isEdit={this.props.isEdit} onChange={this.changeBar} />
            {this.props.isEdit ? <Button click={this.delBar} args={index} style={this.delStyle}><i className="fa fa-times"></i></Button> : null}
        </span>;
    }

    renderQueueRight(i, index) {
        if (index % 2 === 0) {
            if (index === this.props.skill.length - 1) {
                return null;
            }
            return null;
        }
        return <span key={index}>
            <Bar skill={i} index={index} isEdit={this.props.isEdit} onChange={this.changeBar} />
            {this.props.isEdit ? <Button click={this.delBar} args={index} style={this.delStyle}><i className="fa fa-times"></i></Button> : null}
        </span>;
    }

    changeBar(bar, index) {
        let b = this.props.skill;
        b[index] = bar;
        this.props.onChange(b);
    }

    addBar() {
        let b = this.props.skill;
        b.push({ skill: "", level: 4 });
        this.props.onChange(b);
    }

    delBar(index) {
        let b = this.props.skill;
        b.splice(index, 1);
        this.props.onChange(b);
    }
}

export default SkillRight;
