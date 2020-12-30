import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import logo from "../../assets/sibdev-logo.png";
import "./AppBar.scss";

const AppBarLayout = ({ onExit, onRedirect, rootPath }) => {
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
          onClick={({ key }) => onRedirect(key)}
        >
          <img height={48} width={48} src={logo} />
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
  onRedirect: PropTypes.func.isRequired,
  rootPath: PropTypes.string.isRequired,
};

export default AppBarLayout;
