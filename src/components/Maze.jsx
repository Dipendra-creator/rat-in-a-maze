import {Grid} from '@material-ui/core'
import EmptyCell, {NonEmptyCell, RatCell, CheeseCell} from "./EmptyCell";

function Maze() {
    const mazeList = []
    const BoolMazeList = []
    for (let i = 0; i < 4; i++) {
        const cellList = []
        const BoolCellList = []
        for (let j = 0; j < 4; j++) {
            if (i === 0 && j === 0) {
                cellList.push(<RatCell />)
                BoolCellList.push(1)
            }
            else if (i === 1) {
                if (j < Math.floor(Math.random()*5)) {
                    cellList.push(<NonEmptyCell />)
                    BoolCellList.push(0)
                }
                else {
                    cellList.push(<EmptyCell/>)
                    BoolCellList.push(1)
                }
            }
            else if ( i === Math.floor(Math.random()*3)) {
                cellList.push(<NonEmptyCell />)
                BoolCellList.push(0)
            }
            else if (i === 3 && j === 3) {
                cellList.push(<CheeseCell />)
                BoolCellList.push(1)
            }
            else {
                cellList.push(<EmptyCell/>)
                BoolCellList.push(1)
            }
        }
        BoolMazeList.push({BoolCellList})
        mazeList.push(<Grid container item xs={12}>{cellList}</Grid>)
    }

    return (
        <div>
            {mazeList}
            {console.log(BoolMazeList)}
        </div>

    );
}

export default Maze;