import React, { Component } from "react";
import PropTypes from "prop-types";
import LogInForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    usernameLogin: PropTypes.func.isRequired
  };
  render() {
    const { username, password } = this.state;
    return (
      <LogInForm
        usernameValue={username}
        passwordValue={password}
        handleFacebookLogin={this._handleFacebookLogin}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    usernameLogin(username, password);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
