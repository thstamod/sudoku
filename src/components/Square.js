import React from "react"
import _ from 'lodash'


const Square = ({value}) => {
    const renderValue = () => {
        if(_.has(value,'new')) {
            return <div className="square new">{Object.values(value)[0]}</div> 
        }
        if(_.has(value,'newest')) {
            return <div className="square newest">{Object.values(value)[0]}</div> 
        }
         return <div className="square">{Object.values(value)[0]}</div>
}
    return renderValue()
}

export default Square;