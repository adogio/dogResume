import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/secondLogo/secondLogo';
import Switch from '../../react/res/hugeButtonSwitch/bugeButtonSwitch';
import SubTitle from '../../react/res/subtitle/subtitle';

class ZeroGuide extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.state = {
            currentStep: 0
        }
    }

    render() {
        return (
            <div>
                <Logo size="22">{this.props.things.zero.welcome}</Logo>
                <Logo size="18" left>{this.props.things.zero.welcome2}</Logo>
                <Logo size="18" left>{this.props.things.zero.clickNext}</Logo>
                <Button click={this.next}>{this.props.things.zero.next}</Button>
            </div>
        );
    }
    next() {
        console.log('next');
    }

}

export default ZeroGuide;
