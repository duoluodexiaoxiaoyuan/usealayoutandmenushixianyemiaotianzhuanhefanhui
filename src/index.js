import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Route, Router, useHistory } from "react-router";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { routesList } from "./router/config";
import RouterView from "./router/RouterView";
import Sider from "./pages/ceshi/Sider";

const Index = () => {
  return (
    <HashRouter>
      <RouterView routes={routesList} />
    </HashRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
