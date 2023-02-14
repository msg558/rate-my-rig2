import '../Styles/LeaderBoard.css'
import '../Styles/LeaderBoardGrid.css'
import { LeaderBoardItem } from './LeaderBoardItem'
import { Map } from './Map';
import '../Styles/Map.css'
import * as types from '../Types'
import { useSelector} from 'react-redux'

type propsType= {
    setPhotoPath: Function,
    photoPath: number
}


const transformData = (data: types.APIDataType[]) => {
    const cutData = data.map((item)=> [item.path , item.likes])
    const tempArray = new Array(cutData.length)
    cutData.forEach((element)=> {
       tempArray[+element[0]-1]=element[1]
    })
    return tempArray
  }


const calculateOrder = (array: number[]) => {
    return( 
        array.map((x,i, A) => {
            const temp = [...A.slice(0,i),...A.slice(i+1,A.length)]
            const reducedVal = temp.reduce((acc,curr,j,B) => {
                if (x>B[j]) {
                return(acc+1)
                }
                else {
                return(acc)
                }
            },0)
            return(A.length-(reducedVal))
        })
    )
}

export const LeaderBoard = (props: propsType) => {

    const ReduxState = useSelector((state: types.reduxState) => state.Likes)
    const Likes = transformData(ReduxState)
    const totalLikes = Likes.reduce((a,b) => a+b, 0)

    return(
        <div className='LeaderBoard'>
            <div className='LeaderBoardGrid' >
                {Likes.map((x,i, A) => {
                    return(<LeaderBoardItem path={i+1} key={i+1} order={calculateOrder(A)[i]} progress={x} totalLikes={totalLikes}/>)
                })}          
            </div>
            <div className='map-container'>
                <Map onClickFunc={props.setPhotoPath} photoPath={props.photoPath}></Map>
            </div>
        </div>
        
    )
}