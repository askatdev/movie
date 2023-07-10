import React from 'react';
import './Home.scss'


const Home = () => {

    return (
        <div id="home">
            <div className="container">
                <div className="home">
                    <h1>Добро пожаловать.</h1>
                    <h2>Миллионы фильмов, сериалов и людей. <br /> Исследуйте сейчас.</h2>
                    <div className="home--btn">
                        <input type="text" placeholder="Найти фильм, сериал по персоне........" />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
