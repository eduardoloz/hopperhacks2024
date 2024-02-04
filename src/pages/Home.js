import "./../css/general.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="container-home">
            <div className="page">
                <div className="home">
                    <h1>❤ ❤ ❤ ~ Hopper Dreams ~ ❤ ❤ ❤</h1>
                    <div className="buttons">
                        <Link to="/register" className="button">Get Started!</Link>
                        <Link to="/login" className="button">Login</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
