import React, {
    Component
} from 'react';

class TemplateInsider extends Component {
    constructor(props) {
        super(props);
        this.rendererRight = this.rendererRight.bind(this);
        this.rendererLeft = this.rendererLeft.bind(this);
    }

    render() {
        return (
            <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                <div style={{
                    width: "30%",
                    height: "120px",
                    float: "left",
                    backgroundColor: this.props.left.color
                }}>
                    <div>
                        {this.props.list.left.map(this.rendererLeft)}
                    </div>
                </div>
                <div style={{
                    width: "70%",
                    height: "120px",
                    float: "left",
                    backgroundColor: this.props.right.color
                }}>
                    {this.props.list.right.map(this.rendererRight)}
                </div>
                {this.props.text}
            </div>
        );
    }

    rendererRight(i, index) {
        let text;
        switch (i.component) {
            case "name":
                text = <div style={{ height: "2px", width: "60%", backgroundColor: "red", margin: "auto" }} />;
                break;
            case "thing":
                text = <div style={{ height: "2px", width: "80%", backgroundColor: "blue", marginLeft: "3px" }} />;
                break;
            case "education":
            case "experience":
            case "project":
            case "achivement":
            case "publication":
                text = <div>
                    <div style={{ height: "2px", width: "75%", backgroundColor: "black", marginLeft: "3px" }} />
                    <div style={{ height: "1px", width: "50%", backgroundColor: "black", marginLeft: "8px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "65%", backgroundColor: "black", marginLeft: "8px", marginTop: "2px" }} />
                    <div style={{ height: "2px", width: "80%", backgroundColor: "black", marginLeft: "3px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "48%", backgroundColor: "black", marginLeft: "8px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "75%", backgroundColor: "black", marginLeft: "8px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "58%", backgroundColor: "black", marginLeft: "8px", marginTop: "2px" }} />
                </div>;
                break;
            case "skill":
                text = <div>
                    <div style={{ height: "2px", width: "75%", backgroundColor: "black", marginLeft: "3px" }} />
                    <div style={{ height: "1px", width: "30%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px", float:"left" }} />
                    <div style={{ height: "1px", width: "35%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px", float:"left" }} />
                    <div style={{ height: "1px", width: "25%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px", float:"left" }} />
                    <div style={{ height: "1px", width: "20%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px", float:"left" }} />
                </ div>;
                break;
            default:
                text = null;
        }
        return <div key={index + Math.random()} style={{ textAlign: "center", paddingTop: "3px", paddingBottom: "3px" }}>{text}</div>
    }
    rendererLeft(i, index) {
        let text;
        switch (i.component) {
            case "name":
                text = <div style={{ height: "2px", width: "60%", backgroundColor: "red", margin: "auto" }} />;
                break;
            case "photo":
                text = <div style={{ height: "22px", width: "60%", backgroundColor: "white", margin: "auto" }} />;
                break;
            case "description":
                text = <div>
                    <div style={{ height: "6px", width: "80%", backgroundColor: "orange", margin: "auto" }} />
                    <div style={{ height: "8px", width: "80%", backgroundColor: "orange", margin: "auto", borderTop: "1px solid black" }}>
                        {"..."}
                    </div>
                </ div>;
                break;
            case "connect":
                text = <div>
                    <div style={{ height: "1px", width: "45%", backgroundColor: "black", marginLeft: "5px" }} />
                    <div style={{ height: "1px", width: "45%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "45%", backgroundColor: "yellow", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "45%", backgroundColor: "black", marginLeft: "5px", marginTop: "2px" }} />
                </ div>;
                break;
            case "thing":
                text = <div style={{ height: "2px", width: "80%", backgroundColor: "blue", marginLeft: "3px" }} />;
                break;
            case "achivement":
            case "publication":
                text = <div>
                    <div style={{ height: "2px", width: "60%", backgroundColor: "black", marginLeft: "5px" }} />
                    <div style={{ height: "1px", width: "30%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "50%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "25%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                </div>;
                break;
            case "skill":
                text = <div>
                    <div style={{ height: "1px", width: "45%", backgroundColor: "green", marginLeft: "5px" }} />
                    <div style={{ height: "1px", width: "30%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "50%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "25%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "30%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                    <div style={{ height: "1px", width: "35%", backgroundColor: "green", marginLeft: "5px", marginTop: "2px" }} />
                </ div>;
                break;
            default:
                text = null;
        }
        return <div key={index + Math.random()} style={{ textAlign: "center", paddingTop: "3px", paddingBottom: "3px" }}>{text}</div>
    }
}

export default TemplateInsider;
