import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import IndexPage from "../../pages/IndexPage/IndexPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = () => {
  const isAuthorized = Boolean(localStorage.getItem("token"));
  return (
    <div className="app">
      <Switch>
        <Route path="/auth" component={AuthPage} />
        {isAuthorized && <Route path="*" component={IndexPage} />}
        <Redirect to="/auth" />
      </Switch>
    </div>
  );
};

export default App;
