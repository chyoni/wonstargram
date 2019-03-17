import React from "react";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import formStyles from "../../shared/formStyles.module.scss";

const LogInForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type={"text"}
        name={"username"}
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
      />
      <input
        type={"submit"}
        value={context.t("Log in")}
        className={formStyles.button}
      />
    </form>
    <span className={formStyles.divider}>or</span>
    <FacebookLogin
      appId="272087337023545"
      autoLoad={false}
      fields="name,email,picture"
      cssClass={formStyles.facebookLink}
      callback={props.handleFacebookLogin}
      icon={"fa-facebook-square"}
      textButton={context.t("Log in with Facebook")}
    />
    <span className={formStyles.forgotLink}>
      {context.t("Forgot password?")}
    </span>
  </div>
);

LogInForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

LogInForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LogInForm;
