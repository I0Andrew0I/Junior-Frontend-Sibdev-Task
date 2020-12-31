import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import IndexPage from "../../pages/IndexPage/IndexPage";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    setIsAuthorized(localStorage.getItem("token"));
  }, [localStorage]);
  return (
    <div className="app">
      <Switch>
        {!isAuthorized && (
          <>
            <Route path="/auth" component={AuthPage} />
            <Route path="*">
              <Redirect to="/auth" />
            </Route>
          </>
        )}
        {isAuthorized && <Route path="*" component={IndexPage} />}
      </Switch>
    </div>
  );
};

export default App;
