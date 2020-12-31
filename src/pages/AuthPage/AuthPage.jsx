import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthPageLayout from "./AuthPageLayout";
import jwt from "jsonwebtoken";
import users from "../../data/users.json";
import { message } from "antd";

const onAuth = (history, login, password) => () => {
  const isAuthorized =
    users.filter((user) => user.login === login && user.password === password)
      .length > 0;
  if (!isAuthorized) {
    message.error("Ошибка авторизации: неправильный логин или пароль");
    return;
  }
  const token = jwt.sign({ login }, "privateKey");
  localStorage.setItem("token", token);
  history.push("/search");
  window.location.reload();
};

const AuthPage = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthPageLayout
      onAuth={onAuth(history, login, password)}
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default AuthPage;
