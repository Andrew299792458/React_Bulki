import React from "react";
import { Component } from "react";
import "./styles.css"
class ValidateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      password: '',
      confirmPassword: '',
      email: '',
      number: '',
      formErrors: {}
    };
  }
  onFormValidation() {
    const { Name, password, confirmPassword, email, number } = this.state;
    let formErrors = {};
    let formIsValid = true;
    if (!Name) {
      formIsValid = false;
      formErrors["Name"] = "Name is required.";
    }
    if (!password) {
      formIsValid = false;
      formErrors["password"] = "password is required.";
    }
    if (!confirmPassword) {
      formIsValid = false;
      formErrors["confirmPassword"] = "confirm Password is required.";
    }
    if (!email) {
      formIsValid = false;
      formErrors["email"] = "email is required.";
    }
    if (!number) {
      formIsValid = false;
      formErrors["number"] = "number is required.";
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  }
  onChange = (e) => {
    if (this.onFormValidation()) {
      this.setState()
    }
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.onFormValidation()) {
      alert("Success!")
    }
  }
  render() {
    const { Name, password, confirmPassword, email, number } = this.state.formErrors;
    return (
      <>
        <form onSubmit={this.onSubmit} className={"center"}>
          <input type="text" name="Name" onChange={this.onChange} placeholder="name" className={Name ? ' showError' : ''} />
          {Name && <div className="red">{Name}</div>}
          <input type="text" name="password" onChange={this.onChange} placeholder="password" className={password ? ' showError' : ''} />
          {password && <div className="red">{password}</div>}
          <input type="text" name="confirmPassword" onChange={this.onChange} placeholder="confirm Password" className={confirmPassword ? ' showError' : ''} />
          {confirmPassword && <div className="red">{confirmPassword}</div>}
          <input type="text" name="email" onChange={this.onChange} placeholder="email" className={email ? ' showError' : ''} />
          {email && <div className="red">{email}</div>}
          <input type="text" name="number" onChange={this.onChange} placeholder="number" className={number ? ' showError' : ''} />
          {number && <div className="red">{number}</div>}
          <input type="submit" value="Registration" className="btn" />
        </form>
      </>
    )
  }
}
export default ValidateForm;
