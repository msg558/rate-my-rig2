import './Styles/Lux.css'
import './App.css'
import { Photo } from './components/Photo';
import { LeaderBoard } from './components/LeaderBoard';
import { Controls } from './components/controls';
import { useState, useEffect} from 'react';
import { Context1 } from './contexts/Context1';
import { useDispatch} from 'react-redux'
import { Modal } from './components/Modal';


function App() {
  
  const dispatch = useDispatch()

  const [photoPath, setPhotoPath] = useState(1)
  const [modal1Visible, setModal1Visible] = useState(false)

  useEffect(()=> {
    dispatch({type: 'GET_LIKES'})
    const interval = setInterval(()=>dispatch({type: 'GET_LIKES'}),5000)
    return (() => clearInterval(interval))

  },[dispatch])



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
          <LeaderBoard setPhotoPath={setPhotoPath} photoPath={photoPath}/>
        </Context1.Provider>

        <Controls setPhotoPath={setPhotoPath} photoPath={photoPath} setModalVisible={setModal1Visible}/>

      </div>
      <Modal visible={modal1Visible} title='Add New Rig' setVisible={setModal1Visible} itemArray={formItemArray} dispatchType={'ADD_RIG'}></Modal>
    </div>
  );
}

export default App;
