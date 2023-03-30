import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Signin = () => {
  const [login, setLogin] = useState(false);

  const handleFormChange = () => {
    setLogin(!login);
  };

  return (
    <div>
      {login ? (
        <Login handleFormChange={() => handleFormChange()} />
      ) : (
        <Signup handleFormChange={() => handleFormChange()} />
      )}
    </div>
  );
};

export default Signin;
