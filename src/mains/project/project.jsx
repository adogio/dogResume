import React, {
    Component
} from 'react';
import Details from '../details/details';
import strings from '../../strings.json';
import Group from '../group/group';
import RightLane from '../details/rightLane';

class Project extends Component {
    things;
    inputer = {};
    constructor(props) {
        super(props);
        this.things = strings.chinese;
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
                    "edit: " + this.things.projectInside.title :
                    <div>
                        <div className="common-header">
                            <RightLane icon="sitemap" style={this.props.icon.style} type={this.props.icon.type} />
                            {this.things.projectInside.title}
                        </div>
                    </div>
                }
                <Details detail={this.props.default.detail ? this.props.default.detail : []} isEdit={this.state.edit} onChange={this.changeDetail} />

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

    changeDetail(detail) {
        let b = this.props.default;
        b.detail = detail;
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

export default Project;
