import LocalLogo from './Data/path2.png'
import React from 'react';



function Main(props){
    return(
        <div className="container">
            <img className="travel-img" src={props.imageUrl} alt="IMG" />
            <div className="travel-information">
                <div className="travel-location"><img src={LocalLogo} alt="logo"/> <span>{props.location.toUpperCase()}</span> <a className="google-maps-url" href={props.googleMapsLink}>Veja no Google Maps</a></div>          
                <h1 className='title'>{props.title}</h1>
                <span className="start-end-date">{props.startDate} - {props.endDate}</span>            
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}

export default Main;