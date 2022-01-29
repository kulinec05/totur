import React from 'react';
import {Card} from "antd";
import {InstagramOutlined, PhoneOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";

const Footer = (props) => {

    const chosenTour = props.chosenTour
    const setChosenTour = props.setChosenTour



    return (
        <>
            <Card
                className={chosenTour === 0 ? 'footer' : 'footer-active'}
                hoverable
            >
                <h1 className='card-image'>Наши контакты</h1>

                <h1 style={{display: 'flex', gap: '10px'}}>
                    <a href='https://wa.me/79298786271?text=Здраствуйте!%20Я%20по%20поводу%20тура' target='_blank'>
                        <WhatsAppOutlined/>
                    </a>
                    <a>
                        <InstagramOutlined/>

                    </a>
                    <a>
                        <PhoneOutlined/>

                    </a>
                </h1>

                <div className={chosenTour ===0 ?'footer-number-email':'footer-number-email footer-number-email-active'}>
                    <div className={chosenTour ===0 ?'footer-number':'footer-number footer-number-active'}>
                        <div>
                            <a href='tel:+79298786271'>
                                +79298786271
                            </a>

                        </div>
                        <div>

                            <a href='mailto:kulinec05@gmail.com'>
                                kulinec05@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </Card>

        </>
    );
};

export default Footer;