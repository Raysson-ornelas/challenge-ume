import type { NextPage } from 'next'
import { Grid, Box, Input, Button, VStack, Stack} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
    <VStack bg="gray.300" height="100vh">
      <Box bg="#02054B" w="50vw" height="90vh" mt={10}>
        <VStack height="70vh" alignItems="center" justifyContent="center">
          <Grid templateColumns='repeat(5,1fr)' gap={1}>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
            <Box w='8vw' h='10vh' bg='blue.500'/>
          </Grid>
        </VStack>
        <VStack spacing={5} height="18vh" alignItems="center" justifyContent="center">
            <Input  width="20vw" mb={5} type="text" size="md" color="white"></Input>
            <Stack direction="row">
              <Button size="lg" variant="outline" color="white" _hover={{borderColor:'blue.500'}}>Reset</Button>
              <Button size="lg" variant="solid" color='black' _hover={{bg:'blue.100'}}>Subimit</Button>
            </Stack>
        </VStack>
      </Box>
    </VStack>
    </>
  )
}

export default Home
