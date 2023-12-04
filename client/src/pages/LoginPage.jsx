import React, { useContext, useState } from "react";
import "../App.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://kenta-mern-api.vercel.app/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Login failed, wrong credentials");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Giriş Yap</h1>
      <input
        type="text"
        placeholder="Kullanıcı adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Giriş Yap</button>
    </form>
  );
};

export default LoginPage;
