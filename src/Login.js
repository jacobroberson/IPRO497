import React from "react";
import { useHistory } from "react-router-dom";
import { signInWithGoogle } from "./service/firebase";

function Login() {
  return (
    <div>
      <button className="button" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>Sign in with google
      </button>
    </div>
  );
}

export default Login;
