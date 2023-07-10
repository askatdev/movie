import React, {useEffect, useState} from 'react';
import './MovieSearch.scss'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/API";

const MovieSearch = () => {
    const [search,setSearch] = useState([])
    const {movieName} = useParams()

    function getSearch(){
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`)
            .then((res)=>{
                console.log(res.data.results)
                setSearch(res.data.results)
            })
    }

    useEffect(()=>{
        getSearch(API_KEY)
    },[])
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        search.map((el)=>(
                            <Link to={`/movie-detail/${el.id}`}>
                                <div className="block">
                                    <h1>{el.title}</h1>
                                    <h2>{el.release_date}</h2>

                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img"/>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieSearch;