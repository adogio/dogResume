import React, {
    Component
} from 'react';
import './quote.css';
class Quote extends Component {
    render() {
        return (
            <div>
                <div className="quote">
                    {this.props.children}
                </div>
                <div className="from">
                    ---{this.props.from}
                </div>
            </div>
        );
    }
}

export default Quote;