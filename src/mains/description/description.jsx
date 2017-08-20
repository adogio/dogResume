import React, {
    Component
} from 'react';
import strings from '../../strings.json';
import Group from '../group/group';
import Input from '../../react/res/smallInput/smallInput';
import Button from '../../react/res/smallButton/smallButton';

class Description extends Component {
    things;
    mainStyle = {
        marginLeft: "1%",
        width: "96%",
        WebkitPrintColorAdjust: "exact",
        border: "2px solid white",
        overflow: "hidden",
        backgroundColor: "#ffd65c",
        color: "black"
    };
    insiderStyle = {
        textAlign: "center",
        fontSize: "21px"
    };
    contentStyle = {
        textAlign: "center",
        lineHeight: "23px"
    };
    switcher = {
        height: "2px",
        WebkitPrintColorAdjust: "exact",
        backgroundColor: "white"
    }
    times;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.times = [
            { name: this.things.descriptionInside.fullTime, id: 1 },
            { name: this.things.descriptionInside.partTime, id: 2 },
            { name: this.things.descriptionInside.internship, id: 3 },
            { name: this.things.descriptionInside.contractor, id: 4 }
        ];
        this.edit = this.edit.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.changeText = this.changeText.bind(this);
        this.mapTimesButtons = this.mapTimesButtons.bind(this);
        this.selectTime = this.selectTime.bind(this);
        this.switchTime = this.switchTime.bind(this);
        this.state = {
            edit: false
        }
    }

    render() {
        return (
            <div>
                <div style={this.mainStyle}>
                    {this.state.edit ?
                        "edit: " + this.things.descriptionInside.title :
                        <div>
                            <div style={this.insiderStyle}>
                                {this.things.descriptionInside.title}
                            </div>
                        </div>
                    }
                    {this.props.default.company || this.props.default.position ? <div style={this.switcher} /> : null}
                    <div className="common-detail" style={this.contentStyle}>
                        {this.state.edit ?
                            <Input
                                value={this.props.default.company}
                                args={'company'}
                                model={this.changeText}
                                placeholder={this.things.descriptionInside.company} />
                            : this.props.default.company
                        }
                        {this.props.default.position || this.state.edit ? <br /> : null}
                        {this.state.edit ?
                            this.times.map(this.mapTimesButtons)
                            : null
                        }
                        {this.state.edit ? <Input
                            value={this.props.default.position}
                            args={'position'}
                            model={this.changeText}
                            placeholder={this.things.descriptionInside.position} /> : this.switchTime()}
                    </div>
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

    changeText(e, text) {
        let b = this.props.default;
        b[text] = e;
        this.props.onChange(this.props.index, b);
    }

    switchTime() {
        switch (this.props.default.time) {
            case 1:
                return this.things.descriptionInside.fullTime + " - " + this.props.default.position;
            case 2:
                return this.things.descriptionInside.partTime + " - " + this.props.default.position;
            case 3:
                return this.things.descriptionInside.internship + " - " + this.props.default.position;
            case 4:
                return this.things.descriptionInside.contractor + " - " + this.props.default.position;
            default:
                return this.props.default.position;
        }
    }

    mapTimesButtons(i, index) {
        let style = {
            width: "48px"
        };
        if (this.props.default.time === i.id) {
            style.backgroundColor = "green";
            style.fontWeight = "bold";
        }
        return <Button key={index} click={this.selectTime} style={style} args={i.id}>{i.name}</Button>
    }

    selectTime(arg) {
        let b = this.props.default;
        b.time = arg;
        this.changeDetail(b);
    }

    changeDetail(detail) {
        this.props.onChange(this.props.index, detail);
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

export default Description;
