import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import IndexPage from "../../pages/IndexPage/IndexPage";

const App = () => {
  const isAuthorized = true;

  return (
    <div className="app">
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="*" component={IndexPage} />
      </Switch>
    </div>
  );
};

export default App;
