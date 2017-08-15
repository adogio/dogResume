import React, {
    Component
} from 'react';
import './name.css';
import SmallButton from '../../react/res/smallButton/smallButton';

class Name extends Component {

    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.state = {
            edit: false
        }
    }

    render() {
        return (
            <div>
                <div className="name-name">Name</div>{this.props.dev ? <SmallButton click={this.edit}></SmallButton> : null}
            </div>
        );
    }
    edit() {

    }
}

export default Name;
