import React from 'react';
import {AppstoreFilled, FlagFilled, MessageFilled} from '@ant-design/icons'
import {Affix} from "antd";

const Header = (props) => {

    return (
        <Affix offsetTop={0}>
            <div className='header'>

                        <AppstoreFilled className='header-main-button'
                        onClick={()=>props.setChosenTour(0)}/>

            <span>

                        <FlagFilled className='header-main-button' />
                        <MessageFilled  className='header-main-button' />

            </span>
            </div>
        </Affix>
    );
};

export default Header;