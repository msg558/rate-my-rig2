import { ProgressBar } from 'react-bootstrap'
import '../Styles/LeaderBoardItem.css'
import { Context1 } from '../contexts/Context1'
import { useContext } from 'react'

type propsType = {
    path: number
    order: number
    progress: number
    totalLikes: number
}

const calculatePercent = (progress: number, totallikes: number) => {
    if (totallikes===0) {
        return 0
    }
    else {
        return (100*progress/totallikes)
    }
}

export const LeaderBoardItem = (props: propsType) => {
    
    const contextObj = useContext(Context1)
    const style = {
        gridColumn: '1',
        order: props.order.toString(),
    }

    const clickHandler = () => {
        contextObj.setValue(props.path)
    }

    return(
        <div className='LeaderBoardItem' style={style} >
            <div className='LeaderBoardItemGrid' >
                <div className='iconContainer' >
                    <img src={'Photos/'+props.path+'.jpg'} alt='' className='img-icon' onClick={clickHandler} />
                </div>
                <div className='progressContainer'>
                    <div> {'Rig # '+props.path.toString()} </div>
                    <ProgressBar now={calculatePercent(props.progress, props.totalLikes)} animated variant='success'/>
                    <div style={{textAlign: 'left'}}> {props.progress} Likes </div>
                    
                </div>
            </div>  
        </div>
    )
}

