import React, {useState, useEffect} from "react"
import Box from "./Box"
import possibleValues from '../logic/possibleValues'
import setSingleSulution from '../logic/setSingleSolution'
import singleBoxCandidate from '../logic/singleBoxCandidate'
 import _ from 'lodash'

const Board = ({init_values}) => {
    const boardvalues =init_values
    const [lboardvalues, setlboardvalues] = useState(init_values)
    let possibleValuesArr = [];



    const setSingleBoxCandidate = ()=> {
     _.forEach(possibleValuesArr,(b)=>{
         console.log(b)
        const tobechange =   singleBoxCandidate(b)
        const c= _.findKey(boardvalues,(o)=> {
            if(_.keys(o)[0] === _.keys(tobechange)[0])
              return _.keys(o)[0] === _.keys(tobechange)[0]
         })
         if(c) {
            boardvalues[c] = tobechange
            calculatePossibleValues()
         }
         else {
             console.log('set')
             setlboardvalues(boardvalues)
         }
        })    
    }


const calculatePossibleValues = () => {
    possibleValuesArr = []
    console.log('calculate')
    for(let r=0; r<81;r=r+27) {
        for(let box=r;box<9+r;box = box+3) {
            let _squares = []
            _squares.push(boardvalues[box],boardvalues[box+1],boardvalues[box+2],
                boardvalues[box+9],boardvalues[box+10],boardvalues[box+11],
                boardvalues[box+18],boardvalues[box+19],boardvalues[box+20])
                 possibleValuesArr.push(possibleValues(boardvalues,_squares))           
        }           
    }    
}


const ttt = ()=> {
    console.log('ttt')
    let tobechange = 1
    while(tobechange) {
     tobechange= setSingleSulution(possibleValuesArr)
    console.log(tobechange)
    if(tobechange){
    // eslint-disable-next-line no-loop-func
    const c= _.findKey(boardvalues,(o)=> {
        if(_.keys(o)[0] === _.keys(tobechange)[0])
       console.log(_.keys(o)[0])
          return _.keys(o)[0] === _.keys(tobechange)[0]
     })
     boardvalues[c] = tobechange
    calculatePossibleValues()
}
}
console.log(possibleValuesArr)
}

    useEffect(() => {
        calculatePossibleValues()
        ttt();
        setSingleBoxCandidate()
    
    })

    const renderBoxes = ()=> {
        console.log(lboardvalues)
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
