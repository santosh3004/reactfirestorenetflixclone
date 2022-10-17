import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Nav';
import './ProfileScreen.css';
import { auth } from '../firebase';
import {signOut} from 'firebase/auth'
import { selectUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
function ProfileScreen() {
  const user=useSelector(selectUser);
  const history=useNavigate();
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen__body">
        <h1 className="">Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="" srcSet="" />
          <div className="profileScreen__details">
            <h2 className="">{user.email}</h2>
            <div className="profileScreen__plans">
              <button onClick={()=>{auth.signOut()}} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen