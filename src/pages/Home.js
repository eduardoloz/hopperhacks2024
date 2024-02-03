import "./../css/general.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div className="page">
                <div className="home">
                    <h1>❤ ❤ ❤ ~ Hopper Dreams ~ ❤ ❤ ❤</h1>
                    <div className="buttons">
                        <a href="https://www.example.com" role="button" class="button">Button Link 1</a>
                        <a href="https://www.example.com" role="button" class="button">Button Link 2</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
