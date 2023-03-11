import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", {
        username: userRef.current.value.toLowerCase(),
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(err.response.data.msgFromServer);
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <img src="../../../logo.png "></img>
        <span className="loginTitle">Login</span>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          name="UPassword"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button className="btnLogin" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="btnRegister">
          <Link className="link" to={"/register"}>
            Sign Up
          </Link>
        </button>
        {error && <span className="errmsg">{error}</span>}
      </form>
    </div>
  );
}
