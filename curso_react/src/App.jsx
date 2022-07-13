import { useState, useEffect } from 'react'
import * as API from './services/launches'
export function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, []);

  return (
    <>
      <h1>API SpaceX</h1>
      <ul>
        {launches.map((launch) => (
          <li key={launch.flight_number}>
            {launch.mission_name} - Año: ({launch.launch_year})
          </li>))}
      </ul>

    </>
  )
}

