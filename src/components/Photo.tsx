import '../Styles/Photo.css'

type propsType = {
    path: number
}


export const Photo = (props: propsType) => {
    return(
        <div>
            <div className='Photo'> 
                <div></div>
                <img src={'Photos/'+props.path+'.jpg'} alt='' className='img'></img>
            </div>
        </div>
    )
}