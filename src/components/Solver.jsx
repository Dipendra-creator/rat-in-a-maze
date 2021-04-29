
function isSafe(maze, x, y) {
    const length = maze.length;
    return x >= 0 && x < length && y >= 0 && y < length && maze[x][y] === 1;

}

function solveMazeUtil(maze, x, y, sol) {
    const length = maze.length;
    if (x === length - 1 && y === length - 1) {
        // Goal!
        // When it arrived at the bottom-right, return true.
        sol[x][y] = 1;
        return true;
    }
    if (isSafe(maze, x, y)) {
        sol[x][y] = 1;
        if (solveMazeUtil(maze, x + 1, y, sol)) return true;
        if (solveMazeUtil(maze, x, y + 1, sol)) return true;
        // If none of above movements work, then BACKTRACK: Unmark x, y as part of solution path.
        sol[x][y] = 0;
        return false;
    }
    return false;
}

function solveMaze(maze) {
    // const sol = new Array(maze.length).fill(new Array(maze.length).fill(0));  // It behaves wrong!
    const sol = new Array(maze.length);
    let idx;
    for (idx = 0; idx < maze.length; idx++) {
        sol[idx] = new Array(maze.length).fill(0);
    }
    return solveMazeUtil(maze, 0, 0, sol) ? {solved: true, solution: sol} : {solved: false, solution: sol};
}



export function Solver(list) {
    const res = solveMaze(list);
    console.log(res.solved);
    return res.solution;
}