import React from "react";
import { Component } from "react";
import styles from "./styles.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: "",
            error1: "",
            error2: "",
            error3: "",
            error4: ""


        }
    }


    onChange = (e) => {

        this.setState({ userInput: e.target.value })

        if (e.target.value.length === 0) {
            this.state.error1 = "vay"

        } else { this.state.error1 = "" }
    }

    render() {

        return <div className="center">

            <input type="text" placeholder="name" onChange={this.onChange} />
            <p>{this.state.error1}</p>
            <input type="text" placeholder="Surname" onChange={this.onChange} />
            <p>{this.state.error2}</p>
            <input type="text" placeholder="login" onChange={this.onChange} />
            <p>{this.state.error3}</p>
            <input type="text" placeholder="password" onChange={this.onChange} />
            <p>{this.state.error4}</p>
            <button className="btn" >Registration</button>
        </div>
    }
}

export default Header
