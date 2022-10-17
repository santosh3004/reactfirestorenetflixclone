
import './App.css';
import { useEffect } from 'react';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout,selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged(
       (userAuth)=>{
      if(userAuth){
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
        })
        );
      }else{
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
          <LoginScreen/> 
        ) : (
      <Router>
        <Routes>
          <Route path='/profile' element={<ProfileScreen/>}/>
          <Route exact path='/' element={<HomeScreen/>} />
        </Routes>
      </Router>)}
  
    </div>
  );
}

export default App;
