import '../css/navbar.css'

const Navbar = () => {
    return(
    <div class="navbar">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="/date">Date!</a>
        <a href="#profile">Profile</a>
        <a href="#login" class="right">About Us</a>
    </div>
    );
}

export default Navbar;
