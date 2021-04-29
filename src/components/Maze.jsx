// import {Grid} from '@material-ui/core';
// import {v1 as uuidv1} from 'uuid';
// import EmptyCell, {NonEmptyCell, RatCell, CheeseCell} from "./EmptyCell";
import {answer, question} from "./question";
import EmptyCell, {CheeseCell, NonEmptyCell, RatCell} from "./EmptyCell";
import {v1 as uuidv1} from "uuid";
import {Grid} from "@material-ui/core";

function creatMaze(matix) {
    const mazeList = []
    for(let i = 0; i < 4; i++){
        const cellList = []
        for (let j = 0; j < 4; j++) {
            if(matix[i][j] === 1){
                if (i === 0 && j === 0) {
                    cellList.push(<RatCell key={uuidv1()} />)
                }
                else if (i === 3 && j === 3) {
                    cellList.push(<CheeseCell key={uuidv1()} />)
                }
                else if (i < 4) {
                    cellList.push(<EmptyCell key={uuidv1()}/>)
                }
            }
            else {
                cellList.push(<NonEmptyCell key={uuidv1()}/>)
            }
        }
        mazeList.push(<Grid key={uuidv1()} container item xs={12}>{cellList}</Grid>)
    }
    return (
        <div>
            {mazeList}
        </div>
    );
}

function Maze() {
    return <div>
        {creatMaze(question)}
        <br/>
        {creatMaze(answer)}
    </div>
}

export default Maze;