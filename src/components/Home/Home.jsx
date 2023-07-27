import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';
import { API_KEY } from '../../API/API';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [value,setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = () =>{
        navigate(`/movie-search/${value}`)
    }

    useEffect(() => {
        const fetchRandomBackground = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
                );

                const randomMovieIndex = Math.floor(Math.random() * response.data.results.length);
                const randomMovie = response.data.results[randomMovieIndex];

                setBackgroundImage(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRandomBackground();
    }, []);

    return (
        <div id="home" style={{ backgroundImage: `url(${backgroundImage})`,objectFit:"cover",minHeight:"66.5vh",backdropFilter:"blur(1px)" }}>
            <div className="container">
                <div className="home">
                <div className="home--blur-overlay"></div>
                    <h1>Добро пожаловать.</h1>
                    <h2>Миллионы фильмов, сериалов и людей. <br /> Исследуйте сейчас.</h2>

                    <div className="home--btn">
                        <input onKeyDown={(el)=>{
                            if(el.key === "Enter"){
                                handleChange();
                                setValue("")
                            }
                        }} onChange={(el)=>{
                            setValue(el.target.value)
                        }} value={value} type="text" placeholder="Найти фильм, сериал по персоне........" />
                        <button onClick={()=>{
                            handleChange();
                            setValue("")
                        }} style={{cursor:"pointer"}}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
