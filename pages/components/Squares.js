import { Box, Center } from '@chakra-ui/react';

export default function Square({ value, index }){

    return(
        <>
        <Box w='8vw' h='10vh' bg='blue.500'>
            <Center>
                {value}
            </Center>
        </Box>
        </>
    );
}

