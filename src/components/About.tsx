import { Box, Heading, Text, VStack, Container, useColorMode } from '@chakra-ui/react'

export default function About() {
  const { colorMode } = useColorMode()
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.300'

  return (
    <Container maxW="800px" py={8}>
      <VStack align="start" spacing={8} w="100%">
        <Heading
          as="h1"
          size="xl"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          About Me
        </Heading>

        <Text color={textColor} fontSize="lg">
          Hi! I'm Matthew, a Computer Science undergraduate at the University of Central Florida with a strong interest in fintech, particularly high-frequency trading and investment banking.
        </Text>

        <Box w="100%">
          <Heading as="h2" size="md" color={textColor} mb={4}>
            Background
          </Heading>
          <Text color={textColor}>
            I’ve worked as a Lead Teaching Assistant and Learning Assistant at UCF, where I supported over 1000 students in mastering data structures and programming in C. My passion for backend systems, financial modeling, and algorithm design drives my technical pursuits, and I aim to combine those skills to make an impact in the financial tech sector.
          </Text>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="md" color={textColor} mb={4}>
            What I Do
          </Heading>
          <Text color={textColor}>
            I build full-stack applications with technologies like TypeScript, React, Next.js, Springboot, and SQL. From options pricing visualizations to AI-powered regulatory tools, I focus on creating scalable, performant software that solves real-world problems.
          </Text>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="md" color={textColor} mb={4}>
            Interests
          </Heading>
          <Text color={textColor}>
            Outside of programming, I enjoy cooking, working out, fishing, and analyzing markets through retail trading. I'm especially fascinated by the intersection of finance and technology and hope to bring my skills into roles involving algorithmic trading or investment banking.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}
