import { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import '../Styles/MapMarker.css'



type propsType = {
    latitude: number,
    longitude: number,
    description?: string,
    onClick: Function
    path: number,
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
            <div className='blob' onMouseOver={MO_Handler} onMouseLeave={ML_Handler}> {props.path} </div>
            {popupVisible && <Popup longitude={props.longitude} latitude={props.latitude} anchor="bottom-left" style={{color: 'black'}} closeButton={false}>
                <img src={'Photos/'+props.path+'.jpg'} alt='' style={{width: '70px', height: '70px'}} />
                </Popup>}
        </Marker>
            
    )
}