
import "./index.scss"
import {Link, NavLink, useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import  logo from '../../img/logotip.png'
import {useContext, useState} from "react";
import movieSearch from "../MovieSearch/MovieSearch";
import LightModeIcon from '@mui/icons-material/LightMode';
import {LanguageContext} from "../../Context";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Brightness4Icon from '@mui/icons-material/Brightness4';


const Header = () => {
    const [value,setValue] = useState('')
    const navigate = useNavigate()
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const {setLanguage} = useContext(LanguageContext)
    const [error,setError] = useState(false)

    const handleChange = () =>{
        navigate(`/movie-search/${value}`)
    }
    console.log(language);
    return (
        <div id="header" style={{
            background: dark ? "black"   : "rgba(8, 34, 80, 0.96)",
            boxShadow: dark ? "0 0 10px white": "none" ,
            color: dark ? "white": "black"
        }}>
           <div className="container">
               <div className="header">
                   <img src={logo} width={150} alt="img"/>
                   <div className="header--nav">
                      <NavLink to="/home" style={{textDecoration:"none"}}>
                          <h1>Home</h1>
                      </NavLink>
                       <NavLink to='/popular' style={{textDecoration:"none"}}>
                           <h1>Popular</h1>
                       </NavLink>
                       <NavLink to="/topRadet" style={{textDecoration:"none"}}>
                           <h1>TopRadet</h1>
                       </NavLink>
                   </div>
                  <div className="header--block">
                    <div className="header--block__select">
                        
                        <select onChange={(e)=>{setLanguage(e.target.value)}}>
                            <option value="en-US">English</option>
                            <option value="ru-RU">Русский</option>
                            <option value="fr-FR">France</option>
                        </select>
                    </div>
                      <div className="header--block__dark">
                          <button onClick={()=> setDark(!dark)}>
                            {
                                dark ? <LightModeIcon/> : <NightsStayIcon/>
                            }
                          </button>
                      </div>
                      <input onKeyDown={(el)=>{
                        if(el.key === "Enter"){
                            handleChange();
                            setValue("")
                            
                        } 
                      }} onChange={(el)=>{
                          setValue(el.target.value)
                      }} value={value} type="search" placeholder='Search film...'/>
                      <button onClick={()=>{
                          handleChange();
                          setValue("")
                      }} style={{
                          width:"50px",
                          height:"30px",
                          borderRadius:'10px',
                          border:"none",
                          color:"#fff",
                          background:"blue",
                          display:"flex",
                          alignItems:"center",
                          justifyContent:"center",
                          marginRight:"30px",
                          cursor:"pointer"
                      }}><SearchIcon/></button>
                      {error && <p>Фильм не найден</p>}
                      <select name="" id="">
                        Account
                        <option value="">Account</option>
                        <option value="">SignIn</option>
                        <option value="">Login</option>
                      </select>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Header;