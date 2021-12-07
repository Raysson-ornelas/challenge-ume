import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';
import { VStack, Input, Stack, Button} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon} from '@chakra-ui/icons';
import calculateMoveRobot from '../utils/calculateMoveRobot';

export default function Controlls(){
  const { squares, setSquares, cardinalPoints,setCardinalPoints, inputText, setInputText } = useContext(GameContext);

  function handleResetClick(){
    squares.fill(null);
    const newSqaures = [... squares];
    newSqaures[20] = <ArrowUpIcon w={20} h={20}/>;
    setSquares(newSqaures);
    setCardinalPoints(0);
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
    let move = calculateMoveRobot(inputText.toLowerCase(), cardinalPoints, squaresIndex);
    squares.fill(null);
    const newSqaures = [... squares];
    if (move['calculateCardinalPoints'] === 0){
      newSqaures[move['key']] = <ArrowUpIcon w={20} h={20}/>;
    }else
    if (move['calculateCardinalPoints'] === 1){
      newSqaures[move['key']] = <ArrowForwardIcon w={20} h={20}/>;
    }else
    if (move['calculateCardinalPoints'] === 2){
      newSqaures[move['key']] = <ArrowDownIcon w={20} h={20}/>;
    }else
    if (move['calculateCardinalPoints'] === 3){
      newSqaures[move['key']] = <ArrowBackIcon w={20} h={20}/>;
    }
    setSquares(newSqaures);
    setCardinalPoints(move['calculateCardinalPoints']);
  }

  return(
    <VStack spacing={5} height="18vh" alignItems="center" justifyContent="center">
      <Input  width="20vw" mb={5} type="text" size="md" color="white" onChange={onChange}/>
      <Stack direction="row">
        <Button size="lg" variant="outline" color="white" _hover={{borderColor:'blue.500', color: 'blue.500'}} onClick={handleResetClick}>Reset</Button>
        <Button size="lg" variant="solid" color='black' _hover={{bg:'blue.100'}} onClick={handleSubmitClick}>Submit</Button>
      </Stack>
    </VStack>
  );
}