import React, {
    Component
} from 'react';
class PopUp extends Component {

    popUpStyle = {
        position: "fixed",
        top: "25%",
        left: "30%",
        width: "40%",
        backgroundColor: "#c7c7c7",
        height: "50%",
        borderRadius: "10px",
        padding: "10px"
    };
    xStyle = {
        float: "right",
        fontSize: "21px",
        color: "purple"
    }
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    render() {
        return (
            <div style={this.popUpStyle}>
                {this.props.children}
                <i className="fa fa-times" style={this.xStyle} onClick={this.close}></i>
            </div>
        );
    }

    close() {
        window.dog.unPop();
    }
}

export default PopUp;
