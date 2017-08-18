import React, {
    Component
} from 'react';

class SmallInput extends Component {
    inputStyle = {
        height: "20px",
        border: "0px",
        width: "85%",
        borderLeft: "3px solid #b30000",
        fontSize: "17px"
    }
    labelStyle = {
        paddingRight: "5px",
        fontSize: "17px"
    }
    constructor(props) {
        super(props);
        this.state = {
            value: props.value ? props.value : '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <input
                value={this.state.value}
                onChange={this.handleChange}
                style={this.inputStyle}
            />
        );
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
        if (this.props.onInput) this.props.onInput(e, this.props.args);
        if (this.props.model) this.props.model(e.target.value, this.props.args);
    }
}

export default SmallInput;
