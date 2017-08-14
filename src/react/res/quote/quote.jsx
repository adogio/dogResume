import React, {
    Component
} from 'react';
import './quote.css';
class Quote extends Component {
    render() {
        return (
            <div>
                <div className="quote">
                    <i>"{this.props.children}"</i>
                </div>
                <div className="from">
                    ---&nbsp;{this.props.from}
                </div>
            </div>
        );
    }
}

export default Quote;