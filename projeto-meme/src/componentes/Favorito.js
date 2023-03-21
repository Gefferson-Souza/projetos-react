

export default function Favorito(props){
    return(
    <div>
        <img src={props.star} onClick={props.favorito} alt='star'/>
    </div>
    )
}