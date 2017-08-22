import React, {
    Component
} from 'react';
import Group from '../group/group';
import Input from '../../react/res/smallInput/smallInput';


class Connect extends Component {
    contentStyle = {
        lineHeight: "23px"
    }

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
                    "edit: " + this.props.things.connectInside.title :
                    <div>
                        <div className="common-header">
                            {this.props.things.connectInside.title}
                        </div>
                    </div>
                }
                <div className="common-detail" style={this.contentStyle}>
                    {this.props.default.tel || this.state.edit ? <i className="fa fa-mobile fa-fw" /> : null}
                    {this.state.edit ? <Input value={this.props.default.tel} args={'tel'} model={this.changeDetail} /> : this.props.default.tel}
                    {this.props.default.phone || this.state.edit ? <br /> : null}
                    {this.props.default.phone || this.state.edit ? <i className="fa fa-phone fa-fw" /> : null}
                    {this.state.edit ? <Input value={this.props.default.phone} args={'phone'} model={this.changeDetail} /> : this.props.default.phone}
                    {this.props.default.email || this.state.edit ? <br /> : null}
                    {this.props.default.email || this.state.edit ? <i className="fa fa-envelope fa-fw" /> : null}
                    {this.state.edit ? <Input value={this.props.default.email} args={'email'} model={this.changeDetail} /> : this.props.default.email}
                    {this.props.default.address || this.state.edit ? <br /> : null}
                    {this.props.default.address || this.state.edit ? <i className="fa fa-home fa-fw" /> : null}
                    {this.state.edit ? <Input value={this.props.default.address} args={'address'} model={this.changeDetail} /> : this.props.default.address}
                </div>
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

    changeDetail(e, args) {
        let b = this.props.default;
        b[args] = e;
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

export default Connect;
