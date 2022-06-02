import React from 'react';
import {Link} from "react-router-dom"
import s from '../Header.module.css'
import {HOME} from "../../../constants/routes"
import logo from "../../../logo1.png"

const Logo = () => {
    return (
        <Link to={HOME.link}>
            <span>
                <img className={s.logo} src={logo} alt="logo"/>
            </span>
        </Link>
    );
};

export default Logo;