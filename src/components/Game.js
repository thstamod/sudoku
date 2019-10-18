import React from "react"
import Board from "./Borad"

const Game = () => {
    const init = [
                {a1:null},{a2:9},{a3:null},{a4:1},{a5:null},{a6:2},{a7:null},{a8:null},{a9:null},          
                {b1:7},{b2:null},{b3:null},{b4:null},{b5:6},{b6:null},{b7:1},{b8:null},{b9:null},
                {c1:4},{c2:null},{c3:null},{c4:null},{c5:null},{c6:3},{c7:null},{c8:null},{c9:null},
                {d1:3},{d2:null},{d3:6},{d4:null},{d5:9},{d6:null},{d7:8},{d8:null},{d9:null},
                {e1:null},{e2:null},{e3:null},{e4:null},{e5:null},{e6:null},{e7:null},{e8:2},{e9:4},
                {f1:null},{f2:null},{f3:null},{f4:null},{f5:2},{f6:1},{f7:9},{f8:null},{f9:5},
                {g1:null},{g2:null},{g3:null},{g4:null},{g5:null},{g6:null},{g7:null},{g8:3},{g9:7},
                {h1:6},{h2:null},{h3:null},{h4:7},{h5:null},{h6:null},{h7:null},{h8:null},{h9:null},
                {i1:null},{i2:8},{i3:null},{i4:null},{i5:null},{i6:null},{i7:null},{i8:null},{i9:null}
            ]
    return <div className="game"><Board className="board" init_values ={init}></Board></div>
}

export default Game;
