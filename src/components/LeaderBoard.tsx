import '../Styles/LeaderBoard.css'
import '../Styles/LeaderBoardGrid.css'
import { LeaderBoardItem } from './LeaderBoardItem'
import { Map } from './Map';
import '../Styles/Map.css'

type propsType= {
    likes: number[],
    setPhotoPath: Function
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
    const totalLikes = props.likes.reduce((a,b) => a+b, 0)

    return(
        <div className='LeaderBoard'>
            <div className='LeaderBoardGrid' >
                {props.likes.map((x,i, A) => {
                    return(<LeaderBoardItem path={i+1} key={i+1} order={calculateOrder(A)[i]} progress={x} totalLikes={totalLikes}/>)
                })}          
            </div>
            <div className='map-container'>
                <Map onClickFunc={props.setPhotoPath}></Map> 
            </div>
        </div>
        
    )
}