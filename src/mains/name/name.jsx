import React, {
    Component
} from 'react';
import strings from '../../strings.json';
import Input from '../../react/out/input/input';
import Group from '../group/group';

class Name extends Component {
    things;
    inputer;

    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.edit = this.edit.bind(this);
        this.happed = this.happed.bind(this);
        this.state = {
            edit: false
        }
    }

    render() {
        return (
            <div>
                {this.state.edit ?
                    <Input model={this.happed} color="white" value={this.props.default}>name</Input>
                    : <div className="name-name">
                        {this.props.default ? this.props.default : this.things.occupied}
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

    happed(e) {
        this.inputer = e;
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

export default Name;
