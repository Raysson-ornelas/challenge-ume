import type { NextPage } from 'next'
import { Grid, Box, Input, Button, VStack, Stack} from '@chakra-ui/react'
import { useState } from "react";
import Square from './components/squares';
import GameContextProvider, { GameContext } from './contexts/gameContext';
import Board from './components/board';

const Home: NextPage = () => {

  return (
    <>
      <GameContextProvider>
        <Board/>
      </GameContextProvider>
    </>
  )
}

export default Home
