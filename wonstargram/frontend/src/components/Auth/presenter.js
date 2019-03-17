import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import LogInForm from "../LoginForm";
import SignUpForm from "../SignupForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <Helmet>
      <title>Wonstargram</title>
    </Helmet>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt={"Logo"} />
        {props.action === "login" && <LogInForm />}
        {props.action === "signup" && <SignUpForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            {context.t("Don't have an account?")}{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              {context.t("Sign up")}
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            {context.t("Have an account?")}{" "}
            <span onClick={props.changeAction} className={styles.changeLink}>
              {context.t("Log in")}
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>{context.t("Get the App")}</span>
        <div className={styles.appstores}>
          <img
            src={require("images/ios.png")}
            alt={"Download it on the Apple Appstore"}
          />
          <img
            src={require("images/android.png")}
            alt={"Download it on the Android Appstore"}
          />
        </div>
      </div>
    </div>
  </main>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
};

Auth.propTypes = {
  action: PropTypes.string.isRequired,
  changeAction: PropTypes.func.isRequired
};

export default Auth;
