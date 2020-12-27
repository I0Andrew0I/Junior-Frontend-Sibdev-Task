import React from "react";
import { useHistory } from "react-router-dom";
import AppBarLayout from "./AppBarLayout";

const onExit = (history) => () => {
  history.push("/auth");
  //TODO: Чистка локального хранилища
};

const onRedirect = (history) => (path) => {
  history.push(`/${path}`);
};

const AppBar = () => {
  const history = useHistory();
  return (
    <AppBarLayout onExit={onExit(history)} onRedirect={onRedirect(history)} />
  );
};

export default AppBar;
