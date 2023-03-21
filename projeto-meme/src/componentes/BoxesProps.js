
import React from 'react'

export default function BoxesProps(props){
    const background = {
        backgroundColor: props.on ? "blue" : "transparent"
    }

    return(
        <div className='box'
         style={background}
          onClick={props.toggle}>

          </div>
    )
}