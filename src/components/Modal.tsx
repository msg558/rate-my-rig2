import '../Styles/Modal.css'
import { FormItem } from './FormItem'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

type propsType = {
    visible: boolean
    setVisible: Function
    title: string
    dispatchType?: string
    itemArray: {
        label: string
        objKey: string
        isNumber?: boolean
    }[]
}

export const Modal = (props: propsType) => {
    const dispatch = useDispatch()
    const [state, setState] = useState()
    
    const submitHandler = () => {
        if (props.dispatchType){
         dispatch({type: props.dispatchType, payload: state })
        }      
        props.setVisible(false)
    }
    
    return(
        <div className='custom-modal' style={{display: props.visible? 'block' : 'none'}}>
            <h2 style={{padding: '5vh'}}> {props.title} </h2>
            
            <form style={{width: '60%',margin: 'auto', textAlign: 'center'}}>

                {props.itemArray.map((item) => 
                    <FormItem label={item.label} key={item.objKey} setState={setState} objKey={item.objKey} isNumber={item.isNumber} /> 
                )}
                
            </form>
            <div style={{paddingTop: '10vh'}}>
                <button className='btn btn-primary' onClick={submitHandler}> Submit </button>
                <button className='btn btn-warning' onClick={()=>props.setVisible(false)}> Cancel</button>
            </div>
        </div>
    )
}