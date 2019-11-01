import _ from 'lodash'
export default (possibleValuesArr)=> {
//     let lessPos = [];
//     let i =0
//     while(lessPos.length === 0) {
//      // eslint-disable-next-line no-loop-func
//      lessPos = _.flatten(possibleValuesArr).filter((elem,index) => {
//         return _.values(elem)[0].length < i
//     })
//     i++;
//  }

return  _.flatten(possibleValuesArr).sort(
    (a,b) => (_.values(a)[0].length > _.values(b)[0].length) ? 1 : ((_.values(b)[0].length > _.values(a)[0].length) ? -1 : 0));

//return _.head(lessPos)
}