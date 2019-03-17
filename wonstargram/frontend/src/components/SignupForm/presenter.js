import React from "react";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import formStyles from "../../shared/formStyles.module.scss";

const SignUpForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3>{context.t("Sign up to see photos and videos from your friends.")}</h3>{" "}
    <FacebookLogin
      appId="272087337023545"
      autoLoad={false}
      fields="name,email,picture"
      cssClass={formStyles.facebookLinkWithSignUp}
      callback={props.handleFacebookLogin}
      icon={"fa-facebook-square"}
      textButton={context.t("Log in with Facebook")}
    />
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type={"email"}
        name={"email"}
        value={props.emailValue}
        placeholder={context.t("Email")}
        className={formStyles.textInput}
        onChange={props.handleInputChange}
      />
      <input
        type={"text"}
        name={"name"}
        value={props.nameValue}
        placeholder={context.t("Name")}
        className={formStyles.textInput}
        onChange={props.handleInputChange}
      />
      <input
        type={"text"}
        name={"username"}
        value={props.usernameValue}
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        onChange={props.handleInputChange}
      />
      <input
        type={"password"}
        name={"password"}
        value={props.passwordValue}
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        onChange={props.handleInputChange}
      />
      <input
        type={"submit"}
        value={context.t("Sign up")}
        className={formStyles.button}
      />
    </form>
    <p>
      {context.t("By signing up, you agree to our")}{" "}
      <span>{context.t("Terms & Privacy Policy")}</span>
    </p>
  </div>
);

SignUpForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

SignUpForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignUpForm;
