import React, {useContext, useEffect, useState} from 'react';
import './Popular.scss'
import axios, {get} from "axios";
import {API_KEY} from "../../API/API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";

const Popular = () => {
const [state, setPopular] = useState([])
    const {dark} = useContext(LanguageContext)
    function getPopular(key){
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then((res)=>{
                setPopular(res.data.results)
            })
    }
    useEffect(()=>{
        getPopular(API_KEY)
    },[])

    return (
        <div id="popular" style={{
            background:dark ? "black" : "none"
        }}>
            <div className="container">
                <div className="popular">
                    {
                        state.map((el)=>(
                            <Link to={`/movie-detail/${el.id}`}>
                            <div className="block">
                                <h1>{el.title}</h1>
                                <h2>{el.release_date}</h2>

                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img" style={{
                                        borderBottomRightRadius:"10px",
                                        borderBottomLeftRadius:"10px",
                                    }}/>
                            </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;