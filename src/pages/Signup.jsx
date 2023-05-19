import React from "react";
import { Link } from "react-router-dom";
import LoginBg from "../assets/loginbg.png";
import { BsEmojiSmile } from "react-icons/bs";
import LoginAvatar from "../assets/loginAvatar.gif";
function Signup() {
  return (
    <div className="login-hero-container">
      {/*Login Image */}
      <div className="login-image-container">
        <h2>Create Your</h2>
        <h1>
          <span>Account</span> with us?
        </h1>

        <p>
          Do you have any account ? <Link>Login</Link>
        </p>
        <img src={LoginBg} alt="Not Found" />
      </div>

      {/*Login Form */}
      <form className="signup-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Phone no" />
        <p className="heading-label">
          Are you Client / Doctor / Ambulance service provider ?
        </p>
        <div className="radio-container">
          <input type="radio" name="who_are_you" alt="not found" />
          <p>Client</p>
        </div>
        <div className="radio-container">
          <input type="radio" name="who_are_you" alt="not found" />
          <p>Doctor</p>
        </div>
        <div className="radio-container">
          <input type="radio" name="who_are_you" alt="not found" />
          <p>Ambulance Service Provider</p>
        </div>
        <div className="login-btn">
          <button>Send OTP</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
