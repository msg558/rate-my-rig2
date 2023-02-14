import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import * as types from '../Types'

type propsType = {
  setPhotoPath: Function,
  setModalVisible: Function,
  photoPath: number
}

export const Controls = (props: propsType) => {
  const dispatch = useDispatch()
  const ReduxState = useSelector((state: types.reduxState) => state.Likes)

  const onLikeHandler = (liked: boolean) => {
    if (liked) {
      dispatch({type: 'ADD_LIKES', payload: props.photoPath})
    }
    props.setPhotoPath(() => {
      const pathArray = ReduxState.map((item)=>+item.path).sort((a,b)=> a-b )
      const Index = pathArray.findIndex((x)=> (x===props.photoPath))
      
      if (Index === ReduxState.length-1) {
        return( pathArray[0])
      }
      else {
        return( pathArray[Index+1])
      }
    }
    )
    
  }

  const onAddNewRig = () => {
    props.setModalVisible(true)
  }

  const onDeleteRig = () => {
    dispatch({type: 'DELETE_RIG', payload: props.photoPath})
    props.setPhotoPath(+ReduxState[0].path)
  }

  return(
      <div className='Controls'>
        <div>
          <button className = 'btn btn-success' onClick={() => onLikeHandler(true)}> Like </button>
          <button className = 'btn btn-danger' onClick={() => onLikeHandler(false)}> Dislike </button>
        </div>
        <div>
          <button className = 'btn btn-primary btn-sm' onClick={onAddNewRig} > Add New Rig </button>
          <button className = 'btn btn-primary btn-sm' onClick={onDeleteRig} > Delete Rig </button>

        </div>
      </div>
  )
}

