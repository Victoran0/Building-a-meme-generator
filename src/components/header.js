import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <img src={process.env.PUBLIC_URL + '/images/trollFace.png'} alt="Troll Face" className='header-image'/>
            <h3 className='header-title'>Meme Generator</h3>
            <p className='header-name'>React Course - Project 3</p>
        </header>
    )
}