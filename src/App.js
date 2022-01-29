import React, {useState} from 'react'
import 'antd/dist/antd.css';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ToursVariants from './components/tours/ToursVariants'

const App = () => {
    const [chosenTour, setChosenTour] = useState(0)

    return (
        <>
            <Header
                chosenTour={chosenTour}
                setChosenTour={setChosenTour}/>
            <div>
                <ToursVariants
                    chosenTour={chosenTour}
                    setChosenTour={setChosenTour}/>
            </div>
        </>
    );
}

export default App;
