import Profile from './../components/profile.js';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DatingGrounds = () => {
    var profile;

    const storedToken = localStorage.getItem('token');
    axios.get('http://localhost:3001/matches', { headers: { 'token': storedToken } }).then((res) => {
        console.log(res.data.matches[0]);
        profile = res.data.matches[0];
        console.log(profile);
        var profileView = Profile(profile);
    
        return(
            <div class="dating-container">
                {profileView}
            </div>
        )
    }) .catch((error) => {
        alert('Could not find matches')
    })


};

export default DatingGrounds;