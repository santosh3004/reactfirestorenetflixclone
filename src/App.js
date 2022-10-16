
import './App.css';
import { useEffect } from 'react';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {
  const user=null;
  const dispatch=useDispatch();

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({uid:userAuth.uid,
          email:userAuth.email}))
      }else{
        dispatch(logout);
      }
    })
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user? (
          <LoginScreen/>
        ):(
        <Routes>
          <Route exact path='/' element={<HomeScreen/>}/>
        </Routes>)}
      </Router>
    </div>
  );
}

export default App;
