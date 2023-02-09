import ReactMapGL from 'react-map-gl'
import { useState } from 'react'
import { MapMarker } from './MapMarker'

type propsType = {
    onClickFunc: Function
}

const style = {
    width: '99%', 
    height: '99%', 
    borderTop: 'solid', 
    borderColor: 'white',
    overflow: 'visible',
    margin: 0,
}

export const Map = (props: propsType) => {
    const [viewport, setViewport] = useState({
    
        longitude: -99,
        latitude: 31, 
        zoom: 5
        
    })
    

    return(
        <ReactMapGL 
        style= {style}
        {...viewport} 
        onMove={(vp)=>setViewport(vp.viewState)} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
        mapStyle="mapbox://styles/mapbox/dark-v9"
        >
            
            <MapMarker longitude={-99.2} latitude={30}onClick={props.onClickFunc} path={1}/>
            <MapMarker longitude={-98.3} latitude={30.5}onClick={props.onClickFunc} path={2}/>
            <MapMarker longitude={-99.6} latitude={31}onClick={props.onClickFunc} path={3}/>
            <MapMarker longitude={-98.6} latitude={31.5}onClick={props.onClickFunc} path={4}/>
            <MapMarker longitude={-99} latitude={32}onClick={props.onClickFunc} path={5}/>
        </ReactMapGL>
    )
}