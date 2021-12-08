import { GameContext } from "../contexts/gameContext";
import { useContext, useEffect } from "react";
import { Box, VStack, Grid } from "@chakra-ui/layout";
import Square from "./squares";
import Controlls from "./controlls";
import { ArrowUpIcon, ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon} from '@chakra-ui/icons';

export default function Board(){
    const { squares, setSquares, setCardinalPoints } = useContext(GameContext);
    useEffect(() => {
        squares.fill(null);
        const newSqaures = [... squares];
        newSqaures[20] = <ArrowUpIcon w={20} h={20}/>;
        setSquares(newSqaures);
        setCardinalPoints(0);
    },[]);
    return(
        <>
        <VStack bg="gray.300" height="100vh">
        <Box bg="#02054B" w="50vw" height="90vh" mt={10}>
            <VStack height="70vh" alignItems="center" justifyContent="center">
                <Grid templateColumns='repeat(5,1fr)' gap={1}>
                { squares.map((value, index) => (
                    <Square value={value} key={0} index={index} />
                ))}
                </Grid>
            </VStack>
            <VStack spacing={5} height="18vh" alignItems="center" justifyContent="center">
                <Controlls />
            </VStack>
        </Box>
        </VStack>
        </>
    );
}

