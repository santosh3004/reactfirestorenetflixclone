
import './App.css';
import { useLayoutEffect,useState } from 'react';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
// import { login, logout,selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  // const user=useSelector((selectUser));
  // const dispatch=useDispatch();
  // console.log(user);
  const [user,setUser]=useState(null);
  

  useLayoutEffect(() => {
   auth.onAuthStateChanged(
       (userAuth)=>{
      if(userAuth){
        setUser({
          uid:userAuth.uid,
          email:userAuth.email
        });
        localStorage.setItem("user",user);
    //     dispatch(
    //       login({
    //       uid:userAuth.uid,
    //       email:userAuth.email,
    //     })
    //     );
      }else{
        // dispatch(logout());
        setUser(null);
      }
  });
    }, []);

  return (
    <div className="app">
      {!user ? (
          <LoginScreen setuser={setUser}/> 
        ) : (
      <Router>
        <Routes>
          <Route path='/profile' element={<ProfileScreen loggeduser={user} />}/>
          <Route exact path='/' element={<HomeScreen/>} />
        </Routes>
      </Router>)}
  
    </div>
  );
}

export default App;
