
import './App.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import TopRadet from "./components/TopRadet/TopRadet";
import Trende from "./components/Trende/Trende";
import Pages from "./components/Pages/Pages";
import DetailPage from "./components/List/DetailPage/DetailPage";
import ActorDetail from "./components/List/ActorDetail/ActorDetail";
import MovieSearch from "./components/MovieSearch/MovieSearch";




function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
            <Route path="/home" element={<Pages/>}/>
            <Route path="/popular" element={<Popular/>} />
            <Route path="/topRadet" element={<TopRadet/>} />
            <Route path="/movie-detail/:movieId" element={<DetailPage/>}/>
            <Route path='/actor-Detail/:personId' element={<ActorDetail/>}/>
            <Route path='/movie-search/:movieName' element={<MovieSearch/>}/>
        </Routes>
    </div>
  );
}

export default App;
