import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API/API";
import './ActorsMovie.scss'
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
};
const ActorsMovie = () => {
    const [actorMovie,setActorMovie] = useState([])
    const {personId} = useParams()

    function getActorsMovie() {
        axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                setActorMovie(res.data.cast)
            })
    }
        useEffect(()=>{
            getActorsMovie(API_KEY)
        },[])


    return (
        <div id="actorsMovie">
            <h2>Извесность за</h2>
            <div className="container">
                <div className="actorsMovie">
                        {
                            actorMovie.map(el =>(
                                <div className="block">
                                    <Link to={`/movie-detail/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} width={150} alt={"img"}/>
                                    </Link>
                                    <h2>{el.title}</h2>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default ActorsMovie;