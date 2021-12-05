import { Box, Center } from '@chakra-ui/react';
import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';
import { ArrowUpIcon, ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export default function Square({ value, index }){
    const { squares, setSquares } = useContext(GameContext);
    function handleClick(){
        squares.fill(null);
        const newSqaures = [... squares];
        newSqaures[index] = <ArrowForwardIcon w={20} h={20}/>;
        setSquares(newSqaures);
    }
    return(
        <>
        <Box w='8vw' h='10vh' bg='blue.500' onClick={handleClick}>
            <Center>
                {value}
            </Center>
        </Box>
        </>
    );
}

