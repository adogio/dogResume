import React, {
    Component
} from 'react';
import Details from '../details/details';
import Group from '../group/group';
import RightLane from '../details/rightLane';


class Education extends Component {
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
                    "edit: " + this.props.things.educationInside.title :
                    <div>
                        <div className="common-header">
                            <RightLane icon="graduation-cap" style={this.props.icon.style} type={this.props.icon.type} />
                            {this.props.things.educationInside.title}
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

export default Education;
