import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import me from "../images/logo.jpg";
import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from "@fortawesome/free-solid-svg-icons"

class Navbar extends React.Component{
    render(){
        return <div className='body-left'>
            <div className='body-left-img'>
                <img src={me} alt="user-img"/>
                <div className="effect">
                    <FontAwesomeIcon className="effect-icon" icon={faCode} />
                </div>
            </div>
            <div className='body-left-name'>
                <h2>İrem Çağın Yurttürk</h2>
                <p>Computer Engineering Student in Turkey</p>
            </div>
            <div className='body-left-nav'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
            <div className='body-left-copyright'>
                <p>© Copyright ©2022 All rigth reserved | This template is made with ♥ by <a id="github-link" href="https://github.com/iremcagin">İrem Çağın</a></p>
            </div>
            
        </div>;
    }
}

export default Navbar;