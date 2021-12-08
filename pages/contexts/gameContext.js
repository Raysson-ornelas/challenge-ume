import React, { useState } from 'react';
import { createContext } from 'react';
export const GameContext = createContext();



export default function GameContextProvider({ children }){
    const [ squares, setSquares ] = useState(Array(25).fill(null));
    const [ cardinalPoints, setCardinalPoints ] = useState(0);
    const [ inputText, setInputText ] = useState('');
    const [ error, setError] = useState(false);
    const state = {
        squares,
        setSquares,
        cardinalPoints,
        setCardinalPoints,
        inputText,
        setInputText,
        error,
        setError,
    }

    return(
        <>
        <GameContext.Provider value = {state}>{ children }</GameContext.Provider>
        </>
    );
}