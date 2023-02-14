import ReactMapGL from 'react-map-gl'
import { useState } from 'react'
import { MapMarker } from './MapMarker'
import { useSelector} from 'react-redux'
import * as types from '../Types'

type propsType = {
    onClickFunc: Function
    photoPath: number
}

const style = {
    width: '99%', 
    height: '99%', 
    borderTop: 'solid', 
    borderColor: 'white',
    overflow: 'hidden',
    margin: 0,
}

export const Map = (props: propsType) => {
    const [viewport, setViewport] = useState({
    
        longitude: -99,
        latitude: 29.5, 
        zoom: 5
        
    })
    const ReduxState = useSelector((state: types.reduxState) => state.Likes)

    return(
        <ReactMapGL 
        style= {style}
        {...viewport} 
        onMove={(vp)=>setViewport(vp.viewState)} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
        mapStyle="mapbox://styles/mapbox/dark-v9"
        >
            {ReduxState.map((rig) => {
                return(<MapMarker 
                        longitude={rig.longitude}
                        latitude={rig.latitude}
                        crewSize={rig.crew_size}
                        wellsDrilled={rig.num_wells_drilled}
                        onClick={props.onClickFunc} 
                        path={+rig.path} 
                        key={rig.path}
                        selected = {(props.photoPath===+rig.path)? true : false}
                    />)
            })}
            

        </ReactMapGL>
    )
}