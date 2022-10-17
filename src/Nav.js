import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './Nav.css';

function Nav() {

  const [show, handleShow]=useState(false);
  const history=useNavigate();

  const transitionNavBar=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return ()=>window.removeEventListener("scroll",transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className='nav__contents'>
      <img onClick={()=>history('/')} className='nav__logo' src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png"  alt=""/>
      <img onClick={()=>history('/profile')} className='nav__avatar' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"  alt=""/>
    </div>
    
    </div>
  )
}

export default Nav