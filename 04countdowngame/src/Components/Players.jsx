import { useState,useRef } from "react";

const Players = () => {

    const playerInput = useRef()
    const [enteredName, setEnteredName] = useState();

    const handleNameChnge =()=>{
        setEnteredName(playerInput.current.value);
        playerInput.current.value = '';
    }

    return (
        <section id="player">
            <h2>Welcome {  enteredName ?? 'unknown entity'}</h2>
            <p>
                <input ref={playerInput} type="text" />
                <button onClick={handleNameChnge}>Set Name</button>
            </p>
        </section>
    );

}

export default Players;