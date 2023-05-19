import React from "react";
import { Link } from "react-router-dom";
import LoginBg from "../assets/loginbg.png";
import { BsEmojiSmile } from "react-icons/bs";
import LoginAvatar from "../assets/loginAvatar.gif";
function Login() {
  return (
    <div className="login-hero-container">
      {/*Login Image */}
      <div className="login-image-container">
        <h3>
          Nice to <span>see</span> you again
        </h3>
        <h1>
          Welcome Back <BsEmojiSmile classname="smile-emoji" size={40} />
        </h1>
        <p>
          Don't have an account ? <Link>create an account</Link>
        </p>
        <img src={LoginBg} alt="Not Found" />
      </div>

      {/*Login Form */}
      <form className="login-form">
        <img src={LoginAvatar} alt="Not Found" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className="login-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
