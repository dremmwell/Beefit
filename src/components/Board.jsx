import board from '../styles/Board.module.css';
import NavBar from './NavBar';
import Content from './Content';

function Board(){

    return(
        <div className={board.board}>
            <NavBar/>
            <Content />
        </div>
    )
}

export default Board