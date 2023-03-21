import React, {useState} from 'react'
import Favorito from './Favorito'
import star from './imagens/star.png'
import starGold from './imagens/starGold.png'

export default function FavoritoProps(){
    const [fav, setFav] = useState(false);
    const starIcon = fav ? starGold : star

    function changeFav(){
        setFav(prevFav => !prevFav)
    }
    
    return (
        <Favorito 
            star = {starIcon}
            favorito = {changeFav}
        />

    )
}