import { useState, useEffect } from 'react'
import logo from './assets/spacexlogo.png'
import * as API from './services/launches'
import { Heading, Box, Image, Text, Tag, Spacer } from '@chakra-ui/react'

export function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, []);

  return (
    <>
      <Image src={logo} width={1000} m={4}></Image>
      <Heading as="h1" size="lg" m={4}>API SpaceX</Heading >
      <section>
        {launches.map((launch) => (
          <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
            <Box display="flex">
              <Text fontSize="2xl">
                Mission: <strong>{launch.mission_name}</strong>
                ({launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Box>
            {launch.mission_name} ({launch.launch_year})
          </Box>))}
      </section>

    </>
  )
}

