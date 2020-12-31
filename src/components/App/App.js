import React from "react";
import { Switch, Route } from "react-router-dom";
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
        {!isAuthorized && <Route path="*" component={NotFoundPage} />}
      </Switch>
    </div>
  );
};

export default App;
