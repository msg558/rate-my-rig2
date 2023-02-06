import '../Styles/LeaderBoard.css'
import '../Styles/LeaderBoardGrid.css'
import { LeaderBoardItem } from './LeaderBoardItem'
import { useState } from 'react'

type propsType= {
    likes: number[]
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
    const [order, setOrder] = useState([1,2,3])

    console.log('LeaderBoard Component Rendered')
    return(
        <div className='LeaderBoard'>
            <h3>Leaderboard</h3>
            <div className='LeaderBoardGrid' >
                {props.likes.map((x,i, A) => {
                    return(<LeaderBoardItem path={i+1} key={i+1} order={calculateOrder(A)[i]} progress={x} totalLikes={totalLikes}/>)
                })}          
            </div>
        </div>
        
    )
}