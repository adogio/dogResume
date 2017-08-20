import React, {
    Component
} from 'react';

class Credit extends Component {
    alienStyle = {
        textAlign: "center",
        paddingTop: "5px",
        paddingBottom: "7px"
    }
    codeStyle = {
        fontSize: "18px"
    };
    mainStyle = {
        color: "#c2c2c2",
        fontSize: "13px"
    };
    render() {
        return (
            <div style={this.alienStyle}>
                <span style={this.mainStyle}>
                    <span style={this.codeStyle}>{'Code'}&nbsp;</span>
                    {'with'}&nbsp;
                    <i className="fa fa-heart" />&nbsp;
                    {'by'}&nbsp;
                    <span style={this.codeStyle}>{this.props.children}</span>
                </span>
            </div>
        );
    }
}

export default Credit;
