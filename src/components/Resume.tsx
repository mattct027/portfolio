import { Box, Container, Heading } from '@chakra-ui/react'

export default function Resume() {
  return (
    <Box w="100%" maxW="100vw">
      <Container maxW="1400px" py={8} px={[4, 6, 8]}>
        <Heading
          as="h1"
          size="xl"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          mb={8}
        >
          Resume
        </Heading>
        
        <Box
          w="100%"
          h="calc(100vh - 200px)"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <iframe
            src="/MatthewResume (1).pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume PDF"
          />
        </Box>
      </Container>
    </Box>
  )
} 