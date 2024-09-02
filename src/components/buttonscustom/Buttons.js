import React from 'react'
import './ButtonsStyle.css'
const ButtonMenu = (props) => {
    return (
        <button className="bg-transparent w-[97px] mr-3"><p className="TextBStyle"> {props.text} </p> </button>
    )
}
export default ButtonMenu