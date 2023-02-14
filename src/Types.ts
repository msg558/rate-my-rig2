export type APIDataType = {
        id: number,
        created_at: string,
        updated_at: string,
        likes: number,
        path: string,
        longitude: number,
        latitude: number,
        num_wells_drilled: number,
        crew_size: number,

    }

export type NewRigParams = {
    path: string,
    longitude: number,
    latitude: number,
    crew_size: number,
    num_wells_drilled: number
}

export type reduxState = {
    Likes: APIDataType[]
    Login: boolean
}

