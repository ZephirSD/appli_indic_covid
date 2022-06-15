import React, { useState } from 'react'
import Map from "react-map-gl";
function Carte() {
  const [viewport, setViewport] = useState({
    latitude: -21.131,
    longitude: 55.5669,
    zoom: 8.95,
});
  return (
    <>
      <Map
       {...viewport}
       mapStyle={"mapbox://styles/zephirsd18/cl1rdsvcb003y14qsjk3u0kc9"}
       mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
       onViewportChange={setViewport}
      />
    </>
  )
}

export default Carte