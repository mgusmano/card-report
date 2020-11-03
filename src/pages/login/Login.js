import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
//import logoImg from "../img/logo.jpg";
import logoImg from "../../images/logo.png";
import { Card, Logo, Form, Input, Button, Error } from "../../components/AuthForms";
import { useAuth } from "../../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = props.location.state.referer || '/';

  function postLogin() {
    axios.get("https://skillnetusersapi.azurewebsites.net/api/users?partnerid=434", {
      //auth: {username: 'skillnet',password: 'demo'},
      auth: {username: userName, password: 'demo'},
      //userName,
      //password
    }).then(result => {
      switch (password) {
        case 'cnasme':
          break;
        case 'cna':
          break;
        case 'gmi':
          break;
        default:
          console.log('bad password')
          setIsError(true);
          return
          break;
      }

      if (result.status === 200) {
        setAuthTokens(password);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="ID"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      {/* <Link to="/signup">Don't have an account?</Link> */}
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;