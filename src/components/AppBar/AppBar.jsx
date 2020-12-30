import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { redirect } from "../../helpers/helpers";
import AppBarLayout from "./AppBarLayout";

const onExit = (history) => () => {
  Storage.clear();
  history.push("/auth");
};

const AppBar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const rootPath = pathname.split("/")[1];
  return (
    <AppBarLayout
      onExit={onExit(history)}
      onRedirect={redirect(history)}
      rootPath={rootPath}
    />
  );
};

export default AppBar;
