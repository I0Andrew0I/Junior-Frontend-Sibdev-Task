import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthPageLayout from "./AuthPageLayout";

const onAuth = (history) => () => {
  history.push("/search");
  //TODO: Авторизация
};

const AuthPage = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthPageLayout
      onAuth={onAuth(history)}
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default AuthPage;
