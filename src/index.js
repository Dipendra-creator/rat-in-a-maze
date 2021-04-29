import React from 'react';
import ReactDOM from 'react-dom';
import Maze from './components/Maze'
import {Found} from "./components/question";

ReactDOM.render(
    <div>
        <div className="centered">
            <Maze />
        </div>
        <p className="centered" >Path Found = {Found.toString()}</p>
    </div>
    ,
  document.getElementById('root')
);
