import { Box, Flex, Link as ChakraLink, Button, Stack, Tooltip } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'

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
          <Stack direction="row" spacing={[4, 6, 8]} alignItems="center">
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
            <Tooltip label="Resume">
              <ChakraLink
                as={RouterLink}
                to="/resume"
                color={colorMode === 'light' ? 'gray.600' : 'white'}
                _hover={{ textDecoration: 'none', color: 'blue.500' }}
              >
                <Box as={FaFileAlt} size="20px" />
              </ChakraLink>
            </Tooltip>
            <Tooltip label="GitHub">
              <ChakraLink
                href="https://github.com/mattct027"
                isExternal
                color={colorMode === 'light' ? 'gray.600' : 'white'}
                _hover={{ color: 'blue.500' }}
              >
                <Box as={FaGithub} size="20px" />
              </ChakraLink>
            </Tooltip>
            <Tooltip label="LinkedIn">
              <ChakraLink
                href="https://www.linkedin.com/in/mattct027/"
                isExternal
                color={colorMode === 'light' ? 'gray.600' : 'white'}
                _hover={{ color: 'blue.500' }}
              >
                <Box as={FaLinkedin} size="20px" />
              </ChakraLink>
            </Tooltip>
            <Button onClick={toggleColorMode} size="sm">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
} 