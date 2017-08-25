import React, {
    Component
} from 'react';
import Button from '../../react/res/smallButton/smallButton';
import Input from '../../react/res/smallInput/smallInput';

class ComplexDescription extends Component {
    delStyle = {
        backgroundColor: "#984e4e",
        color: "white",
        width: "35px"
    };
    times;
    constructor(props) {
        super(props);
        this.times = [
            { name: this.props.things.descriptionInside.fullTime, id: 1 },
            { name: this.props.things.descriptionInside.partTime, id: 2 },
            { name: this.props.things.descriptionInside.internship, id: 3 },
            { name: this.props.things.descriptionInside.contractor, id: 4 },
            { name: this.props.things.descriptionInside.none, id: 5 }
        ];
        this.mapTimesButtons = this.mapTimesButtons.bind(this);
        this.changeText = this.changeText.bind(this);
        this.selectTime = this.selectTime.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
    }

    render() {
        return (
            <div>
                <i className="fa fa-building fa-fw"></i>
                <Input
                    placeholder={this.props.things.descriptionInside.company}
                    model={this.changeText}
                    value={this.props.detail.company}
                    args={'company'} />
                <br />
                <i className="fa fa-code-fork fa-fw"></i>
                <Input
                    placeholder={this.props.things.descriptionInside.position}
                    model={this.changeText}
                    value={this.props.detail.position}
                    args={'position'} />
                <br />
                {this.times.map(this.mapTimesButtons)}
                <br />
                <Button
                    click={this.props.del}
                    args={this.props.index}
                    style={this.delStyle}><i className="fa fa-times"></i>
                </Button>
                <hr />
            </div>
        );
    }

    changeText(e, text) {
        let b = this.props.detail;
        b[text] = e;
        this.props.onChange(this.props.index, b);
    }

    mapTimesButtons(i, index) {
        let style = {
            width: "48px"
        };
        if (this.props.detail.time === i.id) {
            style.backgroundColor = "green";
            style.fontWeight = "bold";
        }
        return <Button
            key={index}
            click={this.selectTime}
            style={style}
            args={i.id}>
            {i.name}
        </Button>;
    }

    selectTime(arg) {
        let b = this.props.detail;
        b.time = arg;
        this.changeDetail(b);
    }

    changeDetail(detail) {
        this.props.onChange(this.props.index, detail);
    }
}

export default ComplexDescription;
