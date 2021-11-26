import axios from "axios"
import { key, url } from "../../url"
import { TOMCRUISE_REQUEST,TOMCRUISE_SUCCESS,TOMCRUISE_FAILER} from "../type/type"



export const moviesTomCruisRequest = () => {
    return {
        type: TOMCRUISE_REQUEST,
        
    }
}

export const moviesTomCruisSucess = (payload) => {
    return {
        type: TOMCRUISE_SUCCESS,
        payload
    }
}
export const moviesTomCruisFailer = (error) => {
    return {
        type: TOMCRUISE_FAILER,
        payload:error
    }
}

export const fetchmoviesTomCruis=()=>{
    return (dispatch)=>{
        dispatch(moviesTomCruisRequest)
        axios.get(`${url}/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    
    dispatch(moviesTomCruisSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(moviesTomCruisFailer(err))
})
    }
}