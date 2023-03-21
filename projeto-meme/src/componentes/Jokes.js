import React, { useState } from 'react';
import { useEffect } from 'react';
import Draggable from 'react-draggable';


function Form() { 

    const [meme, setMeme] = useState({
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

    const [dragText, setDragText] = useState({texto:''})

    const imagem = meme.imagemAleatoria

    function handleChange(event){
        const {name, value} = event.target
        setDragText(prevDragText => {
            return {
                ...prevDragText,
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
                    <input className="form-input" name='texto' draggable onChange={handleChange} placeholder="Texto superior" type='text' />
                    <button onClick={gerarImagemMeme} className="form-button" type="button"> Nova imagem de meme 🖼</button>
                </div>
                <div className='meme-div'>
                    <img className='meme-img' src={imagem} alt="HUE HUE HUE" />
                    <Draggable>
                        {dragText.texto && <p className='meme-img-text bottom'>{dragText.texto}</p>}
                    </Draggable>
                </div>
        </main>
    )
}

export default Form;

