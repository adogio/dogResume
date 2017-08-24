import React, {
    Component
} from 'react';
import Logo from '../../react/res/logo/logo';
import Subtitle from '../../react/res/subtitle/subtitle';
import Button from '../../react/res/button/button';
import Credit from '../../react/res/credit/credit';
import ButtonBar from '../../mains/group/buttonBar';
import './nav.css';
import a from '../../mains/printable.json';

class Nav extends Component {

    buttonStyleLeftOnly = {
        height: "32px",
        borderRight: "21px solid transparent",
        borderLeft: "21px solid #c8ffc9"
    };

    buttonStyleRightOnly = {
        height: "32px",
        borderLeft: "21px solid transparent",
        borderRight: "21px solid #c8ffc9"
    };

    buttonStyleLeftAndRight = {
        height: "32px",
        borderLeft: "21px solid #c8ffc9",
        borderRight: "21px solid #c8ffc9"
    };

    buttonNude = {
        height: "32px"
    };

    buttonStyle = {
        height: "38px"
    };

    Styling;
    TempPhotoColor = "#9e0000";
    TempPrintBorderColor = "#8b8b8b";
    printStyling = "3px dashed #8b8b8b";

    constructor(props) {
        super(props);
        this.selected = false;
        this.clickButton = this.clickButton.bind(this);
        this.cancelSelect = this.cancelSelect.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.printResume = this.printResume.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
        this.setLeftStyle = this.setLeftStyle.bind(this);
        this.setRightStyle = this.setRightStyle.bind(this);
        this.setBorder = this.setBorder.bind(this);
        this.bindSelected = this.bindSelected.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
        this.setIconStyle = this.setIconStyle.bind(this);
        this.setIconType = this.setIconType.bind(this);
        this.selectBars = this.selectBars.bind(this);
        this.reportBug = this.reportBug.bind(this);
        this.likeProject = this.likeProject.bind(this);
        this.setPhotoBorder = this.setPhotoBorder.bind(this);
        this.setPhotoColor = this.setPhotoColor.bind(this);
        this.setPrintBorder = this.setPrintBorder.bind(this);
        this.setPhotoBG = this.setPhotoBG.bind(this);
        this.setPrintBorderColor = this.setPrintBorderColor.bind(this);
        this.inputSelected = this.inputSelected.bind(this);
        this.outputSelected = this.outputSelected.bind(this);
        this.startFromZero = this.startFromZero.bind(this);
        this.Styling = {
            leftBG: [{ name: "空白", id: 1 }, { name: "灰色", id: 2 }, { name: "深灰", id: 3 }, { name: "暗紫", id: 4 }],
            rightBG: [{ name: "空白", id: 1 }, { name: "浅灰", id: 2 }],
            border: [{ name: "空白", id: 1 }, { name: "黑色", id: 2 }, { name: "橘黄", id: 3 }, { name: "深红", id: 4 }],
            icon: [{ name: "角标", id: 1 }, { name: "图标", id: 2 }, { name: "横线", id: 3 }],
            iconStyle: [{ name: "黑色", id: 1 }, { name: "红色", id: 2 }],
            bars: [{ name: "橙灰", id: 1 }, { name: "绿灰", id: 2 }, { name: "黑白", id: 3 }],
            photoBorder: [{ name: "没有", id: 1 }, { name: "粗线", id: 2 }, { name: "细线", id: 3 }, { name: "虚线", id: 4 }],
            photoColor: [{ name: "白色", id: 1 }, { name: "深红", id: 2 }, { name: "橙色", id: 3 }, { name: "黑色", id: 4 }],
            photoBG: [{ name: "深灰", id: 1 }, { name: "浅灰", id: 2 }, { name: "浅黄", id: 3 }],
            printBorder: [{ name: "没有", id: 1 }, { name: "粗线", id: 2 }, { name: "细线", id: 3 }, { name: "虚线", id: 4 }],
            printBorderColor: [{ name: "白色", id: 1 }, { name: "深红", id: 2 }, { name: "灰色", id: 3 }, { name: "黑色", id: 4 }]
        };

        this.state = {
            detail: true,
            component: true,
            selected: {
                leftBG: 2,
                rightBG: 2,
                border: 2,
                icon: 2,
                iconStyle: 1,
                bars: 2,
                photoBorder: 1,
                photoColor: 2,
                photoBG: 3,
                printBorder: 4,
                printBorderColor: 3
            }
        };
    }

    componentDidMount() {
        window.dogResume.setStyling = (selectQueue) => {
            this.inputSelected(selectQueue);
            return 1;
        }
        window.dogResume.getStylingSelected = () => {
            return this.outputSelected();
        }
        window.dogResume.startFromZero = (args) => {
            return this.startFromZero(args);
        }
    }

