import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./hello"

function App({name , age}) {
  return (
    <div>
      Hello from App.Js by {name} and my age is {age}
      <br/>
      <Hello firstname={name}/>
    </div>
  )
}

export default App;
