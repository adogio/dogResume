import React, {
    Component
} from 'react';
import Logo from '../../react/res/logo/logo';
import Subtitle from '../../react/res/subtitle/subtitle';
import Quote from '../../react/res/quote/quote';
import strings from '../../strings.json';
import Button from '../../react/res/button/button';
import Credit from '../../react/res/credit/credit';
import ButtonBar from '../../mains/group/buttonBar';
import './nav.css';
import a from '../../mains/printable.json';

class Nav extends Component {
    things;
    detail;

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
        this.things = strings.chinese;
        this.detail = true;
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
        this.setPrintBorderColor = this.setPrintBorderColor.bind(this);
        this.Styling = {
            leftBG: [{ name: "空白", id: 1 }, { name: "灰色", id: 2 }, { name: "深灰", id: 3 }, { name: "深蓝", id: 4 }],
            rightBG: [{ name: "空白", id: 1 }, { name: "浅灰", id: 2 }],
            border: [{ name: "空白", id: 1 }, { name: "黑色", id: 2 }, { name: "橘黄", id: 3 }, { name: "深红", id: 4 }],
            icon: [{ name: "图标", id: 1 }, { name: "横线", id: 2 }],
            iconStyle: [{ name: "黑色", id: 1 }, { name: "红色", id: 2 }],
            bars: [{ name: "橙灰", id: 1 }, { name: "绿灰", id: 2 }, { name: "黑白", id: 3 }],
            photoBorder: [{ name: "没有", id: 1 }, { name: "粗线", id: 2 }, { name: "细线", id: 3 }, { name: "虚线", id: 4 }],
            photoColor: [{ name: "白色", id: 1 }, { name: "深红", id: 2 }, { name: "橙色", id: 3 }, { name: "黑色", id: 4 }],
            photoBG: [{ name: "深灰", id: 1 }, { name: "浅灰", id: 2 }, { name: "浅黄", id: 3 }],
            printBorder: [{ name: "没有", id: 1 }, { name: "粗线", id: 2 }, { name: "细线", id: 3 }, { name: "虚线", id: 4 }],
            printBorderColor: [{ name: "白色", id: 1 }, { name: "深红", id: 2 }, { name: "灰色", id: 3 }, { name: "黑色", id: 4 }]
        };
        this.state = {
            detail: this.things.detailMode,
            component: true,
            selected: {
                leftBG: 2,
                rightBG: 2,
                border: 2,
                icon: 1,
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

    render() {
        return (
            <div>
                <hr />
                <Logo>
                    {this.things.title}
                </Logo>
                <Subtitle>
                    {this.things.subTitle}
                </Subtitle>
                <Quote from={this.things.quoteFrom}>
                    {this.things.quote}
                </Quote>
                <hr />
                {this.state.component ?
                    <div>
                        <Subtitle>{this.things.components}</Subtitle>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="name">{this.things.name}</Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="photo">{this.things.photo}</Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="description">{this.things.description}</Button>
                        <Button style={this.buttonStyleLeftOnly} click={this.clickButton} type="connect">{this.things.connect}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="thing">{this.things.thing}</Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="education">{this.things.education}</Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="experience">{this.things.experience}</Button>
                        <Button style={this.buttonStyleRightOnly} click={this.clickButton} type="project">{this.things.project}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="skill">{this.things.skill}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="achivement">{this.things.achivement}</Button>
                        <Button style={this.buttonStyleLeftAndRight} click={this.clickButton} type="publication">{this.things.publication}</Button>
                        <hr />
                        <Subtitle>{this.things.componenetTool}</Subtitle>
                        <Button style={this.buttonStyle} click={this.changeMode}>{this.state.detail}</Button>
                        <Button style={this.buttonStyle} click={this.cancelSelect}>{this.things.cancel}</Button>
                    </div>
                    :
                    <div>
                        <Subtitle>{this.things.styling}</Subtitle>
                        <ButtonBar
                            buttons={this.Styling.leftBG}
                            click={this.setLeftStyle}
                            current={this.state.selected.leftBG}>
                            {this.things.stylingInside.leftBG}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.rightBG}
                            click={this.setRightStyle}
                            current={this.state.selected.rightBG}>
                            {this.things.stylingInside.rightBG}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.icon}
                            click={this.setIconType}
                            current={this.state.selected.icon}>
                            {this.things.stylingInside.icon}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.iconStyle}
                            click={this.setIconStyle}
                            current={this.state.selected.iconStyle}>
                            {this.things.stylingInside.iconStyle}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.bars}
                            click={this.selectBars}
                            current={this.state.selected.bars}>
                            {this.things.stylingInside.bars}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.photoBorder}
                            click={this.setPhotoBorder}
                            current={this.state.selected.photoBorder}>
                            {this.things.stylingInside.photoBorder}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.photoColor}
                            click={this.setPhotoColor}
                            current={this.state.selected.photoColor}>
                            {this.things.stylingInside.photoColor}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.photoBG}
                            click={this.setPhotoBG}
                            current={this.state.selected.photoBG}>
                            {this.things.stylingInside.photoBG}
                        </ButtonBar>
                        <hr />
                        <Subtitle>{this.things.pringStyling}</Subtitle>
                        <ButtonBar
                            buttons={this.Styling.border}
                            click={this.setBorder}
                            current={this.state.selected.border}>
                            {this.things.stylingInside.border}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.printBorder}
                            click={this.setPrintBorder}
                            current={this.state.selected.printBorder}>
                            {this.things.stylingInside.printBorder}
                        </ButtonBar>
                        <ButtonBar
                            buttons={this.Styling.printBorderColor}
                            click={this.setPrintBorderColor}
                            current={this.state.selected.printBorderColor}>
                            {this.things.stylingInside.printBorderColor}
                        </ButtonBar>
                    </div>
                }
                <hr />
                <Subtitle>{this.things.complete}</Subtitle>
                <Button style={this.buttonStyle} click={this.changeStyle}>{this.state.component ? this.things.style : this.things.componenet}</Button>
                <Button style={this.buttonStyle} click={this.printResume}>{this.things.print}</Button>
                <hr />
                <Subtitle>{this.things.dogResume}</Subtitle>
                <Button style={this.buttonNude} click={this.likeProject}>{this.things.like}</Button>
                <Button style={this.buttonNude} click={this.reportBug}>{this.things.bug}</Button>
                <Credit>adog.io</Credit>
                <span style={{ fontSize: "10px", color: "#cacaca" }}>{this.things.version}: {"beta 0.4.0-16800"}</span>
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
                newStyle = { ...icon, type: "font" };
                break;
            case 2:
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
            // blue
            case 4:
                newStyle = { ...left, backgroundColor: "#2c52ff", color: "white" };
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
        if (!this.detail) {
            alert(this.things.toView);
        } else if (window.dogResume.global.selected) {
            alert(this.things.toUnselect);
        } else {
            let cssLink = document.createElement("link");
            cssLink.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
            cssLink.rel = "stylesheet";
            cssLink.type = "text/css";

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
            f.contentDocument.close();
        }
    }

    changeMode() {
        if (this.detail) {
            window.dogResume.viewMode();
            this.detail = false;
            this.setState({
                detail: this.things.viewMode
            })
        } else {
            window.dogResume.detailMode();
            this.detail = true;
            this.setState({
                detail: this.things.detailMode
            })
        }
    }

    likeProject() {
        window.location.href = "https://github.com/adogio/dogResume";
    }

    reportBug() {
        window.location.href = "https://github.com/adogio/dogResume/issues";
    }
}

export default Nav;
