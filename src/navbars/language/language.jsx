import React, {
    Component
} from 'react';
import Button from '../../react/res/button/button';
import Logo from '../../react/res/logo/logo';
import Switch from '../../react/res/hugeButtonSwitch/bugeButtonSwitch';
import SubTitle from '../../react/res/subtitle/subtitle';

class Language extends Component {

    render() {
        return (
            <div>
                <Logo>{this.props.things.language.title}</Logo>
                <br />
                <SubTitle>{this.props.things.language.ui}</SubTitle>
                <Switch left={this.props.chinese}
                    right={this.props.english}
                    selected={this.props.currentUI}
                    leftContent={this.props.things.language.chinese}
                    rightContent={this.props.things.language.english} />
                <SubTitle>{this.props.things.language.resume}</SubTitle>
                <Switch left={this.props.chinese}
                    right={this.props.english}
                    selected={this.props.currentResume}
                    args={true}
                    leftContent={this.props.things.language.chinese}
                    rightContent={this.props.things.language.english} />
                <Button click={this.props.next}>{this.props.things.language.done}</Button>
            </div>
        );
    }
}

export default Language;
