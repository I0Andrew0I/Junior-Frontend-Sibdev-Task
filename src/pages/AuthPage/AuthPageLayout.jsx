import React from "react";
import PropTypes from "prop-types";
import { Button, Image, Input } from "antd";
import logo from "../../assets/sibdev-logo.png";
import "./AuthPage.scss";

const AuthPageLayout = ({ login, setLogin, password, setPassword, onAuth }) => {
  return (
    <div className="auth-page">
      <div className="auth-page__auth-form">
        <div className="auth-page__auth-form__logo">
          <Image width={88} src={logo} />
        </div>
        <div className="auth-page__auth-form__label">Вход</div>
        <div className="auth-page__auth-form__input">
          <div className="auth-page__auth-form__input__label">Логин</div>
          <Input
            size={"large"}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="auth-page__auth-form__input">
          <div className="auth-page__auth-form__input__label">Пароль</div>
          <Input.Password
            size={"large"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="auth-page__auth-form__button">
          <Button block type="primary" size="large" onClick={onAuth}>
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

AuthPageLayout.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setLogin: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  onAuth: PropTypes.func.isRequired,
};

export default AuthPageLayout;
