import axios from "axios"
import { key, url } from "../../url"
import { MOVIEINFO_REQUEST,MOVIEINFO_SUCCESS,MOVIEINFO_FAILER} from "../type/type"



export const movieInfoRequest = () => {
    return {
        type: MOVIEINFO_REQUEST,
        
    }
}

export const MovieInfoSucess = (payload) => {
    return {
        type: MOVIEINFO_SUCCESS,
        payload
    }
}
export const MovieInfoFailer = (error) => {
    return {
        type: MOVIEINFO_FAILER,
        payload:error
    }
}

export const fetchMovieInfo=(id)=>{
    return (dispatch)=>{
        dispatch(movieInfoRequest)
        axios.get(`${url}/movie/${id}?api_key=${key}`)
.then(response=>{
    let data=response.data
    dispatch(MovieInfoSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(MovieInfoFailer(err))
})
    }
}