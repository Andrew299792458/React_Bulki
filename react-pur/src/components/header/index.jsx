import React from "react";
import { Component } from "react";
import styles from "./styles.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: 0,
        }
    }
    Inp = (e) => {
        this.setState({ num: e.target.value })
    }

    Plus = () => {
        this.setState({ flag: +this.state.num + this.state.flag })
    }
    Minus = () => {
        if (this.state.flag > 0) {
            this.setState({
                flag: this.state.flag - +this.state.num
            })
        }
        if (+this.state.num > this.state.flag) {
            this.setState({
                flag: this.state.flag - this.state.flag
            })

        }
    }
    render() {

        return <>
            <p>{this.state.flag}</p>
            <button onClick={this.Plus}>+</button>
            <button onClick={this.Minus}>-</button>
            <input type="number" onChange={this.Inp} className="red" />
        </>
    }
}

export default Header
