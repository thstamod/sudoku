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



   const candidates = getCandidateWithLessPos(possibleValuesArr)
    //console.log(candidates)
    candidates.forEach((elem) => {
        _.values(elem)[0].forEach(v => {

            const c= _.findKey(boardvalues,(o)=> {
                if(_.keys(o)[0] === _.keys(elem)[0])
                  return _.keys(o)[0] === _.keys(elem)[0]
             })
            if(elem){
                    let r = _.create(elem)
                    r[_.keys(elem)[0]] = v
                    r.last = true
                 console.log(r)
                 boardvalues[c] = r
             possibleValuesArr = calculatePossibleValues(boardvalues) 
                run()
                }
                if(unsolvedPathGame(_.flatten(possibleValuesArr))) {
                    let r = _.create(elem)
                    r[_.keys(elem)[0]] = null
                    boardvalues[c] = r
                    possibleValuesArr = calculatePossibleValues(boardvalues) 
                }
               
        })
    })

   console.log('game solved',gameSuccess(boardvalues))
   console.log('game is unsolved',unsolvedPathGame(_.flatten(possibleValuesArr)))

export default boardvalues