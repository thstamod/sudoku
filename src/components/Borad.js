import React, {useState, useEffect} from "react"
import Box from "./Box"
import calculatePossibleValues from '../logic/calculatePossibleValues'
import singleSolution from '../logic/setSingleSolution'
import singleBoxCandidate from '../logic/singleBoxCandidate'
 import _ from 'lodash'

const Board = ({init_values}) => {
    const boardvalues =init_values
    const [lboardvalues, setlboardvalues] = useState(init_values)
    let possibleValuesArr = [];



    const setSingleBoxCandidate = ()=> {
     _.forEach(possibleValuesArr,(b)=>{
        const tobechange =   singleBoxCandidate(b)
        const c= _.findKey(boardvalues,(o)=> {
            if(_.keys(o)[0] === _.keys(tobechange)[0])
              return _.keys(o)[0] === _.keys(tobechange)[0]
         })
         if(c) {
            boardvalues[c] = tobechange 
            possibleValuesArr = calculatePossibleValues(boardvalues)         
            setlboardvalues([...boardvalues])
         }
        })    
    }





const setSingleSolution = ()=> {
    let tobechange = 1
    while(tobechange) {
     tobechange= singleSolution(possibleValuesArr)
    if(tobechange){
    // eslint-disable-next-line no-loop-func
    const c= _.findKey(boardvalues,(o)=> {
        if(_.keys(o)[0] === _.keys(tobechange)[0])
          return _.keys(o)[0] === _.keys(tobechange)[0]
     })
     boardvalues[c] = tobechange
     possibleValuesArr = calculatePossibleValues(boardvalues) 
     setlboardvalues([...boardvalues])
}
}
}

    useEffect(() => {
        possibleValuesArr = calculatePossibleValues(boardvalues)
        setSingleSolution();
       // setSingleBoxCandidate()
    
    })

    const renderBoxes = ()=> {
        let _boxes = [];
        for(let r=0; r<81;r=r+27) {
            for(let box=r;box<9+r;box = box+3) {
                let _squares = []
                _squares.push(lboardvalues[box],lboardvalues[box+1],lboardvalues[box+2],
                    lboardvalues[box+9],lboardvalues[box+10],lboardvalues[box+11],
                    lboardvalues[box+18],lboardvalues[box+19],lboardvalues[box+20])
                     _boxes.push(<Box posible_values={null} key={box} box_values={_squares}/>)                
            }           
        }    
   
    return _boxes
    }

    return renderBoxes()
}

export default Board;
