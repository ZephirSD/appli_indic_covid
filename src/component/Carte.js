import React, { useState } from 'react'
import Map , {NavigationControl, Marker} from "react-map-gl";
import { clusters } from './assets/cluster';
function Carte() {
  const [viewport, setViewport] = useState({
    latitude: -21.131,
    longitude: 55.5669,
    zoom: 8.95,
    width: "100%",
    height: "100%",
  });
  return (
    <>
      <Map
        initialViewState={viewport}
        mapStyle={"mapbox://styles/zephirsd18/cl1rdsvcb003y14qsjk3u0kc9"}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
      >
        <NavigationControl style={{marginRight: '15px', marginTop: '15px'}}/>
        {clusters.map((cluster) => (
          cluster.nombre > 0 ? 
          (<Marker longitude={cluster.longitude} latitude={cluster.latitude} key={cluster.id}>
              <div className='circle-cluster' style={{width: 'calc(25px*' + cluster.nombre * 0.7 + ')', height: 'calc(25px*' + cluster.nombre * 0.7 + ')'}}>{cluster.nombre}</div>
          </Marker>) : 
          (<>
          </>)
        ))}
      </Map>
    </>
  )
}

export default Carte