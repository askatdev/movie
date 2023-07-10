import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../../API/API";
import './ActorDetail.scss'
import ActorsMovie from "./ActorsMovie";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ActorDetail = () => {
    const [actorDetail, setActorDetail] = useState({});
    const [showFullBiography, setShowFullBiography] = useState(false);
    const { personId } = useParams();

    function getActorDetail() {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                setActorDetail(res.data);
            });
    }

    useEffect(() => {
        getActorDetail(API_KEY);
    }, []);

    const toggleBiography = () => {
        setShowFullBiography(!showFullBiography);
    };

    const biography = actorDetail.biography || "";

    const shortenBiography = biography.slice(0, biography.length / 2);

    return (
        <div id="actorDetail">
            <div className="container">
                <div className="actorDetail">
                    <div className="actorDetail--img">
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorDetail.profile_path}`} width={360} alt="img" />
                        <div className="actorDetail--img__icon">
                            <a href="https://www.instagram.com/morganfreeman/"><InstagramIcon /></a>
                            <a href="#"><FacebookIcon /></a>
                        </div>
                    </div>
                    <div className="actorDetail--text">
                        <h1>{actorDetail.name}</h1>
                        <h2>Биография</h2>
                        <p>{showFullBiography ? biography : shortenBiography}</p>
                        {!showFullBiography && (
                            <button onClick={toggleBiography} style={{
                                fontWeight:'700px',
                                display:'flex',
                                alignItems:'center',
                                position:'absolute',
                                top:'98%',
                                left:"55%",
                                background:"transparent",
                                border:"none",
                                color:"blue"
                            }}>Читать дальше <ArrowForwardIosIcon/></button>
                        )}
                    </div>
                </div>
                <ActorsMovie />
            </div>
        </div>
    );
};

export default ActorDetail;
