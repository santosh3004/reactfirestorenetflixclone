import React, { useState } from 'react'
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

function LoginScreen(props) {
  const [signIn,setSignIn]=useState(false);
  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img className='loginScreen__logo' src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" srcSet="" />
        <button className='loginScreen__button'
        onClick={()=>setSignIn(true)}
        >Sign In</button>

        <div className="loginScreen__gradient"></div>      
        </div>
   
    <div className="loginScreen__body">
      {signIn?(<SignupScreen setuser={props.setuser}/>
      ):(<>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership</h3>
      <div className="loginScreen__input">
        <form>
          <input type="email" placeholder='Email Address'/>
          <button onClick={()=>setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
        </form>
      </div>
    </>)
      }
    
    </div>
    </div>
  );
}

export default LoginScreen