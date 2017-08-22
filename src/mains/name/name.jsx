import React, {
    Component
} from 'react';
import Input from '../../react/out/input/input';
import Group from '../group/group';

class Name extends Component {
    inputer = {};

    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.happed = this.happed.bind(this);
        this.state = {
            edit: false
        }
    }

    render() {
        return (
            <div className="component-topper">
                {this.state.edit ?
                    <Input model={this.happed} color="white" value={this.props.default.name}>name</Input>
                    : <div className="name-name">
                        {this.props.default.name ? this.props.default.name : this.props.things.occupied}
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
        this.inputer.name = e;
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
