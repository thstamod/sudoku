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
   run();

const findKey = (elem) => {
    const c= _.findKey(boardvalues,(o)=> {
        if(_.keys(o)[0] === _.keys(elem)[0])
          return _.keys(o)[0] === _.keys(elem)[0]
     })
     return c
}

const search = ()=> {
   boardvalues = tryCandidates(_.cloneDeep(boardvalues),_.cloneDeep(possibleValuesArr))
   console.log(boardvalues)
}

    const tryCandidates = (boardvaluess,possibleValuesArrr) => {
        let prev = _.cloneDeep(boardvaluess);
    const repl = _.cloneDeep(possibleValuesArrr)
        if (gameSuccess(boardvaluess)) {
            console.log('game success')
            return
        }
        getCandidateWithLessPos(repl).some((elem) => {
            _.values(elem)[0].some(v => {
                if(elem){
                        let r = _.cloneDeep(elem)
                        r[_.keys(elem)[0]] = v
                        r.last = true
                        boardvaluess[findKey(elem)] = r
                        possibleValuesArrr = calculatePossibleValues(boardvaluess) 
                    }
                        run()
                        if(!gameSuccess(boardvaluess)) {
                            if(!unsolvedPathGame(_.flatten(possibleValuesArrr))){
                                let tmp = tryCandidates(_.cloneDeep(boardvaluess),_.cloneDeep(possibleValuesArrr))
                                if(tmp) {
                                    boardvaluess = tmp
                                    possibleValuesArrr = calculatePossibleValues(boardvaluess) 
                                    if(_.isEqual(boardvalues,prev)) {
                                        console.log('TEST')
                                    }
                                }
                               
                        }
                        }
                    if(unsolvedPathGame(_.flatten(possibleValuesArrr))) {
                        searchPaths.push(_.cloneDeep(boardvaluess))
                        boardvaluess = prev;
                        possibleValuesArrr = calculatePossibleValues(boardvaluess) 
                        return 0
                    }
                 return gameSuccess(boardvaluess)
            })
           return gameSuccess(boardvaluess)
        })
        return gameSuccess(boardvaluess)? boardvaluess : null
    }
   
search();

//console.log('searchPaths',searchPaths)
//console.log('possble values',possibleValuesArr)
//console.log('board',boardvalues)

   console.log('game solved',gameSuccess(boardvalues))
   console.log('game is unsolved',unsolvedPathGame(_.flatten(possibleValuesArr)))

export default boardvalues

