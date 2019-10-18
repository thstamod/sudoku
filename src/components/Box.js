import React from "react"
import Square from "./Square"

const Box = ({box_values}) => {
    const renderSquares = () => {
        const _squares = []
        for(let i=0;i<9;i++) {
            _squares.push(<Square key={i} value={box_values[i]} className="square" />)
        }
        return _squares
    }
    return <div className="box">{renderSquares()}</div>
}

export default Box;