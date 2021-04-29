import React from 'react';
import ReactDOM from 'react-dom';
import Maze from './components/Maze'

ReactDOM.render(
    <div>
        <div className="centered">
            <Maze />
        </div>
        <p className="centered" > Total Path = 0</p>
    </div>
    ,
  document.getElementById('root')
);
