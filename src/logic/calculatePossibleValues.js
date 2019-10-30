import possibleValues from '../logic/possibleValues'

const calculatePossibleValues = (boardvalues) => {
   let possibleValuesArr = []
    for(let r=0; r<81;r=r+27) {
        for(let box=r;box<9+r;box = box+3) {
            let _squares = []
            _squares.push(boardvalues[box],boardvalues[box+1],boardvalues[box+2],
                boardvalues[box+9],boardvalues[box+10],boardvalues[box+11],
                boardvalues[box+18],boardvalues[box+19],boardvalues[box+20])
                 possibleValuesArr.push(possibleValues(boardvalues,_squares))           
        }           
    }   
    return possibleValuesArr 
}

export default calculatePossibleValues