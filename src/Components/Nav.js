import React, { useEffect } from "react";
import '../CSS/App.css';
import logo from '../Utility/Images/logo.png';



const Nav = (props) => {

    
    const renderNav = () => {
        let nav = props.mainArticles.map( 
            article => <li key={article.value}><button id={article.value} onClick={handleClick} value={article.value} >{article.name}</button></li>
        )
        return nav;
    }

    const handleClick = ({target}) => {
        props.handleProjectChange(target.value);
    }

     useEffect(()=>{
         let id = props.project.section === 'more' ? 'more' : props.project.value;
         let selected = document.getElementById(id);
         if(!selected){return}
         selected.style.textDecoration = 'underline #4266a1';
         return ()=>{
             selected.style.textDecoration = 'none';
         }
     })

    return(
        <div className='nav box'>
            <img src={logo} alt="Portfolio by: Max Houston" />
            <nav>
                <ul>
                    {renderNav()}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
