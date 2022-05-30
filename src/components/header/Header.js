import React from 'react';
import {AppstoreFilled, FlagFilled, MessageFilled} from '@ant-design/icons'
import {Affix} from "antd";
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
            <div className='header' to='/'>
                <Link onClick={() => props.setChosenTour(0)} to='/'>

                    <AppstoreFilled className='header-main-button'
                    />
                </Link>
            </div>
    );
};

export default Header;