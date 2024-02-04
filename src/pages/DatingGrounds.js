import Profile from './../components/profile.js';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DatingGrounds = () => {
    const [count, setCount] = useState(1);

    const handleDisappear = () => {
        setCount(count + 1);
    };
    
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
            {Array.from({ length: count }, (_, i) => (
                <Profile key={i} onDisappear={handleDisappear} />
            ))}
        </div>
    )


};

export default DatingGrounds;