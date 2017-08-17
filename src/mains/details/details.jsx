import React, {
    Component
} from 'react';
import SmallInput from '../../react/res/smallInput/smallInput';
import Button from '../../react/res/smallButton/smallButton';

class Details extends Component {
    addStyle = {
        backgroundColor: "#729672",
        color: "white",
        width: "40px"
    };
    delStyle = {
        backgroundColor: "#984e4e",
        color: "white",
        width: "25px"
    };
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        this.renderInner = this.renderInner.bind(this);
        this.change = this.change.bind(this);
        this.changeInner = this.changeInner.bind(this);
        this.addOuter = this.addOuter.bind(this);
        this.addInner = this.addInner.bind(this);
        this.delOuter = this.delOuter.bind(this);
        this.delInner = this.delInner.bind(this);
        this.sendToParent = this.sendToParent.bind(this);
        if (this.props.detail) {
            // this.sendToParent([]);
        }
    }

    render() {
        return (
            <div className="common-detail">
                <ul className="common-detail">
                    {this.props.detail.map((i, index) => {
                        return this.renderList(i, index)
                    })}
                    {this.props.isEdit ? <Button click={this.addOuter} style={this.addStyle}><i className="fa fa-plus"></i></Button> : null}
                </ul>
            </div>
        );
    }

    renderList(i, index) {
        return <li key={index}>
            {this.props.isEdit ? <span><SmallInput value={i.outer} args={index} model={this.change} />
                <Button click={this.delOuter} args={index} style={this.delStyle}><i className="fa fa-times"></i></Button>
            </span> : i.outer}
            <ul className="common-detail">
                {i.inner.map((i, nextindex) => {
                    return this.renderInner(i, nextindex, index);
                })}
                {this.props.isEdit ? <Button click={this.addInner} args={index} style={this.addStyle}><i className="fa fa-plus"></i></Button> : null}
            </ul>
        </li>;
    }
    renderInner(i, index, lastIndex) {
        return <li key={index}>
            {this.props.isEdit ? <span><SmallInput value={i} args={[lastIndex, index]} model={this.changeInner} />
                <Button click={this.delInner} args={[lastIndex, index]} style={this.delStyle}><i className="fa fa-times"></i></Button>
            </span> : i}
        </li>
    }

    addOuter() {
        let b = this.props.detail;
        b.push({ outer: "", inner: [] });
        this.sendToParent(b);
    }

    addInner(index) {
        let b = this.props.detail;
        b[index].inner.push("");
        this.sendToParent(b);
    }

    delOuter(index) {
        let b = this.props.detail;
        b.splice(index, 1);
        this.sendToParent(b);
    }

    delInner(args) {
        let b = this.props.detail;
        b[args[0]].inner.splice(args[1], 1);
        this.sendToParent(b);
    }

    change(e, args) {
        let b = this.props.detail;
        b[args].outer = e;
        this.sendToParent(b);
    }
    changeInner(e, args) {
        let b = this.props.detail;
        b[args[0]].inner[args[1]] = e;
        this.sendToParent(b);
    }

    sendToParent(b) {
        this.props.onChange(b);
    }
}

export default Details;
