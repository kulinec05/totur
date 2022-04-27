import React from 'react';
import {AppstoreFilled, FlagFilled, MessageFilled} from '@ant-design/icons'
import {Affix} from "antd";
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
            <Link className='header' to='/'>
                <div onClick={() => props.setChosenTour(0)}>

                    <AppstoreFilled className='header-main-button'
                    />
                </div>
            </Link>
    );
};

export default Header;