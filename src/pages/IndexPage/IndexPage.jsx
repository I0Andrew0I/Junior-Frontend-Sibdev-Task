import React from "react";
import Layout, { Content } from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import SearchPage from "../SearchPage/SearchPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./IndexPage.scss";

const IndexPage = () => {
  return (
    <Layout>
      <AppBar />
      <Content className="index-page">
        <div className="index-page__data">
          <Switch>
            <Route path="/search/:search_query" component={SearchPage} />
            <Route path="/search/" component={SearchPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Content>
    </Layout>
  );
};

export default IndexPage;
