import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://kenta-mern-api.vercel.app/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successfull");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Üye ol</h1>
      <input
        type="text"
        placeholder="Kullanıcı adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Üye Ol</button>
    </form>
  );
};

export default RegisterPage;
