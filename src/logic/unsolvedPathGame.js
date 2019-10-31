import _ from 'lodash'


export default (possibleValuesArr) => {
const imposible = _.find(possibleValuesArr, o => {
    return _.values(o)[0].length === 0
})
    return imposible ? true : false
}