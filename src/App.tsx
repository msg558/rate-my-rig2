import './Styles/Lux.css'
import './App.css'
import { Photo } from './components/Photo';
import { LeaderBoard } from './components/LeaderBoard';
import { useState, useContext, useEffect} from 'react';
import { Context1 } from './contexts/Context1';
import { useSelector, useDispatch} from 'react-redux'

const numPhotos = 5

function App() {

  // REDUX STUFF
  const xx = useSelector((state: any) => state)
  // --------------

  const [photoPath, setPhotoPath] = useState(1)

  const updateLikes = () => {
    console.log('fetching data and updating state')
    fetch('http://matt-gips-myapp3.herokuapp.com/rigs/').then((response) => response.json()).then((data)=>transformData(data))

  }
  
  useEffect(()=> {
    updateLikes()
    const interval = setInterval(updateLikes,2000)
    return (() => clearInterval(interval))
  },[])


  const transformData = (data: any) => {
    const cutData = data.map((item:any)=> [item.path , item.likes])
    const tempArray = new Array(cutData.length)
    cutData.forEach((element: any)=> {
       tempArray[element[0]-1]=element[1]
    })
    setLikes(tempArray)
  }

  const addLike = (path: number) => { 
    fetch('http://matt-gips-myapp3.herokuapp.com/rigs/'+path.toString()+'/addLike').then((response) => response.json()).then((data)=>transformData(data));
  }

  const [likes, setLikes] = useState(new Array(numPhotos).fill(0))
  const onLikeHandler = (path: number, likes: number[], liked: boolean) => {
    if (liked) {
      addLike(path)
    }
    setPhotoPath((prev) => {
      if (prev>(numPhotos-1)){
        prev=0
      }
      return(prev+1)
    })
    
  }

  const dispatch = useDispatch()

  

  return (    
      <div className='App'>
        <h1 className='Heading'>Rate-My-Rig!</h1>
        <Photo path={photoPath} />
        <Context1.Provider value={{value: photoPath, setValue: setPhotoPath}}>
          <LeaderBoard likes={likes}/>
        </Context1.Provider>

        <div className='Controls'>
          <button className = 'btn btn-success' onClick={() => onLikeHandler(photoPath, likes, true)} > Like </button>
          <button className = 'btn btn-danger' onClick={() => onLikeHandler(photoPath, likes, false)}> Dislike </button>
        </div>
        <button className='btn btn-primary btn-small' onClick={() => dispatch({type: 'counter/incremented'})}> Increment Redux State</button>
        <button className='btn btn-primary btn-small' onClick={() => dispatch({type: 'counter/decremented'})}> Decrement Redux State</button>
        <div> {xx.value} </div>
      </div>
  );
}

export default App;
