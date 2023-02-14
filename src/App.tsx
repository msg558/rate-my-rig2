import './Styles/Lux.css'
import './App.css'
import * as types from './Types'
import { Photo } from './components/Photo';
import { LeaderBoard } from './components/LeaderBoard';
import { useState, useEffect} from 'react';
import { Context1 } from './contexts/Context1';
import { useSelector, useDispatch} from 'react-redux'
import { Modal } from './components/Modal';



const numPhotos = 6

function App() {
  
  // REDUX STUFF
  const ReduxState = useSelector((state: types.reduxState) => state.Likes)
  const dispatch = useDispatch()
  // --------------

  const [photoPath, setPhotoPath] = useState(1)
  const [modal1Visible, setModal1Visible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)

  
  useEffect(()=> {
    dispatch({type: 'GET_LIKES'})
    const interval = setInterval(()=>dispatch({type: 'GET_LIKES'}),5000)
    return (() => clearInterval(interval))

  },[dispatch])


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

  const onAddNewRig = () => {
    setModal1Visible(true)
    setModal2Visible(false)
  }

  const onDeleteRig = () => {
    dispatch({type: 'DELETE_RIG', payload: photoPath})
    setPhotoPath(+ReduxState[0].path)
  }

  const onLogin = () => {
    setModal2Visible(true)
    setModal1Visible(false)
  }

  const formItemArray = 
    [{label: 'Image Path', objKey: 'path', isNumber: false},
     {label: 'Longitude', objKey: 'longitude', isNumber: true},
     {label: 'Latitude', objKey: 'latitude', isNumber: true},
     {label: 'Crew Size', objKey: 'crew_size', isNumber: true},
     {label: '# of Wells Drilled', objKey: 'num_wells_drilled', isNumber: true},
    ]

  return (    
    <div>
      <div className='App'>
        <h1 className='Heading'>Rate-My-Rig!</h1>
        <Photo path={photoPath} />
        <Context1.Provider value={{value: photoPath, setValue: setPhotoPath}}>
          <LeaderBoard likes={transformData(ReduxState)} setPhotoPath={setPhotoPath} photoPath={photoPath}/>
        </Context1.Provider>

        <div className='Controls'>
          <div>
            <button className = 'btn btn-success' onClick={() => onLikeHandler(photoPath, true)}> Like </button>
            <button className = 'btn btn-danger' onClick={() => onLikeHandler(photoPath, false)}> Dislike </button>
          </div>
          <div>
            <button className = 'btn btn-primary btn-sm' onClick={onAddNewRig} > Add New Rig </button>
            <button className = 'btn btn-primary btn-sm' onClick={onDeleteRig} > Delete Rig </button>

          </div>
        </div>

      </div>
      <Modal visible={modal1Visible} title='Add New Rig' setVisible={setModal1Visible} itemArray={formItemArray} dispatchType={'ADD_RIG'}></Modal>
      <Modal visible={modal2Visible} title='Login' setVisible={setModal2Visible} itemArray={[{label: 'Password', objKey: 'password'}]} dispatchType={'LOGIN'}></Modal>
    
    </div>
  );
}

export default App;
