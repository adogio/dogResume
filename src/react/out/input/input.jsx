import React, {
    Component
} from 'react';
import global from '../../global';

class input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value ? props.value : ''
        };
        this.handleingChange = this.handleingChange.bind(this);
    }

    render() {
        return (<input value={this.state.value} onChange={this.handleingChange} />
        );
    }

    handleingChange(change) {
        this.setState({
            value: change.target.value
        })
        // When dogui is on stupid mode, use stupid twoway binding instead smarter data flow
        if (global.mode === "stupid") {
            if (this.props.model) this._reactInternalInstance._currentElement._owner._instance.dog_handleInput(change, this.props.model);
        } else {
            if (this.props.onInput) this.props.onInput(change);
            if (this.props.model) this.props.model(change);
        }
    }
}

export default input;