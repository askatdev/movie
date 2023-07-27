import React, {useContext, useEffect, useState} from 'react';
import './TopRadet.scss'
import axios from "axios";
import {API_KEY} from "../../API/API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../Context";


const TopRadet = () => {
const [state, setTopRadet] = useState([])
    const {dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const [next,setNext] = useState(1)


    function getPopular(key){
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${next}`)
            .then((res)=>{
                setTopRadet(res.data.results)
            })
    }
    useEffect(()=>{
        getPopular(API_KEY)
    },[language,next])

    const handleNext = () =>{
        setNext(next + 1)
    }
    const closeNext = () => {
        setNext(next -1)

    }
    return (
        <div id="topradet" style={{
            background:dark? "black":"white"
        }}>
            <div className="container">
                <div className="topradet">
                    {
                        state.map((el)=>(
                           <Link to={`/movie-detail/${el.id}`}>
                               <div className="topradet--block" style={{
                                boxShadow:dark ? "0 0 10px white":''
                            }}>
                                   <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                                   <h5>{el.title}</h5>
                                   <h4>{el.release_date}</h4>
                               </div>
                           </Link>
                        ))
                    }
                </div>

                <div className="btn" style={{display:"flex",justifyContent:"space-between",margin:'20px 0'}}>
                        <button style={{
                            display:next === 1 ? "none":"block ",
                            width:'100px',
                            height:"40px",
                            fontSize:"20px",
                            background:'red',
                            color:"white",
                            border:"none",
                            borderRadius:'10px'
                        }} onClick={closeNext}>Previous</button>
                        <button  style={{
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

export default TopRadet;






























// import React, { useState } from 'react';
// import SearchIcon from "@mui/icons-material/Search";
//
// function SearchBar() {
//     const [isInputVisible, setInputVisible] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//
//     const handleSearchIconClick = () => {
//         setInputVisible(true);
//     };
//
//     const handleSearch = () => {
//         // Perform search with searchQuery
//         console.log('Performing search:', searchQuery);
//         // Clear the search input and hide it
//         setSearchQuery('');
//         setInputVisible(false);
//     };
//
//     return (
//         <div className={"container"} style={{marginTop:"50px"}}>
//             {isInputVisible ? (
//                 <div style={{display:"flex",alignItems:"center"}}>
//                     <input style={{
//                         width:"250px",
//                         height:"30px",
//                         borderRadius:"10px",
//                         outline:"none",
//                         paddingLeft:"10px"
//                     }}
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         placeholder="Enter your search query"
//                     />
//                     <button style={{
//                         position:"absolute",
//                         left:"23%",
//                         background:"transparent",
//                         border:'none'
//                     }} onClick={handleSearch}><SearchIcon/></button>
//                 </div>
//             ) : (
//                 <button style={{
//                     background:"transparent",
//                     border:'none'
//                 }} onClick={handleSearchIconClick}><SearchIcon/></button>
//             )}
//         </div>
//     );
// }
//
// export default SearchBar;
