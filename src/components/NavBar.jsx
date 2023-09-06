import navbar from '../styles/NavBar.module.css';

function NavBar(){

    return(
        <div className={navbar.container}>
            <div className={navbar.logoContainer}>
                Beefit
            </div>
            <div className={navbar.menues}>
                <ul>
                    <li className={navbar.daily}>Daily</li>
                    <li className={navbar.recipes}>Recipes</li>
                    <li className={navbar.ingredients}>Ingredients</li>
                    <li className={navbar.objectives}>Objectives</li>
                    <li className={navbar.overview}>Overview</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar