import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../../../API/API';
import './Actors.scss'
import user from "../../../img/User.jpg"
import Slider from "react-slick"


const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoPlay:true,
    autoplaySpeed:200,
    cssEase: "linear",
    speed: 2000,
};
const Actors = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getActors();
    }, []);

    function getActors() {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                console.log(res.data);
                setActors(res.data.cast);
            })

    }



    return (
        <div id="actors">
            <div className="container">
                <h2>В главых ролях</h2>
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el) => (
                                <div  className="blocks">
                                    <div className="block">
                                       <Link to={`/actor-Detail/${el.id}`}>
                                           {
                                               el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`} width={180} alt="img" /> :
                                                   <img src={user} alt="img" width={180}/>

                                           }
                                       </Link>
                                        <h1>{el.name}</h1>
                                        <h3>{el.character}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;
