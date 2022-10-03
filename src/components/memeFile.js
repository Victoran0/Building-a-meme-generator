import React from 'react';

export default function MemeFile() {
    function handleClick() {
        const noE = document.getElementById("no")
        noE.innerHTML = "Bruh!!!"
        

    }
    function handleOnMouse() {
        const noL = document.getElementById("no")
        noL.innerHTML = "Meme Bruh!!!"
    }
    return (
        <div className='container'>
            <img src={process.env.PUBLIC_URL + '/images/memeimg.png'} alt='Meme' className='container-image' onMouseOver={handleOnMouse} />
            <button onClick={handleClick}>Click me</button>
            <p id='no'></p>

        </div>
    )
}