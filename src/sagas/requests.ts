import * as types from '../Types'


const root1 = 'http://localhost:3030/rigs'
const root2 = 'http://matt-gips-myapp3.herokuapp.com/rigs'
const root = root2

export const requestGetLikes = () => {
    return(fetch(root).then((response) => response.json()))
}

export const requestAddLikes = (path: string) => {
    return(fetch(root+'/'+path+'/addLike').then((response) => response.json()))
}

export const requestAddRig = (params: types.NewRigParams) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(params)
    }

    return(fetch(root, requestOptions).then((response) => response.json()))
}

export const requestDeleteRig = (path: string) => {

    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    return(fetch(root+'/'+path, requestOptions).then((response) => response.json()))
}
