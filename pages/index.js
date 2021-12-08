import GameContextProvider, { GameContext } from './contexts/gameContext';
import Board from './components/Board';

const Home = () => {

  return (
    <>
      <GameContextProvider>
        <Board/>
      </GameContextProvider>
    </>
  )
}

export default Home
