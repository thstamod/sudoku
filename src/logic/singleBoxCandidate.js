import _ from 'lodash'
export default (possibleValues) => {
    let test = []
    //console.log(possibleValues)
    _.forEach(possibleValues, (b) => {
        test.push(_.values(b))
        })
        const l = _.xor(..._.flatten(test))
       
        let t = null
        if(l.length === 1){
            t = l[0]
        }

            let key = null
            if(t) {

       key= _.find(possibleValues, (o) => {
            return _.values(o)[0].indexOf(t) > -1
        })

        key[_.keys(key)[0]] = t
        key.newest = true
        }
        return key
}