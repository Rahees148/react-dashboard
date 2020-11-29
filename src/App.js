import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Cookies from 'js-cookie';
import ProtectedRoute from './ProtectedRoute';
import ProtectedLogin from './ProtectedLogin';

//AuthAPI
import AuthApi from './context/AuthApi';


//Local-Components
import Dashboard from './components/Dashboard';
import Login from './components/Login';


import './App.css';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const isLoggedIn = () => {
    const user = Cookies.get('user');
    if(user){
      setAuth(true);
      setUser(JSON.parse(user));
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthApi.Provider
      value={{
        auth, setAuth, user, setUser
      }}
    >
    <Router>
      <Switch>
        <ProtectedLogin exact path='/login' auth={auth}  component={Login}  />
        <ProtectedRoute exact path="/" auth={auth} loginRequired={true} component={Dashboard} />
      </Switch>
    </Router>
    </AuthApi.Provider>
  );
}

export default App;
