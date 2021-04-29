function isSafe(maze, x, y) {
    const length = maze.length;
    return x < length && y < length && maze[x][y] === 1;
}

function solveMazeUtil(maze, x, y, sol) {
    const length = maze.length;
    if (x === length - 1 && y === length - 1) {
        sol[x][y] = 1;
        return true;
    }
    if (isSafe(maze, x, y)) {
        sol[x][y] = 1;
        if (solveMazeUtil(maze, x + 1, y, sol)) return true;
        if (solveMazeUtil(maze, x, y + 1, sol)) return true;
        sol[x][y] = 0;
        return false;
    }
    return false;
}

function solveMaze(maze) {
    const sol = new Array(maze.length);
    for (let l = 0; l < maze.length; l++) {
        sol[l] = new Array(maze.length).fill(0);
    }
    return solveMazeUtil(maze, 0, 0, sol) ? {solved: true, solution: sol} : {solved: false, solution: sol};
}



export function Solver(list) {
    const res = solveMaze(list);
    console.log(res.solved);
    return res.solution;
}

export function BoolSolve(list) {
    const res = solveMaze(list);
    return res.solved;
}