import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, Tag, Link, useColorMode } from '@chakra-ui/react'

interface Project {
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'GameWarden AI',
    description: 'A modern web application for managing and analyzing fish-related data and FWC regulations. Features image compression, analytics integration with Vercel, and image matching with Fishial.ai.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Vercel Analytics',
      'Fishial.ai API'
    ],
    link: 'https://gamewardenai.vercel.app/'
  },
  {
    title: 'Black Scholes Visualizer',
    description: 'An interactive web application for calculating option prices using the Black-Scholes model. Features real-time calculations, dynamic heatmap visualizations for price sensitivity analysis, and server-side computations for accuracy.',
    technologies: [
      'Next.js',
      'TypeScript',
      'React Hook Form',
      'Plotly.js',
      'Tailwind CSS'
    ],
    link: 'https://blackscholes.vercel.app/'

  },
  {
    title: 'StrategyBacktester',
description: 'A full-stack backtesting platform for simulating moving average crossover strategies on Nasdaq futures. Features adjustable MA windows, stop-loss/take-profit logic, real-time PnL tracking, and dynamic trade logs with <450ms API latency.',
technologies: [
  'Streamlit',
  'FastAPI',
  'Python',
  'Pandas',
  'yfinance'
],
link: 'https://strategybacktester.streamlit.app/'

  },
  {title: 'WebApp-SuppliersPartsJobs',
    description: 'A Java-based enterprise web application for managing suppliers, parts, jobs, and shipments. Includes user authentication, role-based access (root, client, accountant), dynamic SQL execution, and secure JDBC-backed data operations.',
    technologies: [
      'Java',
      'JSP',
      'Servlets',
      'MySQL',
      'Tomcat'
    ],
    link: 'https://github.com/mattct027/WebApp-SuppliersPartsJobs'
    }
]

export default function Projects() {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'light' ? 'white' : 'gray.700'
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.300'

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
          Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project) => (
            <Box
              key={project.title}
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{ transform: 'translateY(-5px)', transition: 'all 0.2s' }}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  borderRadius="md"
                  mb={4}
                />
              )}
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="md" color={textColor}>
                  {project.link ? (
                    <Link href={project.link} isExternal color="blue.400">
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </Heading>
                <Text color={textColor}>{project.description}</Text>
                <Box display="flex" flexWrap="wrap" gap={2}>
                  {project.technologies.map((tech) => (
                    <Tag
                      key={tech}
                      colorScheme="blue"
                      size="md"
                    >
                      {tech}
                    </Tag>
                  ))}
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 