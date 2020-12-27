import React from "react";
import Layout, { Content } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import SearcForm from "../../components/SearchForm/SearchForm";
import SearchResult from "../../components/SearchResult/SearchResult";
import "./SearchPage.scss";

const IndexPage = () => {
  const { search_query } = useParams();
  return (
    <Layout>
      <AppBar />
      <Content className="search-page">
        <div className="search-page__data">
          <SearcForm position={search_query ? "top" : "center"} />
          {search_query && <SearchResult />}
        </div>
      </Content>
    </Layout>
  );
};

export default IndexPage;
