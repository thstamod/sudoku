import _ from 'lodash'
export default (possibleValuesArr)=> {
    let lessPos = [];
    let i =0
    while(lessPos.length === 0) {
     // eslint-disable-next-line no-loop-func
     lessPos = _.flatten(possibleValuesArr).filter((elem,index) => {
        return _.values(elem)[0].length < i
    })
    i++;
 }

return _.head(lessPos)
}