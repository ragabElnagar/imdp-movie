import axios from "axios"
import { key, url } from "../../url"
import { MOSTPOPULAR_REQUEST,MOSTPOPULAR_SUCCESS,MOSTPOPULAR_FAILER} from "../type/type"



export const MostPopularRequest = () => {
    return {
        type: MOSTPOPULAR_REQUEST,
        
    }
}

export const MostPopularSucess = (payload) => {
    return {
        type: MOSTPOPULAR_SUCCESS,
        payload
    }
}
export const MostPopularFailer = (error) => {
    return {
        type: MOSTPOPULAR_FAILER,
        payload:error
    }
}

export const fetchMostPopular =()=>{
    return (dispatch)=>{
        dispatch(MostPopularRequest)
        axios.get(`${url}/discover/movie?sort_by=popularity.desc&api_key=${key}`)
.then(response=>{
    let data=response.data.results
    dispatch(MostPopularSucess(data))
})
.catch( error=>{
    const err=error.message
    dispatch(MostPopularFailer(err))
})
    }
}