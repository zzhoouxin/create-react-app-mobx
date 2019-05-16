import React, { Component, Fragment } from "react";
import { HashRouter,Route } from "react-router-dom";
import Home from '../page/home';
import One from '../page/one';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Route exact path={`/`} component={Home} />
          <Route path={`/one`} component={One} />
        </Fragment>
      </HashRouter>
    );
  }
}
export default Router;
