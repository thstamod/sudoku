import React from "react"
import Board from "./Borad"
import init from '../data/initValues'

const Game = () => {

    return <div className="game"><Board className="board" init_values ={init}></Board></div>
}

export default Game;
