import React, { useState } from 'react';
import { useEffect } from 'react';



function Form() {

    const [meme, setMeme] = useState({
        textoSuperior: '',
        textoInferior:'',
        imagemAleatoria:'https://i.imgflip.com/9sw43.jpg'
    })
    const [allMemes, setAllMemes] = useState([])

    function gerarImagemMeme(){
        const indiceAleatorio = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[indiceAleatorio].url
        setMeme(value => {
            return {...value, imagemAleatoria: url}
        })
    }

    const imagem = meme.imagemAleatoria

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])


    return (
        <main>
            <div className="form">
                <input className="form-input" name='textoSuperior' onChange={handleChange} placeholder="Texto superior" type='text' />
                <input className="form-input" name='textoInferior' onChange={handleChange} placeholder="Texto inferior" type='text' />
                <button onClick={gerarImagemMeme} className="form-button" type="button"> Nova imagem de meme </button>
            </div>         
            <div className='meme-div'>
                {meme.textoSuperior && <span className='meme-img-text top' >{meme.textoSuperior}</span>} 
                <img className='meme-img' src={imagem} alt="HUE HUE HUE" />    
                {meme.textoInferior && <span className='meme-img-text bottom'>{meme.textoInferior}</span>}      
            </div> 
        </main>
    )
}

export default Form;

