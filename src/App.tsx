import './Styles/Lux.css'
import './App.css'
import * as types from './Types'
import { Photo } from './components/Photo';
import { LeaderBoard } from './components/LeaderBoard';
import { useState, useEffect} from 'react';
import { Context1 } from './contexts/Context1';
import { useSelector, useDispatch} from 'react-redux'

const numPhotos = 5

function App() {
  
  // REDUX STUFF
  const ReduxState = useSelector((state: types.APIDataType[]) => state)
  const dispatch = useDispatch()
  // --------------

  
  const [photoPath, setPhotoPath] = useState(1)
 

  
  useEffect(()=> {
    dispatch({type: 'GET_LIKES'})
    const interval = setInterval(()=>dispatch({type: 'GET_LIKES'}),5000)
    return (() => clearInterval(interval))

  },[])


  const transformData = (data: types.APIDataType[]) => {
    const cutData = data.map((item)=> [item.path , item.likes])
    const tempArray = new Array(cutData.length)
    cutData.forEach((element)=> {
       tempArray[+element[0]-1]=element[1]
    })
    return tempArray
  }



  const onLikeHandler = (path: number, liked: boolean) => {
    if (liked) {
      dispatch({type: 'ADD_LIKES', payload: path})
    }
    setPhotoPath((prev) => {
      if (prev>(numPhotos-1)){
        prev=0
      }
      return(prev+1)
    })
    
  }


  console.log('App component rendered')
  return (    
      <div className='App'>
        <h1 className='Heading'>Rate-My-Rig!</h1>
        <Photo path={photoPath} />
        <Context1.Provider value={{value: photoPath, setValue: setPhotoPath}}>
          <LeaderBoard likes={transformData(ReduxState)}/>
        </Context1.Provider>

        <div className='Controls'>
          <button className = 'btn btn-success' onClick={() => onLikeHandler(photoPath, true)} > Like </button>
          <button className = 'btn btn-danger' onClick={() => onLikeHandler(photoPath, false)}> Dislike </button>
        </div>
      </div>
  );
}

export default App;
