import * as types from '../Types'

export const requestGetLikes = () => {
    return(fetch('http://matt-gips-myapp3.herokuapp.com/rigs').then((response) => response.json()))
}

export const requestAddLikes = (path: string) => {
    return(fetch('http://matt-gips-myapp3.herokuapp.com/rigs/'+path+'/addLike').then((response) => response.json()))
}