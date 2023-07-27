import React, {useContext, useEffect, useState} from 'react';
import './MovieSearch.scss'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/API";
import { LanguageContext } from '../../Context';

const MovieSearch = () => {
    const [search,setSearch] = useState([])
    const {movieName} = useParams()
    const{dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)

    function getSearch(){
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${movieName}`)
            .then((res)=>{
                setSearch(res.data.results)
            })
    }

    useEffect(()=>{
        getSearch(API_KEY)
    })
    return (
        <div id="popular" style={{
            background:dark ? "black": "white"
        }}>
            <div className="container">
                <div className="popular">
                   {
                      search.length ?   search.map((el)=>(
                                <Link to={`/movie-detail/${el.id}`}>
                                    <div className="block">
                                        <h1>{el.title}</h1>
                                        <h2>{el.release_date}</h2>
    
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img"/>
                                    </div>
                                </Link>
                            )) : <h1 style={{
                                margin:"40%",
                                color: dark ? "white":"black"
                            }}>"Not Found"</h1>
                        }
                </div>
            </div>
        </div>
    );
};

export default MovieSearch;