import React, {useState} from 'react'
import 'antd/dist/antd.css';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ToursVariants from './components/tours/ToursVariants'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./components/aboutus/AboutUs";
import Contacts from "./components/contact/Contacts";

const App = () => {
    const [chosenTour, setChosenTour] = useState(0)

    return (
        <BrowserRouter>
            <div>
                <ToursVariants
                        chosenTour={chosenTour}
                        setChosenTour={setChosenTour}/>

            </div>
            {chosenTour!==0?<Header
                chosenTour={chosenTour}
                setChosenTour={setChosenTour}/>:null}
        </BrowserRouter>
    );
}

export default App;
