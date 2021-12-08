import { GameContext } from "../contexts/gameContext";
import { useContext, useEffect } from "react";
import { Box, VStack, Grid } from "@chakra-ui/layout";
import Square from "./Squares";
import Controls from "./Controls";
import {v4 as uuid} from 'uuid'
import { ArrowUpIcon} from '@chakra-ui/icons';

export default function Board(){
    const { squares, setSquares, setCardinalPoints } = useContext(GameContext);
    useEffect(() => {
        squares.fill(null);
        const newSquares = [... squares];
        newSquares[20] = <ArrowUpIcon w={20} h={20}/>;
        setSquares(newSquares);
        setCardinalPoints(0);
    },[]);
    return(
        <>
        <VStack bg="gray.300" height="100vh">
            <Box bg="#02054B" w="50vw" height="90vh" mt={10}>
                <VStack height="70vh" alignItems="center" justifyContent="center">
                    <Grid templateColumns='repeat(5,1fr)' gap={1}>
                    { squares.map((value, index) => (
                        <Square value={value} key={uuid()}index={index} />
                    ))}
                    </Grid>
                </VStack>
                <VStack height="18vh" alignItems="center" justifyContent="center">
                    <Controls />
                </VStack>
            </Box>
        </VStack>
        </>
    );
}

