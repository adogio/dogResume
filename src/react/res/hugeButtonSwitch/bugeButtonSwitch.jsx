import React, {
    Component
} from 'react';
import Button from '../button/button';

class BugeButtonSwitch extends Component {
    HugeStyle = {
        width: "50%",
        height: "100px"
    }

    selectedStyle = {
        backgroundColor: "#b9de7e"
    }

    constructor(props) {
        super(props);
        this.callLeftWithArgs = this.callLeftWithArgs.bind(this);
        this.callRightWithArgs = this.callRightWithArgs.bind(this);
        this.state = {
            tempSelected: this.props.selected
        }
    }

    render() {
        return (
            <div>
                <Button
                    click={this.callLeftWithArgs}
                    style={this.state.tempSelected === 0 ? { ...this.HugeStyle, ...this.selectedStyle } : this.HugeStyle}>
                    {this.props.leftContent}
                </Button>
                <Button
                    click={this.callRightWithArgs}
                    style={this.state.tempSelected === 1 ? { ...this.HugeStyle, ...this.selectedStyle } : this.HugeStyle}>
                    {this.props.rightContent}
                </Button>
            </div>
        );
    }

    callLeftWithArgs() {
        this.setState({
            tempSelected: 0
        });
        if (this.props.args) {
            this.props.left(this.props.args);
        } else {
            this.props.left();
        }
    }

    callRightWithArgs() {
        this.setState({
            tempSelected: 1
        });
        if (this.props.args) {
            this.props.right(this.props.args);
        } else {
            this.props.right();
        }
    }
}

export default BugeButtonSwitch;
