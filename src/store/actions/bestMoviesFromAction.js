import axios from "axios"
import { key, url } from "../../url"
import { BESTMOVIESFROM_REQUEST,BESTMOVIESFROM_SUCCESS,BESTMOVIESFROM_FAILER} from "../type/type"



export const bestMoviesFromRequest = () => {
    return {
        type: BESTMOVIESFROM_REQUEST,
        
    }
}

export const bestMoviesFromSucess = (payload) => {
    return {
        type: BESTMOVIESFROM_SUCCESS,
        payload
    }
}
export const bestMoviesFromFailer = (error) => {
    return {
        type: BESTMOVIESFROM_FAILER,
        payload:error
    }
}

export const fetchbestMoviesFrom =(date)=>{
    return (dispatch)=>{
        dispatch(bestMoviesFromRequest)
        axios.get(`${url}/discover/movie?primary_release_year=${date}&sort_by=vote_average.desc&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    dispatch(bestMoviesFromSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(bestMoviesFromFailer(err))
})
    }
}