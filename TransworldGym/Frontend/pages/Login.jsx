import { useState } from "react";
import API from "../services/api";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", user);
      alert("Token: " + res.data.token);
    } catch {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="usuario" onChange={e => setUser({...user, username: e.target.value})} />
      <input placeholder="contraseña" type="password" onChange={e => setUser({...user, password: e.target.value})} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
