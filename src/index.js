import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import App from './app';


function Page() {
    return (
        <>
            <App />
        </>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))


