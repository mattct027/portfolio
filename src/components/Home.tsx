import { Box, Heading, Text, Button, VStack, useColorMode } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="calc(100vh - 64px - 4rem)"
      textAlign="center"
      w="100%"
    >
      <VStack spacing={8} maxW="800px" w="100%" px={4}>
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Matthew Thomas
        </Heading>
        <Text
          fontSize="xl"
          color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
        >
          Software Engineer
        </Text>
        <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
          I build modern, responsive, and scalable applications using cutting-edge technologies.
          Passionate about creating elegant solutions to complex problems.
        </Text>
        <Button
          as={RouterLink}
          to="/projects"
          colorScheme="blue"
          size="lg"
          mt={4}
        >
          View My Work
        </Button>
      </VStack>
    </Box>
  )
} 