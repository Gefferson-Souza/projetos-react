import React from "react";
import star from './imagens/star.png';


function CardForma(props) {
    let badgeText;
    if (props.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if (props.location === "Online"){
        badgeText = "ONLINE";
    }
    return (
            <div className="card-div">
                {badgeText && <div className="card-sold">{badgeText}</div>}
                <img className='cards-image' src={props.img} alt='IMG' />
                <p><img src={star} alt='icon' />{props.stats.rating} ({props.stats.reviewCount}) {props.location}</p>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
    )
}

export default CardForma;
