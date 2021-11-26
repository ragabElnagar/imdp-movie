import axios from "axios"
import { url,key } from "../../url"
import { SEARCH_SUCCESS,SEARCH_REQUEST,SEARCH_FAILER} from "../type/type"



export const searchReqest = () => {
    return {
        type: SEARCH_REQUEST,
        
    }
}

export const searchSucess = (payload) => {
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}
export const searchFailer = (error) => {
    return {
        type: SEARCH_FAILER,
        payload:error
    }
}

export const searchAction=(text)=>{
    return(dispatch)=>{
        dispatch(searchReqest)
        axios.get(`${url}/search/movie?api_key=${key}&query=${text}`)
        .then(response=>{
            const data=response.data
            dispatch(searchSucess(data))
        })
        .catch( error=>{
            const err=error.message
            dispatch(searchFailer(err))
        })
    }
}