import calculatePossibleValues from './calculatePossibleValues'
import singleBoxCandidate from './singleBoxCandidate'
import singleSolution from './SingleSolution'
import getCandidateWithLessPos from './getCandidateWithLessPos'
import gameSuccess from './gameSuccess'
import unsolvedPathGame from './unsolvedPathGame'
import init from '../data/initValues'
import _ from 'lodash'
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
    tryCandidates()
  //  run()


}
let prev = _.cloneDeep(boardvalues);
    const tryCandidates = () => {
            const repl = _.cloneDeep(possibleValuesArr)
        if (gameSuccess(boardvalues)) {
            console.log('game success')
            return
        }
        getCandidateWithLessPos(repl).forEach((elem) => {
            debugger
            _.values(elem)[0].forEach(v => {
                debugger
                if(elem){
                    debugger
                        let r = _.cloneDeep(elem)
                        r[_.keys(elem)[0]] = v
                        r.last = true
                     boardvalues[findKey(elem)] = r
                 possibleValuesArr = calculatePossibleValues(boardvalues) 
                    }
                        run()

                        if(!gameSuccess(boardvalues) && !unsolvedPathGame(_.flatten(possibleValuesArr))) {
                            debugger
                            tryCandidates();
                        }

                    if(unsolvedPathGame(_.flatten(possibleValuesArr))) {
                        debugger
                        searchPaths.push(_.cloneDeep(boardvalues))
                        let r = _.cloneDeep(elem)
                        r[_.keys(elem)[0]] = null
                        boardvalues[findKey(elem)] = r
                        boardvalues = prev;
                        possibleValuesArr = calculatePossibleValues(boardvalues) 
                    }
                   
            })
        })
    }
   
search();

//console.log('searchPaths',searchPaths)
console.log('possble values',possibleValuesArr)

   console.log('game solved',gameSuccess(boardvalues))
   console.log('game is unsolved',unsolvedPathGame(_.flatten(possibleValuesArr)))

export default boardvalues