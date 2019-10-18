import _ from 'lodash'

const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
export default (values, box)=> {
    let possible= [];
    let row = []
    let column = []
    // correspond to box
    const b = _.compact(box.map(o =>  _.values(o)[0]))
    box.forEach(sq => {
        if(!_.values(sq)[0]){
        const key = _.keys(sq)[0].split('')
       row = _.compact(fillArrays(values,key[0]))
       column = _.compact(fillArrays(values,key[1]))
        possible.push({[_.keys(sq)[0]]: _.difference([1,2,3,4,5,6,7,8,9], _.union(b,row,column))})
    }
    });
    return possible
}

const fillArrays = (values, key)=> {
    const arr = [];
    let  index = -1;
    if(!parseInt(key)) {
        index = _.indexOf(rows,key)
        for(let i=index*9;i<index*9+9;i++) {
            arr.push(_.values(values[i])[0])
        }
    }else {
        for(let i=parseInt(key)-1;i<81;i=i+9) {
            arr.push(_.values(values[i])[0])
        }
    }
    return arr
}