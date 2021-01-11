//import React, { useState } from 'react';
import './PFTest.css'
// skapa en komponent
// skapa ett inputfält och en knapp
// använd State!


function PFTest ({profession, setProfession, name, setName, handleSubmit, }) {

    // få name och setName att finnas i detta scope. Hur?
    console.log("PFTest ran! name: " + name)

    /* const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Name posted: "${props.name}"`)
        props.setName('');
    } */
    return (<>
    <form onSubmit={handleSubmit} className="PFTest-form">
    <label>Your name:
        <input type="text" 
        value={name}
        onChange={e => setName(e.target.value)} /><br />
        Your profession:
        <input type="text" 
        value={profession}
        onChange={e => setProfession(e.target.value)} />
    </label><br />
    <input type="submit" />
    </form>
    </>)
}

export default PFTest;