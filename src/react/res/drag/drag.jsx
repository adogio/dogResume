import React, {
    Component
} from 'react';
import './drag.css';
//Notfinished
class Drag extends Component {
    constructor(props) {
        super(props);
        this.startDrag = this.startDrag.bind(this);
        this.move = this.move.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.state = {
            isDrag: false,
            height: null,
            width: null,
            posX: null,
            posY: null
        }
    }

    render() {
        return (
            <div ref="dragger" draggable="true" className="component"
                onDrag={this.startDrag}
                onDragEnd={this.endDrag}
                style={this.setStyleProperty()}>
                {this.props.children}
            </div>
        );
    }
    setStyleProperty() {
        if (this.state.isDrag) {
            return {
                position: "fixed",
                height: this.state.height,
                width: this.state.width,
                top: this.state.posY,
                left: this.state.posX
            }
        }
    }
    startDrag(e) {
        // console.log(e);
        // this.setState({
        //     isDrag: true,
        //     height: this.refs.dragger.clientHeight,
        //     width: this.refs.dragger.clientWidth
        // })
    }
    move(e) {
        // console.log(e);
        if (this.state.isDrag) {
            this.setState({
                posX: this.refs.dragger.clientLeft,
                posY: this.refs.dragger.clientTop
            })
        }
    }
    endDrag(e) {
        console.log(e);
    }
}

export default Drag;
