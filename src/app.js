import React from 'react';
import Header from './components/header';
import Meme from './components/meme';
// import MemeFile from './components/memeFile';
// import { memedata } from './components/data';

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            {/* <MemeFile /> */}
        </div>
    )
}