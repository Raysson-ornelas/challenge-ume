import { GameContext } from "../contexts/gameContext";
import { useContext } from "react";
import { Box, VStack, Grid } from "@chakra-ui/layout";
import Square from "./squares";
import Controlls from "./controlls";

export default function Board(){
    const { squares, setSquares } = useContext(GameContext);
    return(
        <>
        <VStack bg="gray.300" height="100vh">
        <Box bg="#02054B" w="50vw" height="90vh" mt={10}>
            <VStack height="70vh" alignItems="center" justifyContent="center">
                <Grid templateColumns='repeat(5,1fr)' gap={1}>
                { squares.map((value, index) => (
                    <Square value={value} index={index} />
                ))}
                </Grid>
            </VStack>
            <VStack spacing={5} height="18vh" alignItems="center" justifyContent="center" >
                <Controlls></Controlls>
            </VStack>
        </Box>
        </VStack>
        </>
    );
}

