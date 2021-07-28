import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserDetails";

const SetUserDetails = () => {
  const history = useHistory();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const { setUserInfo } = useContext(UserContext);
  

  const handleSetName = () => {
    setUserInfo({firstName: firstNameRef.current.value, lastName: lastNameRef.current.value })
   
    history.push("/home");
  };
  return (
    <>
      <input name='firstName' ref={firstNameRef} />
      <input name='lastName' ref={lastNameRef} />
          
      <button onClick={handleSetName}>Set Name </button>
    </>
  );
};

export default SetUserDetails;