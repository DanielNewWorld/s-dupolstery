import './App.css';
import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Carpet from './components/Services/Carpet/Carpet';
import MarineUpholstery from './components/Services/MarineUpholstery/MarineUpholstery';
import Contact from './components/Contact/Contact';
import FooterContainer from './components/Footer/FooterContainer';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageSliderContainer from './components/ImageSlider/ImageSliderContainer';
import UsersContainer from "./components/Users/UserContainer";
import Greetings from "./components/Greetings/Greetings";
import Clock from "./components/Greetings/Clock";
import Login from "./components/Login/Login";

function App() {

  return (
    <BrowserRouter>
      <div className='gridApp' id="home">
        <HeaderContainer />
        <div className='services' id='services'>
          <ImageSliderContainer />
        </div>
        <AboutUs />
        <Contact />
        <FooterContainer />
        <Login />
        <UsersContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Routes>
//<Route path='/marineupholstery' render={() => <MarineUpholstery/>} />
//<Route path='/carpet' element={<Carpet/>} />
//</Routes>

//<MarineUpholstery data={props.state.homeServicesPage}/>    
//<ImageSlider data={props.state.homeServicesPage} dispatch={props.dispatch} />