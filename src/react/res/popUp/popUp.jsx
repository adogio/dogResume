import React, {
    Component
} from 'react';
class PopUp extends Component {

    popUpStyle = {
        position: "fixed",
        top: "25%",
        left: "28%",
        width: "42%",
        backgroundColor: "#c7c7c7",
        height: "60%",
        borderRadius: "5px",
        padding: "10px",
        overflow: "auto"
    };
    xStyle = {
        cursor: "pointer",
        position: "absolute",
        right: "10px",
        top: "10px",
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
