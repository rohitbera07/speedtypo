import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import React from 'react'

const Notify = () => {
    const [showLoginSuccess, setShowLoginSuccess] = useState(false);
    const{isAuthenticated}=useAuth0();
    useEffect(() => {
      if (isAuthenticated) {
        setShowLoginSuccess(true);
        setTimeout(() => setShowLoginSuccess(false), 3000); // hides after 3 sec
      }
    }, [isAuthenticated]);
    return (
        <div>
        {showLoginSuccess && (
  <div className="bg-green-500 text-white px-4 py-2 rounded absolute top-4 right-4 shadow-md">
    Logged in successfully!
  </div>
)}

    </div>
  )
}

export default Notify
