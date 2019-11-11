import calculatePossibleValues from './calculatePossibleValues'
import singleBoxCandidate from './singleBoxCandidate'
import singleSolution from './SingleSolution'
import getCandidateWithLessPos from './getCandidateWithLessPos'
import gameSuccess from './gameSuccess'
import unsolvedPathGame from './unsolvedPathGame'
import init from '../data/initValues'
import _ from 'lodash'
//let boardvalues = _.cloneDeep(init)
let boardvalues = init
let possibleValuesArr = [];
let searchPaths = []; 
possibleValuesArr = calculatePossibleValues(boardvalues)



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


    const run = () => {
        
        let prev = null
        while(!_.isEqual(boardvalues,prev)){
            prev = _.cloneDeep(boardvalues)
            setSingleSolution();
            setSingleBoxCandidate();
        }
    }
    var t0 = performance.now();
   run();

const findKey = (elem) => {
    const c= _.findKey(boardvalues,(o)=> {
        if(_.keys(o)[0] === _.keys(elem)[0])
          return _.keys(o)[0] === _.keys(elem)[0]
     })
     return c
}

const search = ()=> {
   tryCandidates()
}

    const tryCandidates = () => {
        if(gameSuccess(boardvalues))  {return true} 
        let prev = _.cloneDeep(boardvalues);
        const repl = _.cloneDeep(possibleValuesArr)
        const tmp2 = getCandidateWithLessPos(repl) 
        for ( let elem of tmp2){
            if(gameSuccess(boardvalues)) {break} 
            // eslint-disable-next-line no-loop-func
            const tmp3 = _.values(elem)[0]
            for( let v of tmp3){
                if(gameSuccess(boardvalues)) {break}
                if(elem){
                        let r = _.cloneDeep(elem)
                        r[_.keys(elem)[0]] = v
                        r.last = true
                        boardvalues[findKey(elem)] = r
                        possibleValuesArr = calculatePossibleValues(boardvalues) 
                    }
                        run()
                        possibleValuesArr = calculatePossibleValues(boardvalues)
                        if(!gameSuccess(boardvalues)) {
                            if(!unsolvedPathGame(_.flatten(possibleValuesArr))){
                               tryCandidates()
                                   possibleValuesArr = calculatePossibleValues(boardvalues) 
                        }
                        }
                    if(unsolvedPathGame(_.flatten(possibleValuesArr))) {
                        searchPaths.push(_.cloneDeep(boardvalues))
                        boardvalues = _.cloneDeep(prev);
                        possibleValuesArr = calculatePossibleValues(boardvalues) 
                    }
                   
            }
            
         
        }
      
    }
   
search();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
   console.log('game solved',gameSuccess(boardvalues))


export default boardvalues