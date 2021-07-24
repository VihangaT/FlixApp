import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            className="logo"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies,Tv Shows and More</h1>
        <h2>Watch anywhere.cancel anytime</h2>
        <p>
          Ready to watch? Enter Your email to create or restart your membership.
        </p>
        <div className="input">
          <input type="email" placeholder="email address" />
          <button className="registerButton">Get Started!</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
