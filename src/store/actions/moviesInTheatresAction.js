import axios from "axios"
import { key, url } from "../../url"
import { MOVIESINTHEATRES_REQUEST,MOVIESINTHEATRES_SUCCESS,MOVIESINTHEATRES_FAILER} from "../type/type"



export const moviesInTheartresRequest = () => {
    return {
        type: MOVIESINTHEATRES_REQUEST,
        
    }
}

export const moviesInTheartresSucess = (payload) => {
    return {
        type: MOVIESINTHEATRES_SUCCESS,
        payload
    }
}
export const moviesInTheartresFailer = (error) => {
    return {
        type: MOVIESINTHEATRES_FAILER,
        payload:error
    }
}

export const fetchmoviesInTheartres=()=>{
    return (dispatch)=>{
        dispatch(moviesInTheartresRequest)
        axios.get(`${url}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    
    dispatch(moviesInTheartresSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(moviesInTheartresFailer(err))
})
    }
}