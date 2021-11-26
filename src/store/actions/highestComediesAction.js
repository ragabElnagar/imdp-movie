import axios from "axios"
import { key, url } from "../../url"
import { HIGHESTCOMEDIES_REQUEST,HIGHESTCOMEDIES_SUCCESS,HIGHESTCOMEDIES_FAILER} from "../type/type"



export const highestComediesRequest = () => {
    return {
        type: HIGHESTCOMEDIES_REQUEST,
        
    }
}

export const highestComediesSucess = (payload) => {
    return {
        type: HIGHESTCOMEDIES_SUCCESS,
        payload
    }
}
export const highestComediesFailer = (error) => {
    return {
        type: HIGHESTCOMEDIES_FAILER,
        payload:error
    }
}

export const fetchhighestComedies =()=>{
    return (dispatch)=>{
        dispatch(highestComediesRequest)
        axios.get(`${url}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    dispatch(highestComediesSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(highestComediesFailer(err))
})
    }
}