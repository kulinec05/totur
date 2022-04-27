import React from 'react';

//icons
import {Card} from "antd";
import {HeartOutlined, NodeIndexOutlined, PictureOutlined, ShopOutlined, TeamOutlined} from "@ant-design/icons";

const AboutUs = () => {
    return (<Card className="site-card-border-less-wrapper" classname='aboutus-card'>
        <div className='aboutus-title'>

            <h2>Нас выбирают для знакомства с Дагестаном за особое отношение и заботу о каждом
                госте!</h2>
            <div>Путешествия с нами останутся яркими, тёплыми воспоминаниями в вашей памяти и в лентах соцсетей. Мы
                продумываем маршруты и все составляющие тура так, чтоб каждому гостю было интересно, комфортно,
                вкусно!
                Наша главная идея - познакомить с Дагестаном так, чтобы вы полюбили его так же, как любим его мы!
            </div>
        </div>
        <span className='aboutus-box'>
            <div className='aboutus-box-item'>
<h1>

                <TeamOutlined className='aboutus-box-img'/>
</h1>
                <div>
                       <h2>Команда</h2>
                <div>Команда работает лично для вас. Забудьте про строго расписанный регламент тура: подстроимся под ваши конкретные пожелания</div>

                </div>
            </div>
            <div className='aboutus-box-item'>
<h1>

                <ShopOutlined className='aboutus-box-img'/>
</h1>
                <div>


                <h2>Кухня</h2>
                <div>Кормим всех с учетом ваших предпочтений. Кроме традиционной русской кухни вас ждут национальная дагестанская кухня. Вкусно будет даже в горном Дагестане, где нет ресторанов!</div>
            </div>
                </div>
            <div className='aboutus-box-item'>
<h1>

                <HeartOutlined className='aboutus-box-img'/>
</h1>
                <div>

                <h2>Забота и комфорт</h2>
                <div>Комфортные условия проживания, красивые отели, подготовленные и удобные для передвижения автомобили, где есть все необходимое. И конечно же, как говорят наши гости - забота. Забота во всем и каждую минуту!</div>
            </div>
                </div>

            <div className='aboutus-box-item'>
                <h1>

               <NodeIndexOutlined className='aboutus-box-img'/>
                </h1>
                <div>

                <h2>Гиды</h2>
                <div>Авторские туры. Каждый человек в нашей команде – коренной житель. Каждый знает этот легендарный край, как ковер на стене в далеком детстве. Поверьте, знаем каким Дагестаном вас удивить, поразить и даже шокировать!</div>
                </div>

            </div>
            <div className='aboutus-box-item'>

                {/*<img src={sea} className='aboutus-box-img'/>*/}
                <h1>

                <PictureOutlined className='aboutus-box-img'/>
</h1>

                <div>

                <h2>Все включено</h2>
                <div>Вам нужно только приехать/прилететь в аэропорт Уйташ, остальное наша забота! Проживание, питание, все передвижения на маршруте, все экскурсии, входы на достопримечательности уже включены в стоимость тура!</div>
                </div>

            </div>
        </span>
    </Card>);
};

export default AboutUs;