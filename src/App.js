import React, { useState } from 'react';
import LoginForm from './componeents/LoginForm';

import './App.css';

function App() {
  const admin={
    email: "test@test.com",
    password: "12345"
  }
  const[user, setUser]=useState({name: "", email: "", password: ""});
  const[error, setError]=useState("");
  const Login=details  => {
    console.log(details);
    if(details.email==admin.email && details.password==admin.password){
      console.log("Success!");
      setUser({
        name: details.name,
        email: details.email
      })
    }else{
      console.log("Error");
      setError("Error!");
    }
  }

  const Logout= ()  => {
    console.log("You logged out");
    setUser({name: "", email: ""});
  }

  return (
    <div className="app">
      {(user.email!="") ?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
  
}

export default App;
