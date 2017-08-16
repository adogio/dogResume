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
    allButtons = <div>
        <SmallButton click={this.props.edit} style={this.colorGreen}>
            <i className="fa fa-cog"></i>
        </SmallButton>
        <SmallButton click={this.props.edit}>
            <i className="fa fa-arrow-up"></i>
        </SmallButton>
        <SmallButton click={this.props.edit}>
            <i className="fa fa-arrow-down"></i>
        </SmallButton>
        <SmallButton click={this.props.edit} style={this.colorRed}>
            <i className="fa fa-times"></i>
        </SmallButton>
    </div>;
    checkButton = <div>
        <SmallButton click={this.props.edit} style={this.colorCheck}>
            <i className="fa fa-check"></i>
        </SmallButton>
    </div>;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.isEdit ? this.checkButton : this.allButtons
        );
    }
}

export default Group;
