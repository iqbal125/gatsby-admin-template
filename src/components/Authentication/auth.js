import React, { useState, useContext, useEffect } from 'react';
import styles from './auth.module.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { navigate } from 'gatsby';
import AuthContext from '../../utils/auth_context';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import LoginForm from './forms/loginform';
import SignUpForm from './forms/signupform';

const Auth = () => {
  const [isLoading, setLoading] = useState(false);
  const [resMessage, setresMessage] = useState(null);
  const [isSignIn, setSignIn] = useState(true);
  const context = useContext(AuthContext);

  useEffect(() => {
    context.firebase.auth().signOut();
    setTimeout(() => context.LogOut(), 200);
  }, []);

  const uiConfig = {
    credentialHelper: 'none',
    signInFlow: 'popup',
    signInOptions: [
      context.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      context.firebase.auth.GithubAuthProvider.PROVIDER_ID,
      context.firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],

    callbacks: {
      signInSuccessWithAuthResult: function(authResult) {
        saveProfile(authResult);
        return false;
      },
      signInFailure: function(error) {
        console.log(error);
        setresMessage('Signin Failed');
      }
    }
  };

  const saveProfile = authResult => {
    console.log(authResult);
    setLoading(true);

    context.firebase
      .auth()
      .currentUser.getIdToken()
      .then(token => sendtokenToServer(token));

    const sendtokenToServer = token => {
      axios
        .post(`${process.env.GATSBY_SERVER_URL}/auth/sendtoken`, { token })
        .then(res => sendProfiletoContext(res.data))
        .catch(err => console.log(err));
    };

    const sendProfiletoContext = data => {
      let email = authResult.user.email;
      let username = authResult.user.displayName;
      let id = jwt_decode(data.token);
      let photo = authResult.user.photoURL;

      let user = {
        email,
        username,
        id,
        photo
      };

      context.saveUser(user);
      setTimeout(() => navigate('/app/profile'), 400);
    };
  };

  return (
    <div className={styles.form_container}>
      {isLoading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <h3>{resMessage}</h3>
      {isSignIn && (
        <>
          <LoginForm />
          <div className={styles.after_section}>
            <div>Dont have an Account? &nbsp;</div>
            <button className={styles.alt_button} onClick={() => setSignIn(false)}>
              SignUp
            </button>
          </div>
        </>
      )}
      {!isSignIn && (
        <>
          <SignUpForm />
          <div className={styles.after_section}>
            <div>Already have an Account? &nbsp;</div>
            <button className={styles.alt_button} onClick={() => setSignIn(true)}>
              Login
            </button>
          </div>
        </>
      )}
      {context.firebase && (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={context.firebase.auth()} />
      )}
    </div>
  );
};

export default Auth;
