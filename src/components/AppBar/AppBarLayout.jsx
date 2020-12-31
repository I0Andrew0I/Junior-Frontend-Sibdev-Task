import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import logo from "../../assets/sibdev-logo.png";
import "./AppBar.scss";
import { redirect } from "../../helpers/helpers";

const AppBarLayout = ({ onExit, rootPath }) => {
  const history = useHistory();
  return (
    <Header
      className="header"
      style={{ backgroundColor: "white", borderBottom: "1px solid #EEEEEE" }}
    >
      <div className="header__menu">
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[rootPath]}
          onClick={({ key }) => redirect(history)(key)}
        >
          <img alt="" height={48} width={48} src={logo} />
          <Menu.Item key="search">Поиск</Menu.Item>
          <Menu.Item key="favorites">Избранное</Menu.Item>
        </Menu>
        <Menu theme="light" mode="horizontal">
          <Menu.Item onClick={onExit}>Выход</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

AppBarLayout.propTypes = {
  onExit: PropTypes.func.isRequired,
  rootPath: PropTypes.string.isRequired,
};

export default AppBarLayout;
