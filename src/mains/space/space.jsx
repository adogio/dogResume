import React, {
    Component
} from 'react';
import './space.css';
import strings from '../../strings.json';
class Space extends Component {
    things;
    constructor(props) {
        super(props);
        this.things = strings.chinese;
        this.click = this.click.bind(this);
    }

    render() {
        return (
            <div className="space" style={this.props.style} onClick={this.click}>
                {this.things.putItHere}
            </div>
        );
    }

    click(){
        this.props.onClick(this.props.index);
    }
}

export default Space;
