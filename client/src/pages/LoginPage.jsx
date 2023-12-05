import React, { useContext, useState } from "react";
import "../App.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://kenta-api.vercel.app/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      const userInfo = await response.json();

      // Assuming your server returns a token in the response
      const authToken = userInfo.token;

      // Store the token securely (here, using localStorage for simplicity)
      localStorage.setItem("authToken", authToken);

      // Update the user context with user information
      setUserInfo(userInfo);

      // Redirect the user to the home page
      setRedirect(true);
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
