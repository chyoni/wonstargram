import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.module.scss";
import Footer from "components/Footer";
import Auth from "../Auth";
import Navigation from "../Navigation";
import Feed from "../Feed";
// Switch는 Route중 딱 하나만 보여주겠다는 것 물론 path중에 공유하는 애들이 있는 경우  ex) "/"

const App = props => [
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route exact={true} path={"/"} component={Feed} />
    <Route exact={true} path={"/explore"} render={() => "explore"} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact={true} path={"/"} component={Auth} />
    <Route exact={true} path={"/forgot"} render={() => "forgot password"} />
  </Switch>
);

export default App;
