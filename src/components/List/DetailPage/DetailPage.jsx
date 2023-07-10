import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../../API/API";
import {useParams} from "react-router-dom";
import './DetailPage.scss'
import ListIcon from '@mui/icons-material/List';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import Actors from "../Actors/Actors";
import Treiler from "../Treiler/Treiler";


const DetailPage = () => {
    const [detail,setDetail] = useState({})
    const {movieId} = useParams()
    const [click,setClick] = useState(false)
    const [click1,setClick1] = useState(false)
    const [progressValue,setProgressValue] = useState(0)
    const progressEndValue = Math.round(detail.vote_average * 10)

    useEffect(()=>{
        let progerssStartValue = 0
        let progress = setInterval(
            ()=>{
             progerssStartValue++;
            setProgressValue(progerssStartValue)
            if (progerssStartValue === progressEndValue){
                clearInterval(progress)
            }
        }, 20)
        return(()=>{
            clearInterval(progress)
        })
    },[progressEndValue])
    const res = {
        background: `conic-gradient(#17c78f ${progressValue * 3.6}deg, #0f1b16 0deg)`
}
    function getDetail(){
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then((res)=>{
                console.log(res.data)
                setDetail(res.data)
            })
    }
    useEffect(()=>{
        getDetail(API_KEY)
    },[])
    console.log(detail)


    return (
        <>
        <div id="detail" style={{
            background:  `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}") no-repeat left/cover`,
            height:'100vh',
            objectFit:'cover'
        }}>
            <div className="container">
                <div className="detail">
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`} width={340} alt="img"/>
                    <div className="detail--block">
                        <h1>{detail.title}</h1>
                        <div className="detail--block__group" style={{display:'flex'}}>
                            <p>{detail.release_date}/</p>
                            <div>{detail.genres?.map(el => <p>{el.name},</p>)}</div>
                            <p>{Math.floor(detail.runtime / 60)}h {Math.floor(detail.runtime % 60)}m</p>
                        </div>
                            <div className="detail--block__reiting">
                                <div className="detail--block__reiting--krug" style={res}>
                                    <h5 className="detail--block__reiting--krug__h5">{progressValue}<sup>%</sup></h5>
                                </div>
                                <h3>Рейтинг</h3>
                                <div className="detail--block__reiting--krug__icon"><ListIcon/> </div>
                                <div className="detail--block__reiting--krug__icon" onClick={()=> setClick(!click)} style={{
                                    color : click ? "red" : ""
                                }}><FavoriteSharpIcon/> </div>
                                <div className="detail--block__reiting--krug__icon" onClick={()=> setClick1(!click1)} style={{
                                    color : click1 ? "#F3CD03" : ""
                                }}><BookmarkSharpIcon/></div>
                                <div className="detail--block__reiting--krug__icon"><StarRateSharpIcon/></div>
                            </div>
                        <div className="detail--block__info">
                            <h3>" {detail.tagline}"</h3>
                            <h1>Обзор</h1>
                            <h2>{detail.overview}</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
            <Actors/>
            <Treiler id={movieId}/>
        </>
    );
};

export default DetailPage;