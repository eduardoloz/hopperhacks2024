import '../css/navbar.css'

const Navbar = () => {
    return(
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/date">Date!</a>
        <a href="#profile" class="right">My Account</a>
        <a href="/About-us" class="right">About Us</a>
    </div>
    );
}

export default Navbar;
