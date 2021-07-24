import React from "react";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./RegistrationPage.scss";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default RegistrationPage;
