import React, {
    Component
} from 'react';
import global from '../../global';
import './input.css';

class input extends Component {
    color;
    outBorder = {
        borderLeft: "7px solid #b30000",
        width: "97%"
    }

    constructor(props) {
        super(props);
        this.state = {
            value: props.value ? props.value : '',
            placeHolderStyle: this.props.value ? 'smallPlaceholder' : 'bigPlaceholder smallPlaceholder'
        };
        this.color = {
            color: this.props.color ? this.props.color : 'black'
        };
        this.handleingChange = this.handleingChange.bind(this);
        this.handleingHolder = this.handleingHolder.bind(this);
        this.handleingBlur = this.handleingBlur.bind(this);
    }

    render() {
        return (
            <div>
                <div className="description" onClick={this.handleingHolder}>
                    <span className={this.state.placeHolderStyle}>
                        {this.props.children}
                    </span>
                </div>
                <div style={this.outBorder}>
                    <input ref="input"
                        type={this.props.type ? this.props.type : "text"}
                        value={this.state.value}
                        onChange={this.handleingChange}
                        onClick={this.handleingHolder}
                        onBlur={this.handleingBlur}
                        className="thisInput"
                        style={this.color} />
                </div>
            </div>
        );
    }

    handleingHolder() {
        this.setState({
            placeHolderStyle: 'smallPlaceholder'
        })
        this.refs.input.focus();
    }

    handleingBlur() {
        if (!Boolean(this.state.value)) {
            this.setState({
                placeHolderStyle: 'bigPlaceholder smallPlaceholder'
            })
        }
    }

    handleingChange(change) {
        this.setState({
            value: change.target.value,
            placeHolderStyle: 'smallPlaceholder'
        })
        // When dogui is on stupid mode, use stupid twoway binding instead smarter data flow
        if (global.mode === "stupid") {
            if (this.props.model) this._reactInternalInstance._currentElement._owner._instance.dog_handleInput(change, this.props.model);
        } else {
            if (this.props.onInput) this.props.onInput(change);
            if (this.props.model) this.props.model(change.target.value);
        }
    }
}

export default input;