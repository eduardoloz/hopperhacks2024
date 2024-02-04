import Profile from './../components/profile.js';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DatingGrounds = () => {
    const [profile, setProfile] = useState('');
    const storedToken = localStorage.getItem('token');

    useEffect(() => {
        fetchUsers();
        console.log(profile);
	}, [])

	const fetchUsers = () => {
		axios.get('http://localhost:3001/matches', { headers: { 'token': storedToken } }).then((res) => {
            console.log(res.data.matches[0]);
            setProfile(res.data.matches[0])
        }) .catch((error) => {
            alert('Could not find matches')
        })
	}
    
    return(
        <div class="dating-container">
            {Profile(profile)}
        </div>
    )


};

export default DatingGrounds;