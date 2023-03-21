import React, {useState} from "react";
import BoxesProps from "./BoxesProps";
import Boxes from './Data/Boxes'


export default function Box(){
    const [squares, setSquares] = useState(Boxes)

    function toggle(id){
        setSquares((prevSquares) => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square =>(
        <BoxesProps 
            id = {square.id}
            on = {square.on}
            toggle={() => toggle(square.id)}
        />
    ))

    return(
        <div>
            {squareElements}
        </div>
    )
}