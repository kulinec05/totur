import React from 'react';
import {Card} from "antd";
import TourInfo from "../../store/TourInfo";
import AboutTours from "./AboutTours";
import OrderForm from "./OrderForm";
import Footer from "../footer/Footer";





const ToursVariants = (props) => {
    const chosenTour = props.chosenTour
    const setChosenTour = props.setChosenTour

    let className = 'tour-look'
    if (chosenTour === 0) {
        className = 'tour-look'
    } else {
        className = 'tour-look n-active'
    }

    return (<>
            <div className={chosenTour === 0 ? 'tours-list' : 'tours-list tours-list-active'}>
                {Object.values(TourInfo).map(value => {

                        return <div key={value.id}>
                            <Card
                                hoverable
                                style={{backgroundImage: `url(${value.mainImg})`}}
                                className={chosenTour !== value.id ? className : 'tour-look-active'}
                                onClick={() => setChosenTour(value.id)}
                            >
                                <h1 className='card-image'>{value.name}</h1>
                                <h3>{value.duration}</h3>
                            </Card>

                        </div>
                    }
                )}
                {chosenTour !== 0 ? <>
                    <AboutTours value={TourInfo[chosenTour]}/>
                <OrderForm value={TourInfo[chosenTour]}/></> : null}
                <Footer chosenTour={chosenTour}
                        setChosenTour={setChosenTour}/>
            </div>
        </>
    );
};

export default ToursVariants;