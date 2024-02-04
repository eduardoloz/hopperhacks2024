import { useNavigate } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {
    const isUserSignedIn = !!localStorage.getItem('token');
    const navigate = useNavigate;

    const handleSignOut = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}

    return(
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/About-us">About</a>
        {isUserSignedIn && <a href="/date">Date!</a>}
        {isUserSignedIn && <a href="/login" class="right" onClick={handleSignOut}>Sign Out</a>}
        {isUserSignedIn && <a href="/settings" class="right">My Account</a>}
    </div>
    );
}

export default Navbar;
