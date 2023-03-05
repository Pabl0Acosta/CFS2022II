import React from 'react';
import './index.css';


export default function FeedbackForm() {

    function handleClick() {
        const name = (prompt('Cual es tu nombre?'));
        alert(`hola, ${name}!`);
    }


return (
    <button onClick={handleClick}>
        Saludar
    </button>
);
}