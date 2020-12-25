import React from "react";
import { Button, Image, Input } from "antd";
import logo from "../../assets/sibdev-logo.png";
import "./AuthPage.scss";

const AuthPageLayout = () => {
  return (
    <div className="content">
      <div className="content__auth-form">
        <div className="content__auth-form__logo">
          <Image width={88} src={logo} />
        </div>
        <div className="content__auth-form__label">Вход</div>
        <div className="content__auth-form__input">
          <div className="content__auth-form__input__label">Логин</div>
          <Input size={"large"} />
        </div>
        <div className="content__auth-form__input">
          <div className="content__auth-form__input__label">Пароль</div>
          <Input.Password size={"large"} />
        </div>
        <div className="content__auth-form__button">
          <Button block type="primary" size="large">
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
