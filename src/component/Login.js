import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import '../styles/login.css';
function Login() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  const handleClick = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: 'SET_USER',
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />

        <div className="login__text">
          <h2>Sign in to whatsapp</h2>
          <Button onClick={handleClick}>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
