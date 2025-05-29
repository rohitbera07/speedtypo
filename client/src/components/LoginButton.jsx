import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Notify from "./Notify";
import {useState, useEffect, useRef } from "react";
const LoginButton = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  
  const [showNotifyAndButton, setShowNotifyAndButton] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setShowNotifyAndButton(true); // Trigger rendering
    }
  }, [isAuthenticated]);

  return (
    <div>
      {showNotifyAndButton ? (
        <div>
          <Notify />
          <Link to={"/typing"}>
            <button className="bg-green-600 text-white m-4 px-4 py-2 rounded shadow-md">
              Get Started
            </button>
          </Link>
        </div>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-600 m-5 text-white w-28 font-mono px-5 py-2 rounded-xl"
        >
          Login
        </button>
)}

  </div>
)};

export default LoginButton;