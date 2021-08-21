import { React, useState, useContext } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button className="loginButton" 
          onClick={handleLogin}
          disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
