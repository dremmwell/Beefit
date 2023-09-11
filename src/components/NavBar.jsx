import navbar from '../styles/NavBar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function NavBar({onButtonClick}){

    const handleClick = (button) => {
        setActiveTab(button);
        onButtonClick(button);

    };

    const [activeTab, setActiveTab] = useState("daily");

    return(
        <div className={navbar.container}>
            <div className={navbar.logoContainer}>
                Beefit
            </div>
            <div className={navbar.menues}>
                <ul>
                    <li 
                        onClick={ () => handleClick("daily")} 
                        className={activeTab === "daily" ? `${navbar.active} ${navbar.daily}` : navbar.daily}>Daily</li>
                    <li 
                        onClick={ () => handleClick("recipes")} 
                        className={activeTab === "recipes" ? `${navbar.active} ${navbar.recipes}` : navbar.recipes}>Recipes</li>
                    <li 
                        onClick={ () => handleClick("ingredients")} 
                        className={activeTab === "ingredients" ? `${navbar.active} ${navbar.ingredients}` : navbar.ingredients}>Ingredients</li>
                    <li 
                        onClick={ () => handleClick("objectives")} 
                        className={activeTab === "objectives" ? `${navbar.active} ${navbar.objectives}` : navbar.objectives}>Objectives</li>
                    <li 
                        onClick={ () => handleClick("overview")} 
                        className={activeTab === "overview" ? `${navbar.active} ${navbar.overview}` : navbar.overview}>Overview</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;

NavBar.propTypes={
    onButtonClick: PropTypes.func,
}