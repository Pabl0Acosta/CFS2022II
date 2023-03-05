import React from 'react';
import './index.css';
import {useState} from 'react';

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1>Gracias!</h1>;
    }
     else {
        return (
            <form onSubmit={e =>{
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
            <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Enviar</button>
            <h1>Deje su comentario</h1>
            </form>
        );
    }
}
