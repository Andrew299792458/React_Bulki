import React from "react";
import { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: 0,
        }
    }
    Plus = () => {
        this.setState({ flag: ++this.state.flag })
    }
    Minus = () => {
        this.setState({ flag: --this.state.flag })
    }
    render() {
        console.log(this.state.flag);
        return <>
            <p>{this.state.flag}</p>
            <button onClick={this.Plus}>+</button>
            <button onClick={this.Minus}>-</button>
        </>
    }
}

export default Header
