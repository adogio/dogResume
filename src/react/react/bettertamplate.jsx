import React, {
    Component
} from 'react';
import Details from '../details/details';
import strings from '../../strings.json';
import Group from '../group/group';


class Education extends Component {
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
        console.log(props.default);
    }

    render() {
        return (
            <div>
                {this.state.edit ?
                    "inputer"
                    :
                    <div>
                        <div className="common-header">
                            <i className="fa fa-graduation-cap fa-fw"></i>
                            {this.things.educationInside.title}
                        </div>
                        <Details detail={this.props.detail} isEdit={this.state.edit} onChange={this.changeDetail} />
                    </div>
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

    changeDetail(detail) {
        this.inputer.detail = detail;
    }

    edit() {
        if (this.state.edit) {
            this.props.onChange(this.props.index, this.inputer);
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
