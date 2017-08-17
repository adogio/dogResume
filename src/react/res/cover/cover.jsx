import React, {
    Component
} from 'react';

import PopUp from '../popUp/popUp';
import './cover.css';

class Cover extends Component {


    constructor(props) {
        super(props);
        window.dog = {};
        this.state = {
            popStuff: null,
            mainStyle: {},
            isPoping: false
        }
        this.popUp = this.popUp.bind(this);
        this.unPop = this.unPop.bind(this);
        window.dog.pop = (react) => {
            this.popUp(react);
        }
        window.dog.unPop = () => {
            this.unPop();
        }
    }

    render() {
        return (
            <div className="FullCover">
                <div className="FullCover" style={this.state.mainStyle}>
                    {this.props.children}
                </div>
                {this.state.isPoping ? <PopUp>
                    {this.state.popStuff}
                </PopUp> : null}
            </div>
        );
    }

    popUp(react) {
        this.setState({
            mainStyle: {
                filter: "blur(5px)",
                WebkitFilter: "blur(5px)",
                pointerEvents: 'none'
            },
            popStuff: react,
            isPoping: true
        })
    }
    unPop() {
        this.setState({
            mainStyle: {},
            isPoping: false
        })
    }
}

export default Cover;
