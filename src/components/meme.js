import React from 'react';
// import { memedata } from './data';

export default function Meme() {

    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"})
    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function buttonClick() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => {
            return {...prevMeme, randomImage: url}
        })  

    }
    function handleChange(event) {
        const{name, value} = event.target
        setMeme(prevMeme => {
            return {...prevMeme,
                    [name]: value
            }
        })
    }


    return (
        <main className='main'>
                <input
                    className='main-input-1'
                    type="text"
                    name='topText'
                    value={meme.topText}
                    placeholder='Top text'
                    onChange={handleChange}
                    />
                <input
                    className='main-input-2'
                    type="text"
                    name='bottomText'
                    value={meme.bottomText}
                    placeholder='Bottom text'
                    onChange={handleChange}
                    />
                <br></br>
                <button className='main-input-button' onClick={buttonClick}>Get a new meme image 🖼</button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt='Meme'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}