import React, {
    Component
} from 'react';
import './group.css';
import SmallButton from '../../react/res/smallButton/smallButton';

class Group extends Component {
    colorRed = {
        backgroundColor: "red",
        color: "white",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        height: "30px"
    };
    colorGreen = {
        backgroundColor: "green",
        color: "white",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        height: "45px"
    };
    colorCheck = {
        backgroundColor: "green",
        color: "white",
        borderRadius: "10px",
        height: "80px"
    };
    lefter = {
        position: "absolute",
        left: "15px"
    };
    allButtons;
    checkButton;
    constructor(props) {
        super(props);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.del = this.del.bind(this);
        this.allButtons = <div style={this.lefter}>
            <SmallButton click={this.props.edit} style={this.colorGreen}>
                <i className="fa fa-cog"></i>
            </SmallButton>
            <br />
            <SmallButton click={this.up}>
                <i className="fa fa-arrow-up"></i>
            </SmallButton>
            <br />
            <SmallButton click={this.down}>
                <i className="fa fa-arrow-down"></i>
            </SmallButton>
            <br />
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
    render() {
        return (
            this.props.isEdit ? this.checkButton : this.allButtons
        );
    }
}

export default Group;
