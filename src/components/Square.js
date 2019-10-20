import React, {useState} from "react"
import _ from 'lodash'


const Square = ({value}) => {
const [val] = useState(value)


    const renderValue = () => {
        if(_.has(val,'new')) {
            return <div className="square new">{Object.values(val)[0]}</div> 
        }
        if(_.has(val,'newest')) {
            return <div className="square new">{Object.values(val)[0]}</div> 
        }
         return <div className="square">{Object.values(val)[0]}</div>
}
    return renderValue()
}

export default Square;