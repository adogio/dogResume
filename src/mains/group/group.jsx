import React, {
    Component
} from 'react';
import './group.css';
import SmallButton from '../../react/res/smallButton/smallButton';

class Group extends Component {
    colorRed = {
        backgroundColor: "red",
        color: "white",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        width: "30px"
    };
    colorGreen = {
        backgroundColor: "green",
        color: "white",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        width: "45px"
    };
    colorCheck = {
        backgroundColor: "green",
        color: "white",
        borderRadius: "10px",
        width: "80px"
    };
    allButtons;
    checkButton;
    constructor(props) {
        super(props);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.del = this.del.bind(this);
        this.cut = this.cut.bind(this);
        this.allButtons = <div>
            <SmallButton click={this.props.edit} style={this.colorGreen}>
                <i className="fa fa-pencil-square-o"></i>
            </SmallButton>
            <SmallButton click={this.up}>
                <i className="fa fa-arrow-up"></i>
            </SmallButton>
            <SmallButton click={this.cut}>
                <i className="fa fa-scissors"></i>
            </SmallButton>
            <SmallButton click={this.down}>
                <i className="fa fa-arrow-down"></i>
            </SmallButton>
            <SmallButton click={this.del} style={this.colorRed}>
                <i className="fa fa-times"></i>
            </SmallButton>
        </div>;
        this.checkButton = <div>
            <SmallButton click={this.props.edit} style={this.colorCheck}>
                <i className="fa fa-check"></i>
            </SmallButton>
        </div>;
    }
    up() {
        this.props.up(this.props.index);
    }
    down() {
        this.props.down(this.props.index);
    }
    del() {
        this.props.del(this.props.index);
    }
    cut() {
        this.props.cut(this.props.index);
    }
    render() {
        return (
            this.props.isEdit ? this.checkButton : this.allButtons
        );
    }
}

export default Group;
