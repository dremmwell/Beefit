import board from '../styles/Board.module.css';
import NavBar from './NavBar';
import Ingredients from './Ingredients';
import Daily from './Daily';
import Recipes from './Recipes';
import Overview from './Overview';
import Objectives from './Objectives';
import { useState } from 'react';

function Board(){

    const [activeTab, setActiveTab] = useState("daily");

    const handleTab = (button) => {
        setActiveTab(button);
    }

    return(
        <div className={board.board}>
            <NavBar onButtonClick={handleTab}/>
            {activeTab === "daily" && <Daily/>}
            {activeTab === "ingredients" && <Ingredients/>}
            {activeTab === "recipes" && <Recipes/>}
            {activeTab === "objectives" && <Objectives/>}
            {activeTab === "overview" && <Overview/>}
        </div>
    )
}

export default Board