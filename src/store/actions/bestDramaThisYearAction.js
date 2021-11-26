import axios from "axios"
import { key, url } from "../../url"
import { BESTDRAMATHISYEAR_REQUEST,BESTDRAMATHISYEAR_SUCCESS,BESTDRAMATHISYEAR_FAILER} from "../type/type"



export const bestDramaThisYearRequest = () => {
    return {
        type: BESTDRAMATHISYEAR_REQUEST,
        
    }
}

export const bestDramaThisYearSucess = (payload) => {
    return {
        type: BESTDRAMATHISYEAR_SUCCESS,
        payload
    }
}
export const bestDramaThisYearFailer = (error) => {
    return {
        type: BESTDRAMATHISYEAR_FAILER,
        payload:error
    }
}

export const fetchbestDramaThisYear =(date)=>{
    return (dispatch)=>{
        dispatch(bestDramaThisYearRequest)
        axios.get(`${url}/discover/movie?with_genres=18&primary_release_year=${date}&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    dispatch(bestDramaThisYearSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(bestDramaThisYearFailer(err))
})
    }
}