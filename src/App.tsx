import './Styles/Lux.css'
import './App.css'
import { Photo } from './components/Photo';
import { LeaderBoard } from './components/LeaderBoard';
import { useState, useContext} from 'react';
import { Context1 } from './contexts/Context1';

const numPhotos = 5

function App() {

  const [photoPath, setPhotoPath] = useState(1)
  const [likes, setLikes] = useState(new Array(numPhotos).fill(0))
  const onLikeHandler = (path: number, likes: number[], liked: boolean) => {
    setPhotoPath((prev) => {
      if (prev>(numPhotos-1)){
        prev=0
      }
      return(prev+1)
    })
    
    const temp = likes
    if (liked) {
      temp[path-1]++
    }
    setLikes(temp)
  }

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
      
      </div>
  );
}

export default App;
