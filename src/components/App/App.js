import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import SearchPage from "../../pages/SearchPage/SearchPage";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/search/:search_query" component={SearchPage} />
        <Route path="*" component={SearchPage} />
        {/* <Route path="/favorites" component={FavoritesPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
