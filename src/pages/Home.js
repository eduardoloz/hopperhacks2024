import "./../css/general.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div className="page">
                <div className="home">
                    <h1>❤ ❤ ❤ ~ Hopper Dreams ~ ❤ ❤ ❤</h1>
                    <Link to="/register" className="button">Button Link 1</Link>
                    <Link to="/login" className="button">Button Link 2</Link>
                </div>
            </div>
        </div>

    )
}

export default Home;
