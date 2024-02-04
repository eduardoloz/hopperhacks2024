import '../css/navbar.css'

const Navbar = () => {
    const isUserSignedIn = !!localStorage.getItem('token');
    return(
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/About-us">About</a>
        {isUserSignedIn && <a href="/date">Date!</a>}
        {isUserSignedIn && <a href="/signout" class="right">Sign Out</a>}
        {isUserSignedIn && <a href="/settings" class="right">My Account</a>}
    </div>
    );
}

export default Navbar;
