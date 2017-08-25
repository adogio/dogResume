import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Small from '../../react/res/smallButton/smallButton';
import Logo from '../../react/res/secondLogo/secondLogo';
import ComplexDescription from './complexDescription';

class ComplexPrint extends Component {
    addStyle = {
        backgroundColor: "#729672",
        color: "white",
        width: "40px"
    };
    constructor(props) {
        super(props);
        this.printComplexResume = this.printComplexResume.bind(this);
        this.next = this.next.bind(this);
        this.addLarge = this.addLarge.bind(this);
        this.delLarge = this.delLarge.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.renderLarges = this.renderLarges.bind(this);
        this.getDefaultList = this.getDefaultList.bind(this);
        this.createOne = this.createOne.bind(this);
        this.notCreate = this.notCreate.bind(this);
        this.switchTime = this.switchTime.bind(this);
        this.state = {
            step: 0,
            printList: [],
            single: this.getDefaultList()
        }
    }

    render() {
        return (
            <div>
                <Logo size="24">{this.props.things.mutiPrint}</Logo>
                {this.state.step === 0 ?
                    <div>
                        <Logo size="15" left>{this.props.things.muti.description}</Logo>
                        {this.state.single ? null
                            : <Logo size="16" style={{ color: "red" }}>{this.props.things.muti.empty}</Logo>
                        }
                    </div> :
                    <div>
                        <Logo size="15" left>{this.props.things.muti.request}</Logo>
                        <Logo size="12" left>
                            {this.props.things.muti.also +
                                (this.state.single.position ?
                                    this.state.single.position
                                    : this.props.things.muti.veryEmpty
                                )
                                + this.props.things.muti.also2
                            }
                        </Logo>
                        <hr />
                        {this.state.printList.map(this.renderLarges)}
                        <Small click={this.addLarge} style={this.addStyle}><i className="fa fa-plus"></i></Small>
                        <hr />
                        <Logo size="15">{this.props.things.muti.input}</Logo>
                    </div>
                }
                {this.state.single ?
                    <Button click={this.next}>
                        {this.state.step === 0 ? this.props.things.zero.next : this.props.things.print}
                    </Button> :
                    <div>
                        <Button click={this.createOne}>{this.props.things.muti.createButton}</Button>
                        <Button click={this.notCreate}>{this.props.things.muti.noButton}</Button>
                    </div>
                }
            </div>
        );
    }

    getDefaultList() {
        let defaulted = JSON.parse(window.dogResume.outputJson());
        for (let i = 0; i < defaulted.left.length; i++) {
            if (defaulted.left[i].component === "description") {
                if (!Boolean(defaulted.left[i].default)) {
                    return {
                        company: "",
                        position: "",
                        time: 5
                    }
                } else {
                    return defaulted.left[i].default;
                }
            }
        }
        return null;
    }
    createOne() {
        let temp = JSON.parse(window.dogResume.outputJson());
        temp.left.push({ component: "description", default: { company: "", position: "", time: 5 } });
        this.setState({
            single: { company: "", position: "", time: 5 }
        });
        window.dogResume.inputJson(JSON.stringify(temp));
        this.next();
    }
    notCreate() {
        window.dog.unPop();
    }
    addLarge() {
        let b = this.state.printList;
        b.push({ company: "", position: "", time: 5 });
        this.setState({
            printList: b
        });
    }

    delLarge(index) {
        let b = this.state.printList;
        b.splice(index, 1);
        this.setState({
            printList: []
        }, () => {
            this.setState({
                printList: b
            });
        });
    }

    changeIndex(e, index) {
        let b = this.state.printList;
        b[index] = e;
        this.setState({
            printList: b
        });
    }

    renderLarges(i, index) {
        return <ComplexDescription
            key={'mutiPrint' + index}
            detail={i}
            index={index}
            onChange={this.changeIndex}
            del={this.delLarge}
            things={this.props.things}
        />
    }

    next() {
        if (this.state.step === 0) {
            this.setState({
                step: 1
            })
        } else {
            this.printComplexResume();
        }
    }

    printComplexResume() {
        const spliter = "<div style='height: 15px'></div>";

        let cssLink = document.createElement("link");
        cssLink.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";

        let cssLink2 = document.createElement("link");
        cssLink2.href = " https://fonts.googleapis.com/css?family=Ubuntu";
        cssLink2.rel = "stylesheet";
        cssLink2.type = "text/css";

        var temp = document.getElementById('printTemp');
        temp.contentDocument.write(document.getElementById('resume').innerHTML);
        let print = "<html><head></head>";
        print += "<body>"
        print += temp.contentDocument.documentElement.innerHTML;
        if (!Boolean(temp.contentDocument.getElementById("mutiPrint"))) {
            alert(this.props.things.muti.bug);
            temp.contentDocument.close();
            return 0;
        }
        for (let i = 0; i < this.state.printList.length; i++) {
            temp.contentDocument.getElementById("mutiPrint").innerHTML =
                this.state.printList[i].company +
                "<br>" +
                this.switchTime(this.state.printList[i]);
            print += spliter;
            print += temp.contentDocument.documentElement.innerHTML;
        }
        print += "</body>";
        print += "<style>";
        print += this.props.a;
        print += ".centerer{outline:" + this.props.printStyling + ";}";
        print += "</style></html>";
        var f = document.getElementById('printf');
        f.onload = function () {
            f.contentWindow.print();
            temp.contentDocument.close();
        }
        f.contentDocument.write(print);
        f.contentDocument.body.appendChild(cssLink);
        f.contentDocument.body.appendChild(cssLink2);
        f.contentDocument.close();
        return 1;
    }

    switchTime(i) {
        switch (i.time) {
            case 1:
                return this.props.things.descriptionInside.fullTime + " - " + i.position;
            case 2:
                return this.props.things.descriptionInside.partTime + " - " + i.position;
            case 3:
                return this.props.things.descriptionInside.internship + " - " + i.position;
            case 4:
                return this.props.things.descriptionInside.contractor + " - " + i.position;
            default:
                return i.position;
        }
    }
}

export default ComplexPrint;

