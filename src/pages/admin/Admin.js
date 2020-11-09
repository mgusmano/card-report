import React from "react";
import { Button } from "../../components/AuthForms";
import { useAuth } from "../../context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div style={{padding:'20px'}}>
      <Button onClick={logOut}>Click To Log Out</Button>
    </div>
  );
}

export default Admin;