    render() {
        return (
            <div>
                <hr />
                <Logo>
                    {this.props.things.title}
                </Logo>
                <Subtitle>
                    {this.props.things.subTitle}
                </Subtitle>
                <hr />
                {this.state.component ?
                    <div>
                        <Subtitle>{this.props.things.components}</Subtitle>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="name">{this.props.things.name}
                        </Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="photo">{this.props.things.photo}
                        </Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="description">{this.props.things.description}
                        </Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="connect">{this.props.things.connect}
                        </Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="thing">{this.props.things.thing}
                        </Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="education">{this.props.things.education}
                        </Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="experience">{this.props.things.experience}
                        </Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="project">{this.props.things.project}
                        </Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="skill">{this.props.things.skill}
                        </Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="achivement">{this.props.things.achivement}
                        </Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="publication">{this.props.things.publication}
                        </Button>
                        <hr />
                        <Subtitle>{this.props.things.componenetTool}</Subtitle>
                        <Button style={this.buttonStyle} click={this.changeMode}>
                            {this.state.detail ? this.props.things.detailMode : this.props.things.viewMode}
                        </Button>
                        <Button style={this.buttonStyle} click={this.cancelSelect}>
                            {this.props.things.cancel}
                        </Button>
                    </div>
                    :
                    <div>
                        <Subtitle>{this.props.things.styling}</Subtitle>
                        <ButtonBar
                            buttons={this.Styling.leftBG}
                            click={this.setLeftStyle}
                            current={this.state.selected.leftBG}>
                            {this.props.things.stylingInside.leftBG}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.rightBG}
                            click={this.setRightStyle}
                            current={this.state.selected.rightBG}>
                            {this.props.things.stylingInside.rightBG}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.icon}
                            click={this.setIconType}
                            current={this.state.selected.icon}>
                            {this.props.things.stylingInside.icon}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.iconStyle}
                            click={this.setIconStyle}
                            current={this.state.selected.iconStyle}>
                            {this.props.things.stylingInside.iconStyle}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.bars}
                            click={this.selectBars}
                            current={this.state.selected.bars}>
                            {this.props.things.stylingInside.bars}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.photoBorder}
                            click={this.setPhotoBorder}
                            current={this.state.selected.photoBorder}>
                            {this.props.things.stylingInside.photoBorder}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.photoColor}
                            click={this.setPhotoColor}
                            current={this.state.selected.photoColor}>
                            {this.props.things.stylingInside.photoColor}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.photoBG}
                            click={this.setPhotoBG}
                            current={this.state.selected.photoBG}>
                            {this.props.things.stylingInside.photoBG}
                        </ButtonBar>
                        <hr />
                        <Subtitle>{this.props.things.pringStyling}</Subtitle>
                        <ButtonBar
                            buttons={this.Styling.border}
                            click={this.setBorder}
                            current={this.state.selected.border}>
                            {this.props.things.stylingInside.border}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.printBorder}
                            click={this.setPrintBorder}
                            current={this.state.selected.printBorder}>
                            {this.props.things.stylingInside.printBorder}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.printBorderColor}
                            click={this.setPrintBorderColor}
                            current={this.state.selected.printBorderColor}>
                            {this.props.things.stylingInside.printBorderColor}
                        </ButtonBar>
                    </div>
                }
                <hr />
                <Subtitle>{this.props.things.complete}</Subtitle>
                <Button style={this.buttonStyle} click={this.changeStyle}>{this.state.component ? this.props.things.style : this.props.things.componenet}</Button>
                <Button style={this.buttonStyle} click={this.printResume}>{this.props.things.print}</Button>
                <hr />
                <Subtitle>{this.props.things.dogResume}</Subtitle>
                <Button style={this.buttonNude} click={this.likeProject}>{this.props.things.like}</Button>
                <Button style={this.buttonNude} click={this.reportBug}>{this.props.things.bug}</Button>
                <Credit>adog.io</Credit>
                <span style={{ fontSize: "10px", color: "#cacaca" }}>{this.props.things.version}: {"beta 0.5.0-16800"}</span>
            </div>
        );
    }

    bindSelected(json) {
        if (json) {
            this.setState({
                selected: json
            });
        }
    }

    setPhotoBG(id) {
        const b = window.dogResume.getStyling();
        let { photoBG } = b;
        let newStyle;
        switch (id) {
            case 1:
                newStyle = { ...photoBG, backgroundColor: "#5a5a5a", color: "white", border: "2px solid #8b0000" };
                break;
            case 2:
                newStyle = { ...photoBG, backgroundColor: "#c0c0c0", color: "black", border: "2px solid white" };
                break;
            case 3:
                newStyle = { ...photoBG, backgroundColor: "#ffd65c", color: "black", border: "2px solid black" };
                break;
            default:
        }
        const newB = { ...b, photoBG: newStyle };
        this.changeSelected('photoBG', id);
        window.dogResume.styling(newB);
    }

    setPrintBorder(id) {
        const b = window.dogResume.getStyling();
        let { resume } = b;
        let newStyle;
        switch (id) {
            case 1:
                newStyle = { ...resume, border: "0px" };
                break;
            case 2:
                newStyle = { ...resume, border: "5px solid " + this.TempPhotoColor };
                break;
            case 3:
                newStyle = { ...resume, border: "2px solid " + this.TempPhotoColor };
                break;
            case 4:
                newStyle = { ...resume, border: "3px dashed " + this.TempPhotoColor };
                break;
            default:
        }
        this.printStyling = newStyle.border;
        const newB = { ...b, resume: newStyle };
        this.changeSelected('printBorder', id);
        window.dogResume.styling(newB);
    }

    setPrintBorderColor(id) {
        switch (id) {
            case 1:
                this.TempPhotoColor = "white";
                break;
            case 2:
                this.TempPhotoColor = "#9e0000";
                break;
            case 3:
                this.TempPhotoColor = "#8b8b8b";
                break;
            case 4:
                this.TempPhotoColor = "black";
                break;
            default:
        }
        this.changeSelected('printBorderColor', id);
        this.setPrintBorder(this.state.selected.printBorder);
    }

    setPhotoBorder(id) {
        const b = window.dogResume.getStyling();
        let { photoBorder } = b;
        let newStyle;
        switch (id) {
            case 1:
                newStyle = { ...photoBorder, border: "0px" };
                break;
            case 2:
                newStyle = { ...photoBorder, border: "5px solid " + this.TempPhotoColor };
                break;
            case 3:
                newStyle = { ...photoBorder, border: "2px solid " + this.TempPhotoColor };
                break;
            case 4:
                newStyle = { ...photoBorder, border: "3px dashed " + this.TempPhotoColor };
                break;
            default:
        }
        const newB = { ...b, photoBorder: newStyle };
        this.changeSelected('photoBorder', id);
        window.dogResume.styling(newB);

    }

    setPhotoColor(id) {
        switch (id) {
            case 1:
                this.TempPhotoColor = "white";
                break;
            case 2:
                this.TempPhotoColor = "#9e0000";
                break;
            case 3:
                this.TempPhotoColor = "#ffc20f";
                break;
            case 4:
                this.TempPhotoColor = "black";
                break;
            default:
        }
        this.changeSelected('photoColor', id);
        this.setPhotoBorder(this.state.selected.photoBorder);
    }

    selectBars(id) {
        const b = window.dogResume.getStyling();
        let { bars } = b;
        let newStyle;
        switch (id) {
            case 1:
                newStyle = { ...bars, outer: { backgroundColor: "#ccc" }, inner: { backgroundColor: "#ff923d" } };
                break;
            case 2:
                newStyle = { ...bars, outer: { backgroundColor: "#ccc" }, inner: { backgroundColor: "#51c600" } };
                break;
            case 3:
                newStyle = { ...bars, outer: { backgroundColor: "#fff" }, inner: { backgroundColor: "#000" } };
                break;
            default:
        }
        const newB = { ...b, bars: newStyle };
        this.changeSelected('bars', id);
        window.dogResume.styling(newB);

    }

    setIconType(id) {
        const b = window.dogResume.getStyling();
        let { icon } = b;
        let newStyle;
        switch (id) {
            case 1:
                newStyle = { ...icon, type: "smallFont" };
                break;
            case 2:
                newStyle = { ...icon, type: "font" };
                break;
            case 3:
                newStyle = { ...icon, type: "line" };
                break;
            default:
        }
        const newB = { ...b, icon: newStyle };
        this.changeSelected('icon', id);
        window.dogResume.styling(newB);

    }

    setIconStyle(id) {
        const b = window.dogResume.getStyling();
        let { icon } = b;
        let tempStyle;
        switch (id) {
            case 1:
                tempStyle = { ...icon.style, color: "black" };
                break;
            case 2:
                tempStyle = { ...icon.style, color: "#9e0000" };
                break;
            default:
        }
        const newStyle = { ...icon, style: tempStyle };
        const newB = { ...b, icon: newStyle };
        this.changeSelected('iconStyle', id);
        window.dogResume.styling(newB);

    }

    setLeftStyle(id) {
        const b = window.dogResume.getStyling();
        let { left } = b;
        let newStyle;
        switch (id) {
            // white
            case 1:
                newStyle = { ...left, backgroundColor: "transparent", color: "black" };
                break;
            // gray
            case 2:
                newStyle = { ...left, backgroundColor: "#c7c7c7", color: "#222222" };
                break;
            // drak gray
            case 3:
                newStyle = { ...left, backgroundColor: "#333", color: "white" };
                break;
            // purple
            case 4:
                newStyle = { ...left, backgroundColor: "#624c82", color: "white" };
                break;
            default:
        }
        const newB = { ...b, left: newStyle };
        this.changeSelected('leftBG', id);
        window.dogResume.styling(newB);
    }

    setRightStyle(id) {
        const b = window.dogResume.getStyling();
        let { right } = b;
        let newStyle;
        switch (id) {
            case 1:
                newStyle = { ...right, backgroundColor: "transparent", color: "black" };
                break;
            case 2:
                newStyle = { ...right, backgroundColor: "#d7d7d7", color: "#040404" };
                break;
            default:
        }
        const newB = { ...b, right: newStyle };
        this.changeSelected('rightBG', id);
        window.dogResume.styling(newB);
    }

    setBorder(id) {
        const b = window.dogResume.getStyling();
        let { left } = b;
        let newStyle;
        switch (id) {
            case 1:
                newStyle = { ...left, borderRight: "2px solid transparent" };
                break;
            case 2:
                newStyle = { ...left, borderRight: "2px solid black" };
                break;
            case 3:
                newStyle = { ...left, borderRight: "2px solid #ffbb3d" };
                break;
            case 4:
                newStyle = { ...left, borderRight: "2px solid #9e0000" };
                break;
            default:
        }
        const newB = { ...b, left: newStyle };
        this.changeSelected('border', id);
        window.dogResume.styling(newB);
    }

    changeSelected(cate, id) {
        let b = this.state.selected;
        b[cate] = id;
        this.setState({
            selected: b
        });
    }

    clickButton(type) {
        window.dogResume.cancelSelect();
        window.dogResume.selectComponent(type);
    }

    cancelSelect() {
        window.dogResume.cancelSelect();
    }

    changeStyle() {
        if (this.state.component) {
            window.dogResume.printView();
            this.setState({
                component: false
            })
        } else {
            window.dogResume.editView();
            this.setState({
                component: true
            })
        }
    }

    printResume() {
        if (!this.state.detail) {
            alert(this.props.things.toView);
        } else if (window.dogResume.global.selected) {
            alert(this.props.things.toUnselect);
        } else {
            let cssLink = document.createElement("link");
            cssLink.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
            cssLink.rel = "stylesheet";
            cssLink.type = "text/css";

            let cssLink2 = document.createElement("link");
            cssLink2.href = " https://fonts.googleapis.com/css?family=Ubuntu";
            cssLink2.rel = "stylesheet";
            cssLink2.type = "text/css";

            let print = "<html><head></head>";
            print += "<body>" + document.getElementById('resume').innerHTML + "</body>";
            print += "<style>"
            print += a;
            print += ".centerer{outline:" + this.printStyling + ";}"
            print += "</style></html>"

            var f = document.getElementById('printf');
            f.onload = function () {
                f.contentWindow.print();
            }

            f.contentDocument.write(print);
            f.contentDocument.body.appendChild(cssLink);
            f.contentDocument.body.appendChild(cssLink2);
            f.contentDocument.close();
        }
    }

    changeMode() {
        if (this.state.detail) {
            window.dogResume.viewMode();
            this.setState({
                detail: false
            });
        } else {
            window.dogResume.detailMode();
            this.setState({
                detail: true
            });
        }
    }

    outputSelected() {
        return this.state.selected;
    }

    inputSelected(selectQueue) {
        setTimeout(() => {
            this.setLeftStyle(selectQueue.leftBG);
        }, 0);
        setTimeout(() => {
            this.setRightStyle(selectQueue.rightBG);
        }, 1);
        setTimeout(() => {
            this.setBorder(selectQueue.border);
        }, 2);
        setTimeout(() => {
            this.setIconType(selectQueue.icon);
        }, 3);
        setTimeout(() => {
            this.setIconStyle(selectQueue.iconStyle);
        }, 4);
        setTimeout(() => {
            this.selectBars(selectQueue.bars);
        }, 5);
        setTimeout(() => {
            this.setPhotoBorder(selectQueue.photoBorder);
        }, 6);
        setTimeout(() => {
            this.setPhotoColor(selectQueue.photoColor);
        }, 7);
        setTimeout(() => {
            this.setPhotoBG(selectQueue.photoBG);
        }, 8);
        setTimeout(() => {
            this.setPrintBorder(selectQueue.printBorder);
        }, 9);
        setTimeout(() => {
            this.setPrintBorderColor(selectQueue.printBorderColor);
        }, 10);
    }

    likeProject() {
        window.location.href = "https://github.com/adogio/dogResume";
    }

    reportBug() {
        window.location.href = "https://github.com/adogio/dogResume/issues";
    }

    startFromZero(arg) {
        switch (arg) {
            default:
                console.log(arg);
        }
    }
}

export default Nav;
