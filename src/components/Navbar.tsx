import { Box, Flex, Link as ChakraLink, Button, Stack } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={colorMode === 'light' ? 'white' : 'gray.800'} px={[4, 6, 8]} boxShadow="sm" w="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="1400px" mx="auto">
        <Flex alignItems="center">
          <ChakraLink
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            color={colorMode === 'light' ? 'gray.600' : 'white'}
            _hover={{ textDecoration: 'none', color: 'blue.500' }}
          >
            Matthew Thomas
          </ChakraLink>
        </Flex>

        <Flex alignItems="center">
          <Stack direction="row" spacing={[4, 6, 8]}>
            <ChakraLink
              as={RouterLink}
              to="/about"
              color={colorMode === 'light' ? 'gray.600' : 'white'}
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/projects"
              color={colorMode === 'light' ? 'gray.600' : 'white'}
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
            >
              Projects
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/resume"
              color={colorMode === 'light' ? 'gray.600' : 'white'}
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
            >
              Resume
            </ChakraLink>
            <Button onClick={toggleColorMode} size="sm">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
} 