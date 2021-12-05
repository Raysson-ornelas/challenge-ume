import React, { useState } from 'react';
import { createContext } from 'react';
export const GameContext = createContext();



export default function GameContextProvider({ children }){
    const [ squares, setSquares ] = useState(Array(25).fill(null));
    return(
        <>
        <GameContext.Provider value = {{ squares, setSquares }}>{ children }</GameContext.Provider>
        </>
    );
}