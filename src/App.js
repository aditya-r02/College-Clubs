import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Cards3 from "./Components/Cards3";
import Quote from "./Components/Quote";
import Footer from "./Components/Footer";
import Clubs from './Components/Clubs';
import Events from "./Components/Events";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


import HeroSection from "./Components/HeroSection";

function App() {

  // const clubs = useRef(null);
  // const footer = useRef(null);
  // const scrollToSection = (element)=>{
  //   window.scrollTo({
  //     top: element.current.offsetTop,
  //     behavior:'smooth',
  //   })
  // }

  return (
    <div className="w-screen max-w-full" id="popup-root" >
      <BrowserRouter>
        <Routes>


        </Routes>

        <NavBar ></NavBar>
        <div className="top-section">
        <HeroSection></HeroSection>
        <Quote/>
        </div>
        <Cards3></Cards3>
        <Events/>
        
        {/* <Carousel></Carousel> */}
        <Clubs ></Clubs>
        <Footer></Footer>
        

        

        







      </BrowserRouter>

    </div>
  );
}

export default App;
