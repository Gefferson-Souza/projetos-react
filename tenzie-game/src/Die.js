import React from "react";


export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? '#46e24e' : "#fff"
    }

    return(
        <div className='numeros-tenzie' style={styles} onClick={() => props.holdDie(props.id)}>{props.value}</div>
    )
}