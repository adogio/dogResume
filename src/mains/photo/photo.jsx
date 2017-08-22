import React, {
    Component
} from 'react';
import Group from '../group/group';
import Input from '../../react/res/smallInput/smallInput';

class Photo extends Component {
    photoStyle = {
        marginTop: "6px",
        marginBottom: "6px",
        width: "80%",
        maxHeight: "200px"
    };
    descriptionStyle = {
        fontStyle: "italic",
        textAlign: "left",
        paddingLeft: "5px",
        fontSize: "13px"
    };
    defaultLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";

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
                    "edit: " + this.props.things.photoInside.title :
                    <div>
                        <img
                            alt={this.props.things.photoInside.error}
                            style={{ ...this.photoStyle, ...this.props.photo }}
                            src={this.props.default.src ?
                                this.props.default.src :
                                this.defaultLink} />
                    </div>
                }
                {this.state.edit ?
                    <div>
                        <div style={this.descriptionStyle}>
                            <i className="fa fa-chevron-right fa-fw" />
                            {this.props.things.photoInside.description}
                        </div>
                        <Input value={this.props.default.src ? this.props.default.src : ""}
                            model={this.changeDetail}
                            placeholder={this.props.things.photoInside.src} />
                    </div> :
                    null
                }
                {this.props.dev ? <Group
                    edit={this.edit}
                    up={this.props.form.up}
                    down={this.props.form.down}
                    del={this.props.form.del}
                    cut={this.props.form.cut}
                    isEdit={this.state.edit}
                    index={this.props.index} /> : null}
            </div>
        );
    }

    changeDetail(src) {
        let b = this.props.default;
        b.src = src;
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

export default Photo;
