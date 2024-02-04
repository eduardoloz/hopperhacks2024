import '../css/navbar.css'

const Navbar = () => {
    return(
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/About-us">About us</a>
        <a href="/date">Date!</a>
        <a href="/settings" class="right">My Account</a> 
    </div>
    );
}

export default Navbar;
