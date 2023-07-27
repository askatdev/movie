import React from 'react';
import "./index.scss"
import google from "../../img/google.png"

const Register = () => {
  return (
    <div id='register'>
      <div className="container">
        <div className="regitser">
            <h1>Email</h1>
            <input type="email" />
            <button>Continue</button>
            <div className="register--block">
                <div className="syz"></div>
                <h2>or continue with</h2>
                <div className="syz"></div>
                <div className="register--logo">
                    <div className="register--logo__box">
                        <img src={google} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;