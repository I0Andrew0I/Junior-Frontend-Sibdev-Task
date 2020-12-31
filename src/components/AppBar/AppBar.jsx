import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import AppBarLayout from "./AppBarLayout";

const onExit = (history) => () => {
  localStorage.clear();
  history.push("/auth");
  window.location.reload();
};

const AppBar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const rootPath = pathname.split("/")[1];
  return <AppBarLayout onExit={onExit(history)} rootPath={rootPath} />;
};

export default AppBar;
