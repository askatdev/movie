
import './Header.scss'
import {Link, NavLink, useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import  logo from '../../img/logotip.png'
import {useContext, useState} from "react";
import movieSearch from "../MovieSearch/MovieSearch";
import LightModeIcon from '@mui/icons-material/LightMode';
import {LanguageContext} from "../../Context";


const Header = () => {
    const [value,setValue] = useState('')
    const navigate = useNavigate()
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const handleChange = () =>{
        navigate(`/movie-search/${value}`)
    }
    return (
        <div id="header">
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
                      <div className="header--block__dark">
                          <button onClick={()=> setDark(!dark)}><LightModeIcon/></button>
                      </div>
                      <input onChange={(el)=>{
                          setValue(el.target.value)
                      }} value={value} type="search"/>
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
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Header;