import TravelData from './Data/TravelData';
import React from 'react';
import Main from './Main';


function MainProps(){
    const items = TravelData.map((item) => {
        return <Main {...item} />
    }) 
    return (
        items
    )
}

export default MainProps;