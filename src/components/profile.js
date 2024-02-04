import './../css/profile.css'
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import React, { useState, useEffect } from 'react';
import { set } from 'mongoose';
import { use } from 'bcrypt/promises';

const Profile = (pfp) => {
  const [divs, setDivs] = useState([{id: 1, direction: null}]);

  const [visible, setVisible] = useState(true);

  const copyAndMove = (direction, id) => {
    setDivs(prevDivs => {
      const newDivs = [...prevDivs, {id: prevDivs.length + 1, direction: null}];
      setTimeout(() => setVisible(false), 2000); //why does this make children invisible bruh
      return newDivs.map(div => div.id === id ? {...div, direction} : div);
    });
  }

  return (
    <div className='profile-page'>
     
    {divs.map(div => (
      visible ?
      <div key={div.id} className={`profile-container ${div.direction}`}>
        
        <h1 className="profile-title">Name: {pfp.name}</h1>
        <img src="path/to/your-image.jpg" class="profile-image"></img>
        <div className="grid-container">
          <div className="grid-item">Age: {pfp.age}</div>
          <div className="grid-item">Gender: {pfp.gender}</div>
          <div className="grid-item">Major: {pfp.major}</div>
          <div className="grid-item">Dorm Hall: {pfp.locid}</div>
        </div>
        <div className="accept-reject">
          <div className='x' onClick={() => copyAndMove('left', div.id)}><FaX /></div>
          <div className='check' onClick={() => copyAndMove('right', div.id)}><FaCheck /></div>
        </div>
      </div>
      : <div></div>
    ))}
  </div>
  );
}

function copyAndMove(button, direction) {
  var div1 = button.parentNode;
  var div2 = div1.cloneNode(false);

  // Copy the content of div1 to div2
  div2.innerHTML = div1.innerHTML;

  // Insert div2 after div1
  div1.parentNode.insertBefore(div2, div1.nextSibling);

  // Move div1 off screen
  if (direction === 'left') {
      div1.classList.add("offscreen-left");
  } else if (direction === 'right') {
      div1.classList.add("offscreen-right");
  }

  // Delete div1 after a delay to ensure it's off screen first

  setTimeout(function() {
      div1.parentNode.removeChild(div1);
  }, 3000); // Match the delay to the transition duration
}

export default Profile;