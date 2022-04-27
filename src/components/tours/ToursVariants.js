import React, {useEffect, useState} from 'react';
import {Card} from "antd";
import TourInfo from "../../store/TourInfo";
import AboutTours from "./AboutTours";
import OrderForm from "./OrderForm";
import Footer from "../footer/Footer";
import AboutUs from "../aboutus/AboutUs";
import TextTransition, {presets} from "react-text-transition";
import {Link, Route, useLocation} from "react-router-dom";





const ToursVariants = (props) => {
    const chosenTour = props.chosenTour
    const setChosenTour = props.setChosenTour
    const [index, setIndex] = useState(0)
    let location = useLocation();

    useEffect(()=>{
        if(location.pathname==='/'){
            setChosenTour(0)
        }
        else if (location.pathname==='/aboutus'){
            setChosenTour(location.pathname.replace(['/'],''))
            console.log(location.pathname.replace(['/'],''))
        }
        else if(location.pathname!=='/'){
            setChosenTour(parseInt( location.pathname.replace(['/'],'')))
            console.log(location.pathname.replace(['/'],''))
        }


    },[location])
    useEffect(()=>{
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            4000 // every 4 seconds
        );
        return () => clearTimeout(intervalId);
    },[])

    const TEXTS = [
        "«Лучше гор могут быть только горы, на которых еще не бывал.»" +
        "\n© Владимир Высоцкий",
        "«Горы не стадионы, где я удовлетворяю свои амбиции, они – храмы, где я исповедую мою религию.»  " +
        "\n© Анатолий Букреев",
        "Горы нужно заслужить — море же дарит себя безвозмездно." +
        "\n© П. Дзаннонер",
        "Горы зовут тех, чья душа им по росту! " +
        "\n© В.Л. Белиловский"
    ];

    let className = 'tour-look'
    if (chosenTour === 0) {
        className = 'tour-look'
    } else {
        className = 'tour-look n-active'
    }

    return (<>
            <div className={chosenTour === 0 ? 'tours-list' : 'tours-list tours-list-active'}>
                {chosenTour===0 || chosenTour==='aboutus'?<Link to='/aboutus'>
                    <Card
                        hoverable
                        className={chosenTour === 0 ? className : 'tour-look-active'}
                        style={{backgroundImage: 'linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))'}}
                        onClick={() => setChosenTour('aboutus')}
                    >
                        { chosenTour!=='aboutus'?
                        <h1 className='card-image'>O нас</h1>:<div className='aboutus-header'>
                                <h2 className ={chosenTour!==0? 'card-text':null}>Комфортные туры по Дагестану</h2>
                                <h6 className='aboutus-header-text'>
                                    <TextTransition
                                    text={ TEXTS[index % TEXTS.length] }
                                    springConfig={ presets.wobbly }
                                />
                                </h6>
                            </div>}
                    </Card>
                </Link>:null
                }                {Object.values(TourInfo).map((value, index) => {
                        return <Link key={value.id} to={`/${index+1}`}>
                            <Card
                                hoverable
                                style={{backgroundImage: `url(${value.mainImg})`}}
                                className={chosenTour !== value.id ? className : 'tour-look-active'}
                                onClick={() => setChosenTour(value.id)}
                            >
                                <h1  className ={chosenTour!==0? 'card-text':null}>{value.name}</h1>
                                <h3>{value.duration}</h3>
                            </Card>

                        </Link>
                    }
                )}
                {chosenTour !== 0 ? chosenTour === 'aboutus'?<AboutUs/>: <>
                    <AboutTours value={TourInfo[chosenTour]}/>
                <OrderForm value={TourInfo[chosenTour]}/></> : null}
                <Footer chosenTour={chosenTour}
                        setChosenTour={setChosenTour}/>
            </div>
        </>
    );
};

export default ToursVariants;