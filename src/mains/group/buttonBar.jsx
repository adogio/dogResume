import React, {
    Component
} from 'react';
import Button from '../../react/res/smallButton/smallButton';
import SubTitle from '../../react/res/subtitle/subtitle';

class ButtonBar extends Component {
    constructor(props) {
        super(props);
        this.mapButtons = this.mapButtons.bind(this);
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <SubTitle>{this.props.children}</SubTitle>
                {this.props.buttons ? this.props.buttons.map(this.mapButtons) : null}
            </div>
        );
    }

    mapButtons(i, index) {
        let style = {
            width: "48px"
        };
        if (this.props.current === i.id) {
            style.backgroundColor = "green";
            style.fontWeight = "bold";
        }
        return <Button key={index + Math.random()} click={this.props.click} style={style} args={i.id}>{i.name}</Button>
    }
}

export default ButtonBar;
