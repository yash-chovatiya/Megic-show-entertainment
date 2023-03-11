import React from "react";
import { useState } from "react";
import "./register.css";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (password === confirmPassword) {
      try {
        const res = await axios.post("/auth/register", {
          username,
          password,
          email,
          fullname,
          DOB,
        });
        res.data && window.location.replace("/");
      } catch (err) {
        setError(err.response.data.msgFromServer);
        // setError(true);
      }
    } else {
      setError("Password didn't match");
    }
  };

  return (
    <div>
      <div className="register">
        <form className="registerForm" onSubmit={handleSubmit}>
          <img src="../../../logo.png "></img>
          <span className="registerTitle">Register</span>
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            name="Username"
            id=""
            placeholder="Enter UserName"
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
          <label>Name</label>
          <input
            className="registerInput"
            type="text"
            name="UsrFullName"
            id=""
            placeholder="Enter Full Name"
            onChange={(e) => setFullname(e.target.value)}
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="email"
            name="UEmail"
            id=""
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            name="UPassword"
            id=""
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            className="registerInput"
            type="password"
            name="ReUPassword"
            id=""
            placeholder="Re-Enter Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label>Enter Date Of Birth</label>
          <input
            className="registerInput"
            type="date"
            name="DOB"
            id=""
            placeholder=""
            onChange={(e) => setDOB(e.target.value)}
          />
          <button className="btnRegi" type="submit">
            Register
          </button>
          {error && <span className="errmsg">{error}</span>}
        </form>
      </div>
    </div>
  );
}
