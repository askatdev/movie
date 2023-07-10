import React, {useContext, useEffect, useState} from 'react';
import './Trende.scss'
import axios from "axios";
import {API_KEY} from "../../API/API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";
const Trende = () => {
    const [state, setTrende] = useState([])
    const {dark} = useContext(LanguageContext)
    function getTrende(key){
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
            .then((res)=>{
                console.log(res.data.results)
                setTrende(res.data.results)
            })
    }
    useEffect(()=>{
        getTrende(API_KEY)
    })


    return (
        <div id="trende" style={{
            background:dark? "black":"white"
        }}>
            <h1 style={{
                color:dark? "white":"black"
            }}>В тренде</h1>
            <div className="container">
                <div className="trende">
                    {
                        state.map((el)=>(

                            <Link to={`/movie-detail/${el.id}`}>
                                <div className="trende--blocks">
                                    <div className="trende--blocks__block" style={{
                                        color:dark? "white":"black",
                                        boxShadow:dark? "0 0 10px white inset":"0 0 10px black inset"
                                    }}>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} style={{borderRadius:'10px'}} alt="img"/>
                                        <h5>{el.title}</h5>
                                        <h3>{el.release_date}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trende;


