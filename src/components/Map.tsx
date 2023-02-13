import ReactMapGL from 'react-map-gl'
import { useState } from 'react'
import { MapMarker } from './MapMarker'
import { useSelector} from 'react-redux'
import * as types from '../Types'

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
    const ReduxState = useSelector((state: types.APIDataType[]) => state)

    return(
        <ReactMapGL 
        style= {style}
        {...viewport} 
        onMove={(vp)=>setViewport(vp.viewState)} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
        mapStyle="mapbox://styles/mapbox/dark-v9"
        >
            {ReduxState.map((rig) => {
                return(<MapMarker longitude={rig.longitude? rig.longitude : 0} latitude={rig.latitude? rig.latitude : 0} onClick={props.onClickFunc} path={+rig.path} key={rig.path}/>)
            })}
            

        </ReactMapGL>
    )
}