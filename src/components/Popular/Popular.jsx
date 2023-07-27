import React, {useContext, useEffect, useState} from 'react';
import './Popular.scss'
import axios, {get} from "axios";
import {API_KEY} from "../../API/API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";

const Popular = () => {
const [state, setPopular] = useState([])
    const {dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const [next,setNext] = useState(1)
    function getPopular(key){
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${next}`)
            .then((res)=>{
                setPopular(res.data.results)
                console.log(res.data)
            })
    }
    useEffect(()=>{
        getPopular(API_KEY)
    },[language,next])

    const handleNext = () => {
        setNext(next + 1)
    }

    const CloseNext = () =>{
        setNext(next - 1)
    }
    return (
        <div id="popular" style={{
            background:dark ? "black" : "none"
        }}>
            <div className="container">
                <div className="popular">
                    {
                        state.map((el)=>(
                            <Link to={`/movie-detail/${el.id}`}>
                            <div className="block" style={{
                                boxShadow:dark ? "0 0 10px white":''
                            }}>
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
                <div className="popular--btn" style={{display:'flex',justifyContent:'space-between',margin:"10px 0"}}>
                    <button style={{
                        display:next === 1? "none":"block",
                        width:'100px',
                        height:"40px",
                        fontSize:"20px",
                        background:'red',
                        color:"white",
                        border:"none",
                        borderRadius:'10px',
                    }} onClick={CloseNext}>Previous</button>
                 <button style={{
                     width:'100px',
                     height:"40px",
                     fontSize:"20px",
                     background:'green',
                     color:"white",
                     border:"none",
                     borderRadius:'10px',
                 }} onClick={handleNext}>Next</button>
                    </div>
            </div>
        </div>
    );
};

export default Popular;