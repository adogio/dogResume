import React, {
    Component
} from 'react';
import strings from '../../strings.json';
import Input from '../../react/res/smallInput/smallInput';
import Group from '../group/group';

class Thing extends Component {
    things;
    inputer = {};
    outputStyle = {
        paddingTop: "6px",
        fontStyle: "italic",
        textAlign: "left",
        paddingLeft: "10px",
        fontSize: "16px"
    };

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
                    <div>
                        <div>"edit: " + {this.things.thingInside.title}</div>
                        <Input model={this.happed} color="white" value={this.props.default.name} placeholder={this.things.thingInside.input} />
                    </div>
                    : <div style={this.outputStyle}>
                        <i className="fa fa-chevron-right fa-fw" />
                        {this.props.default.name ? this.props.default.name : this.things.occupied}
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
                ></Group> : null
                }
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

export default Thing;
