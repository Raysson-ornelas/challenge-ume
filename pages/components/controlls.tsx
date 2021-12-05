import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';
import { VStack, Input, Stack, Button } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';


export default function Controlls(){
  const { squares, setSquares } = useContext(GameContext);
  function handleClick(){
    squares.fill(null);
    const newSqaures = [... squares];
    newSqaures[20] = <ArrowUpIcon w={20} h={20}/>;
    setSquares(newSqaures);
  }
  return(
    <VStack spacing={5} height="18vh" alignItems="center" justifyContent="center">
      <Input  width="20vw" mb={5} type="text" size="md" color="white"></Input>
      <Stack direction="row">
        <Button size="lg" variant="outline" color="white" _hover={{borderColor:'blue.500', color: 'blue.500'}} onClick={handleClick}>Reset</Button>
        <Button size="lg" variant="solid" color='black' _hover={{bg:'blue.100'}}>Submit</Button>
      </Stack>
    </VStack>
  );
}