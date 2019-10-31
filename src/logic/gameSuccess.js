import _ from 'lodash'


export default (boardvalues) => {
const emptySquare = _.find(boardvalues, o => {
    return _.values(o)[0] === null
})
    return emptySquare ? false : true
}