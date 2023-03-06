import React from 'react';
import './index.css';
import {useState} from 'react';


export default function Form() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        firstName = '';
        lastName = '';
    }

    return (
        <form>
            <h1>INGRESE SUS DATOS</h1>
            <input
              placeholder="Nombre"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <input
              placeholder="Apellido"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <h2>Hola {firstName} {lastName}</h2>
            <button onClick={handleReset}>Reiniciar</button>
        </form>
    );
    }