import React from "react";
import '../CSS/App.css';
import logo from '../Utility/Images/logo.png';



const Nav = (props) => {
    return(
        <div className='nav box'>
            <img src={logo} alt="Portfolio by: Max Houston" />
            <nav>
                <ul>
                    <li><button id="about-button" >About Me</button></li>
                    <li><button id="game-button" >Game Of War</button></li>
                    <li><button id="island-button" >Island Golf</button></li>
                    <li><button id="portfolio-button" >Portfolio Site</button></li>
                    <li><button id="more-button" >More Projects</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;