import React from 'react';
import './mystyle.css';


function App({name}) {
  return (
    <div>
      <p className="myName">Hello I am <strong>{name}</strong> and my age is {10+10+2}! </p>
      <h3> This is a Heading Element</h3>
      <ol>
        <li> Ordered List 1 </li>
        <li> Ordered List 2 </li>
        <li> Ordered List 3 </li>
      </ol>
      <ul>
        <li> Unordered List 1 </li>
        <li> Unordered List 2 </li>
        <li> Unordered List 3 </li>
      </ul>
      <span> This text is in Span Element </span>
    </div>
  )
}

export default App;
