import axios from "axios"
import { key, url } from "../../url"
import { KIDSMOVIES_REQUEST,KIDSMOVIES_SUCCESS,KIDSMOVIES_FAILER} from "../type/type"



export const popularkidsMoviesRequest = () => {
    return {
        type: KIDSMOVIES_REQUEST,
        
    }
}

export const popularkidsMoviesSucess = (payload) => {
    return {
        type: KIDSMOVIES_SUCCESS,
        payload
    }
}
export const popularkidsMoviesFailer = (error) => {
    return {
        type: KIDSMOVIES_FAILER,
        payload:error
    }
}

export const fetchPopularkidsMovies =()=>{
    return (dispatch)=>{
        dispatch(popularkidsMoviesRequest)
        axios.get(`${url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    dispatch(popularkidsMoviesSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(popularkidsMoviesFailer(err))
})
    }
}