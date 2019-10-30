import calculatePossibleValues from './calculatePossibleValues'
import singleBoxCandidate from './singleBoxCandidate'
import singleSolution from './SingleSolution'
import init from '../data/initValues'
import _ from 'lodash'
let boardvalues = init
let possibleValuesArr = [];
possibleValuesArr = calculatePossibleValues(boardvalues)
console.log(possibleValuesArr)


const setSingleSolution = () => {


let tobechange = 1
while(tobechange) {
 tobechange= singleSolution(calculatePossibleValues(boardvalues))
if(tobechange){
// eslint-disable-next-line no-loop-func
const c= _.findKey(boardvalues,(o)=> {
    if(_.keys(o)[0] === _.keys(tobechange)[0])
      return _.keys(o)[0] === _.keys(tobechange)[0]
 })
 boardvalues[c] = tobechange
 possibleValuesArr = calculatePossibleValues(boardvalues) 

}
}
}

    const setSingleBoxCandidate = ()=> {
     _.forEach(possibleValuesArr,(b)=>{
        const tobechange = singleBoxCandidate(b)
        const c= _.findKey(boardvalues,(o)=> {
            if(_.keys(o)[0] === _.keys(tobechange)[0])
              return _.keys(o)[0] === _.keys(tobechange)[0]
         })
         if(c) {
            boardvalues[c] = tobechange 
            possibleValuesArr = calculatePossibleValues(boardvalues)         
         }
        })    
    }



    let prev = null
    while(!_.isEqual(boardvalues,prev)){
        prev = _.cloneDeep(boardvalues)
        setSingleSolution();
        setSingleBoxCandidate();
    }
    
   




export default boardvalues