import GameContextProvider, { GameContext } from './contexts/gameContext';
import Board from './components/board';

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
