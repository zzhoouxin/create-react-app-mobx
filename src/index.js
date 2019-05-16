import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/router";
import { Provider } from "mobx-react";
import stores from "./store";

ReactDOM.render(
  <Provider {...stores}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
