import React, {useEffect, useState} from 'react';
import './Treiler.scss'
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API/API";

const Treiler = ({id}) => {
    const [treiler,setTreiler] = useState([])
    const {movieId} = useParams()
     function getTreiler(){
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
            .then((res)=>{
                console.log(res.data.results)
                setTreiler(res.data.results)
            })
     }
     useEffect(()=>{
         getTreiler(API_KEY)
     },[])
    console.log(treiler)

    return (
        <div id="treiler">
            <div className="container">
                <div className="treiler">
                    {
                        treiler.map((el)=>(
                            <div className={"block"}>
                                <iframe width="300" height="230" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="Grits - My Life Be Like Remix (ft. Kendrick Lamar, 50 Cent, Eazy E, Eminem, 2Pac, Biggie, Dr. Dre)"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Treiler;