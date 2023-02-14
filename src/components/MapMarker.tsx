import { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import '../Styles/MapMarker.css'



type propsType = {
    latitude: number,
    longitude: number,
    description?: string,
    onClick: Function
    path: number,
    crewSize: number,
    wellsDrilled: number,
    selected: boolean
}



export const MapMarker = (props: propsType) => {

    const [popupVisible, setPopupVisible] = useState(false)

    const MO_Handler = () => {
        setPopupVisible(true)
    }

    const ML_Handler = () => {
        setPopupVisible(false)
    }


    return (
        <Marker longitude={props.longitude} latitude={props.latitude} onClick={()=>props.onClick(props.path)} >
            <div className={props.selected? 'blob-selected' : 'blob' } onMouseOver={MO_Handler} onMouseLeave={ML_Handler}> {props.path} </div>
            {popupVisible && <Popup className= 'popup' longitude={props.longitude} latitude={props.latitude} closeButton={false}>
                <div style={{textAlign: 'center'}}> Rig #: {props.path}</div>
                <img src={'Photos/'+props.path+'.jpg'} alt='' style={{width: '70px', height: '70px'}} />
                <div>Longitude: {props.longitude}</div>
                <div>Latitude: {props.latitude}</div>
                <div>Crew Size: {props.crewSize} </div>
                <div>Wells Drilled: {props.wellsDrilled}</div>
                
                </Popup>}
        </Marker>
            
    )
}