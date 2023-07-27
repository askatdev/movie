import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../../API/API";
import './ActorDetail.scss'
import ActorsMovie from "./ActorsMovie";
import { useContext } from 'react';
import { LanguageContext } from '../../../Context';
import { buttonBaseClasses } from '@mui/material';

const ActorDetail = () => {
  const [actorDetail, setActorDetail] = useState({});
  const { personId } = useParams();
  const { dark } = useContext(LanguageContext);
  const { language } = useContext(LanguageContext);
  const [viewMore, setViewMore] = useState(200);
  const [prevViewMore, setPrevViewMore] = useState(200); // Добавлено новое состояние prevViewMore

  function getActorDetail() {
    axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=${language}`)
      .then((res) => {
        setActorDetail(res.data);
      });
  }

  const toggleMore = (text) => {
    if (viewMore === 200) {
      setPrevViewMore(viewMore); // Сохраняем предыдущее значение viewMore
      setViewMore(text.length);
    } else {
      setViewMore(prevViewMore); // Восстанавливаем предыдущее значение viewMore
    }
  }

  useEffect(() => {
    getActorDetail(API_KEY);
  }, [language]);

  return (
    <div id="actorDetail" style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }}>
      <div className="container">
        <div className="actorDetail">
          <div className="actorDetail--img">
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorDetail.profile_path}`} width={360} alt="img" />
          </div>
          <div className="actorDetail--text">
            <h1>{actorDetail.name}</h1>
            <h2>Биография
              <p>
                {
                  actorDetail.biography ? actorDetail.biography.slice(0, viewMore) : actorDetail.biography
                }
                <button onClick={() => {
                  toggleMore(actorDetail.biography)
                }}>{viewMore === 200 ? 'more' : 'close'}</button>
              </p>
            </h2>
          </div>
        </div>
        <ActorsMovie />
      </div>
    </div>
  );
};

export default ActorDetail;
