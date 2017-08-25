import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/secondLogo/secondLogo';

class ComplexPrint extends Component {

    constructor(props) {
        super(props);
        this.printComplexResume = this.printComplexResume.bind(this);
    }

    render() {
        return (
            <div>
                <Logo size="26">{this.props.things.mutiPrint}</Logo>
                <Logo size="18" left>{this.props.things.muti.description}</Logo>
                <Button click={this.printComplexResume}>Print</Button>
            </div>
        );
    }

    printComplexResume() {
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

