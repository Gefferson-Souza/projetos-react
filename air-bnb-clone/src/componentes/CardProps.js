import React from "react";
import CardForma from "./CardForma";
import CardsData from "../componentes/Cards/CardsData";


function CardsProps() {
    const dadosDosCards = CardsData.map((item) => {
        return <CardForma 
        key = {item.id}
        {...item}
                />
    })
    return(
        dadosDosCards
    )


}

export default CardsProps;
