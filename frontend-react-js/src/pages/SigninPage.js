import './SigninPage.css';
import React from "react";
import {ReactComponent as Logo} from '../components/svg/logo.svg';
import { Link } from "react-router-dom";

// [TODO] Authenication
import { Auth } from 'aws-amplify';

export default function SigninPage() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState('');


  const onsubmit = async (event) => {
  event.preventDefault();
  setErrors('');

  try {
    // v6 sign-in uses named params
    const res = await signIn({ username: email, password });

    // Handle MFA / challenges if present
    if (res.nextStep && res.nextStep.signInStep !== 'DONE') {
      // e.g. CONFIRM_SIGN_IN_WITH_SMS_CODE, RESET_PASSWORD, CONTINUE_SIGN_IN_WITH_NEW_PASSWORD
      // route to your challenge UI here using res.nextStep
      return false;
    }

    // Get tokens after successful sign-in
    const { tokens } = await fetchAuthSession();
    if (tokens && tokens.accessToken) {
      localStorage.setItem('access_token', tokens.accessToken.toString());
    }

    window.location.href = '/';
  } catch (error) {
    if (error && error.name === 'UserNotConfirmedException') {
      window.location.href = '/confirm';
      return false;
    }
    setErrors((error && error.message) || String(error));
  }

  return false;
};

  const email_onchange = (event) => {
    setEmail(event.target.value);
  }
  const password_onchange = (event) => {
    setPassword(event.target.value);
  }

  let el_errors;
  if (errors){
    el_errors = <div className='errors'>{errors}</div>;
  }

  return (
    <article className="signin-article">
      <div className='signin-info'>
        <Logo className='logo' />
      </div>
      <div className='signin-wrapper'>
        <form 
          className='signin_form'
          onSubmit={onsubmit}
        >
          <h2>Sign into your Cruddur account</h2>
          <div className='fields'>
            <div className='field text_field username'>
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={email_onchange} 
              />
            </div>
            <div className='field text_field password'>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={password_onchange} 
              />
            </div>
          </div>
          {el_errors}
          <div className='submit'>
            <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
            <button type='submit'>Sign In</button>
          </div>

        </form>
        <div className="dont-have-an-account">
          <span>
            Don't have an account?
          </span>
          <Link to="/signup">Sign up!</Link>
        </div>
      </div>

    </article>
  );
}