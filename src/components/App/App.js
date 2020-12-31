import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import IndexPage from "../../pages/IndexPage/IndexPage";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="app">
      <Switch>
        {!token && (
          <>
            <Route path="/auth" component={AuthPage} />
            <Route path="*">
              <Redirect to="/auth" />
            </Route>
          </>
        )}
        {token && <Route path="*" component={IndexPage} />}
      </Switch>
    </div>
  );
};

export default App;
