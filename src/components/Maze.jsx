import {Grid} from '@material-ui/core';
import {v1 as uuidv1} from 'uuid';
import EmptyCell, {NonEmptyCell, RatCell, CheeseCell} from "./EmptyCell";

function Maze() {
    const mazeList = []
    const BoolMazeList = []
    for (let i = 0; i < 4; i++) {
        const cellList = []
        const BoolCellList = []
        for (let j = 0; j < 4; j++) {
            if (i === 0 && j === 0) {
                cellList.push(<RatCell key={uuidv1()} />)
                BoolCellList.push(1)
            }
            else if (i === 3 && j === 3) {
                cellList.push(<CheeseCell key={uuidv1()} />)
                BoolCellList.push(1)
            }
            else if (i < 4) {
                if (j === Math.floor(Math.random()*4)) {
                    cellList.push(<NonEmptyCell key={uuidv1()} />)
                    BoolCellList.push(0)
                }
                else {
                    cellList.push(<EmptyCell key={uuidv1()}/>)
                    BoolCellList.push(1)
                }
            }
        }
        BoolMazeList.push({BoolCellList})
        mazeList.push(<Grid key={uuidv1()} container item xs={12}>{cellList}</Grid>)
    }

    return (
        <div>
            {mazeList}
            {console.log(BoolMazeList)}
        </div>

    );
}

export default Maze;