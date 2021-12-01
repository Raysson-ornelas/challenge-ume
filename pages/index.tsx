import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" justifyContent="center">
        <Heading mb={6}>Teste</Heading>
      </Flex>
    </Flex>
  )
}

export default Home
