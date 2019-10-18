import React, {useState} from "react"
import Box from "./Box"
import possibleValues from '../logic/possibleValues'
import setSingleSulution from '../logic/setSingleSolution'
 import _ from 'lodash'

const Board = ({init_values}) => {
    const [boardvalues, setboardvalues] = useState(init_values)
    const possibleValuesArr = [];
    const renderBoxes = ()=> {
        let _boxes = [];
        for(let r=0; r<81;r=r+27) {
            for(let box=r;box<9+r;box = box+3) {
                let _square = []
                _square.push(boardvalues[box],boardvalues[box+1],boardvalues[box+2],
                    boardvalues[box+9],boardvalues[box+10],boardvalues[box+11],
                    boardvalues[box+18],boardvalues[box+19],boardvalues[box+20])
                     _boxes.push(<Box posible_values={null} key={box} box_values={_square}/>)
                     possibleValuesArr.push(possibleValues(boardvalues,_square))
            }           
        }    
     let tobechange= setSingleSulution(possibleValuesArr)
     if(tobechange){
     const test= _.findKey(boardvalues,(o)=> {
           return _.keys(o)[0] === _.keys(tobechange)[0]
      })
      let _tmp = boardvalues
      _tmp[test] = tobechange
     setboardvalues(_tmp)
    }
        return _boxes
    }
    return renderBoxes()
}

export default Board;
