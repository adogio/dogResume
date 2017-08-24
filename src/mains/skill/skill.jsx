import React, {
    Component
} from 'react';
import Group from '../group/group';
import SkillLeft from './skillLeft';
import SkillRight from './skillRight';
import RightLane from '../details/rightLane';

class Skill extends Component {
    inputer = {};
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.state = {
            edit: false
        }
    }

    render() {
        return (
            <div className="component-topper">
                {this.state.edit ?
                    "edit: " + this.props.things.skill
                    :
                    <div className="common-header">
                        {this.props.layout === 'l' ?
                            <div>{this.props.things.skillInside.leftTitle}</div>
                            : <div>
                                <RightLane icon="tasks" style={this.props.icon.style} type={this.props.icon.type} />
                                {this.props.things.skillInside.rightTitle}
                            </div>
                        }
                    </div>
                }
                {this.props.layout === 'l' ?
                    <SkillLeft
                        bars={this.props.bars}
                        skill={this.props.default.skill ? this.props.default.skill : []}
                        isEdit={this.state.edit}
                        onChange={this.changeDetail} /> :
                    <SkillRight
                        bars={this.props.bars}
                        skill={this.props.default.skill ? this.props.default.skill : []}
                        isEdit={this.state.edit}
                        onChange={this.changeDetail} />
                }
                {this.props.dev ? <Group
                    edit={this.edit}
                    up={this.props.form.up}
                    down={this.props.form.down}
                    del={this.props.form.del}
                    cut={this.props.form.cut}
                    isEdit={this.state.edit}
                    index={this.props.index}
                ></Group> : null}
            </div>
        );
    }

    changeDetail(detail, isDel) {
        let b = this.props.default;
        b.skill = detail;
        this.props.onChange(this.props.index, b);
    }

    edit() {
        if (this.state.edit) {
            this.setState({
                edit: false
            })
        } else {
            this.setState({
                edit: true
            })
        }
    }
}

export default Skill;
