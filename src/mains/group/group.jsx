import React, {
    Component
} from 'react';
import './group.css';
import SmallButton from '../../react/res/smallButton/smallButton';

class Group extends Component {
    colorRed;
    colorGreen;
    
    constructor(props) {
        super(props);
        this.colorRed = {
            backgroundColor: "red",
            color: "white"
        }
        this.colorGreen = {
            backgroundColor: "green",
            color: "white"
        }
    }

    render() {
        return (
            <div>
                <SmallButton click={this.props.edit} style={this.colorGreen}>
                    <i className="fa fa-cog"></i>
                </SmallButton>
                &nbsp;
                <SmallButton click={this.props.edit}>
                    <i className="fa fa-arrow-up"></i>
                </SmallButton>
                &nbsp;
                <SmallButton click={this.props.edit}>
                    <i className="fa fa-arrow-down"></i>
                </SmallButton>
                &nbsp;
                <SmallButton click={this.props.edit} style={this.colorRed}>
                    <i className="fa fa-times"></i>
                </SmallButton>
            </div>
        );
    }
}

export default Group;
