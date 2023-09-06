import navbar from '../styles/NavBar.module.css';
import { useState } from 'react';

function NavBar(props){

    const [activeTab, setActiveTab] = useState("daily");

    console.log(activeTab);

    return(
        <div className={navbar.container}>
            <div className={navbar.logoContainer}>
                Beefit
            </div>
            <div className={navbar.menues}>
                <ul>
                    <li onClick={ () => setActiveTab("daily")} className={navbar.daily}>Daily</li>
                    <li onClick={ () => setActiveTab("recipes")} className={navbar.recipes}>Recipes</li>
                    <li onClick={ () => setActiveTab("ingredients")} className={navbar.ingredients}>Ingredients</li>
                    <li onClick={ () => setActiveTab("objectives")} className={navbar.objectives}>Objectives</li>
                    <li onClick={ () => setActiveTab("overview")} className={navbar.overview}>Overview</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
