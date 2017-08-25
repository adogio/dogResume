import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/secondLogo/secondLogo';
import ComplexDescription from './complexDescription';

class ComplexPrint extends Component {

    constructor(props) {
        super(props);
        this.printComplexResume = this.printComplexResume.bind(this);
        this.next = this.next.bind(this);
        this.addLarge = this.addLarge.bind(this);
        this.delLarge = this.delLarge.bind(this);
        this.changeIndex = this.changeIndex.bind(this);
        this.renderLarges = this.renderLarges.bind(this);
        this.getDefaultList = this.getDefaultList.bind(this);
        // const defaultList = getDefaultList();
        this.state = {
            step: 0,
            printList: this.getDefaultList()
        }
    }

    render() {
        return (
            <div>
                <Logo size="24">{this.props.things.mutiPrint}</Logo>
                {this.state.step === 0 ?
                    <Logo size="15" left>{this.props.things.muti.description}</Logo> :
                    <div>
                        <Logo size="15" left>{this.props.things.muti.request}</Logo>
                        {this.state.printList.map(this.renderLarges)}
                        <Logo size="15">{this.props.things.muti.input}</Logo>
                    </div>
                }
                <Button click={this.next}>
                    {this.state.step === 0 ?
                        this.props.things.zero.next :
                        this.props.things.print}
                </Button>
            </div>
        );
    }

    getDefaultList() {
        let defaulted = JSON.parse(window.dogResume.outputJson());
        console.log(defaulted);
    }

    addLarge() {

    }

    delLarge(index) {

    }

    changeIndex(e, index) {

    }

    renderLarges(i, index) {

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
            temp.contentDocument.close();
            return 0;
        }
        temp.contentDocument.getElementById("mutiPrint").innerHTML = 1;
        print += "<div style='height: 15px'></div>";
        print += temp.contentDocument.documentElement.innerHTML;
        temp.contentDocument.getElementById("mutiPrint").innerHTML = 2;
        print += "<div style='height: 15px'></div>";
        print += temp.contentDocument.documentElement.innerHTML;
        temp.contentDocument.getElementById("mutiPrint").innerHTML = 3;
        print += "<div style='height: 15px'></div>";
        print += temp.contentDocument.documentElement.innerHTML;
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

}

export default ComplexPrint;

