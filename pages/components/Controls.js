import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';
import { VStack, Input, Stack, Button, Alert, AlertIcon} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon} from '@chakra-ui/icons';
import calculateMoveRobot from '../utils/calculateMoveRobot';


export default function Controls(){
  const { squares,
          setSquares,
          cardinalPoints,
          setCardinalPoints,
          inputText,
          setInputText,
          error,
          setError,
        } = useContext(GameContext);

  function handleResetClick(){
    squares.fill(null);
    const newSquares = [... squares];
    newSquares[20] = <ArrowUpIcon w={20} h={20}/>;
    setSquares(newSquares);
    setCardinalPoints(0);
    setError(false);
  }

  function onChange(ev){
    const newInputText = [... inputText];
    newInputText = ev.target.value;
    setInputText(newInputText);
  }

  function handleSubmitClick(){
    let squaresIndex;
    for (let i = 0; i< squares.length; i++){
      if( squares[i] != null){
        squaresIndex = i;
      }
    }
    const move = calculateMoveRobot(inputText.toLowerCase(), cardinalPoints, squaresIndex);
    if (!move){
      return setError(true);
    }
    squares.fill(null);
    const newSquares = [... squares];
    if (move['calculateCardinalPoints'] === 0){
      newSquares[move['key']] = <ArrowUpIcon w={20} h={20}/>;
    }else
    if (move['calculateCardinalPoints'] === 1){
      newSquares[move['key']] = <ArrowForwardIcon w={20} h={20}/>;
    }else
    if (move['calculateCardinalPoints'] === 2){
      newSquares[move['key']] = <ArrowDownIcon w={20} h={20}/>;
    }else
    if (move['calculateCardinalPoints'] === 3){
      newSquares[move['key']] = <ArrowBackIcon w={20} h={20}/>;
    }
    setSquares(newSquares);
    setCardinalPoints(move['calculateCardinalPoints']);
    setError(false);
  }

  return(
    <VStack spacing={5} height="18vh" alignItems="center" justifyContent="center">
      {error &&(<Alert status='warning' borderRadius='5px' h='5vh'><AlertIcon/>Comando Inválido</Alert>)}
      <Input  width="20vw" mb={5} type="text" size="md" color="white" onChange={onChange}/>
      <Stack direction="row">
        <Button size="lg" variant="outline" color="white" _hover={{borderColor:'blue.500', color: 'blue.500'}} onClick={handleResetClick}>Reset</Button>
        <Button size="lg" variant="solid" color='black' _hover={{bg:'blue.100'}} onClick={handleSubmitClick}>Submit</Button>
      </Stack>
    </VStack>
  );
}