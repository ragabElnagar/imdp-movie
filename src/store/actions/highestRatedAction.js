import axios from "axios"
import { key, url } from "../../url"
import { HIGHESTRATED_REQUEST,HIGHESTRATED_SUCCESS,HIGHESTRATED_FAILER} from "../type/type"



export const highestRatedRequest = () => {
    return {
        type: HIGHESTRATED_REQUEST,
        
    }
}

export const highestRatedSucess = (payload) => {
    return {
        type: HIGHESTRATED_SUCCESS,
        payload
    }
}
export const highestRatedFailer = (error) => {
    return {
        type: HIGHESTRATED_FAILER,
        payload:error
    }
}

export const fetchhighestRated =()=>{
    return (dispatch)=>{
        dispatch(highestRatedRequest)
        axios.get(`${url}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    dispatch(highestRatedSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(highestRatedFailer(err))
})
    }
}