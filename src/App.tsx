import './Styles/Lux.css'
import './App.css'
import { Photo } from './components/Photo';
import { LeaderBoard } from './components/LeaderBoard';
import { Controls } from './components/controls';
import { useState, useEffect} from 'react';
import { Context1 } from './contexts/Context1';
import { useDispatch} from 'react-redux'
import { Modal } from './components/Modal';
import { Map } from './components/Map';


function App() {
  
  const dispatch = useDispatch()

  const [photoPath, setPhotoPath] = useState(1)
  const [modal1Visible, setModal1Visible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)

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
          <button className='btn' onClick={() => setModal2Visible(true)}> Enlarge Map </button>
        </Context1.Provider>
        <Controls setPhotoPath={setPhotoPath} photoPath={photoPath} setModalVisible={setModal1Visible}/>

      </div>
      <Modal visible={modal1Visible} title='Add New Rig' setVisible={setModal1Visible} itemArray={formItemArray} dispatchType={'ADD_RIG'}></Modal>
      {modal2Visible && 
        <Modal visible={true} title='RIG MAP' setVisible={setModal2Visible}>
          <div style={{width: "100%", height: '70vh'}}>
            <Map onClickFunc={setPhotoPath} photoPath={photoPath} token={process.env.REACT_APP_MAPBOX_TOKEN2}></Map>
          </div>
      </Modal>}
      
      
    </div>
  );
}

export default App;
