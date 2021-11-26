import { MOVIESINTHEATRES_REQUEST,MOVIESINTHEATRES_SUCCESS,MOVIESINTHEATRES_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    highestInTheaters:[],
    error: ""
}

export const highestInTheatersReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case MOVIESINTHEATRES_REQUEST:
            return {
                ...state,
                loading:true
            }

        case MOVIESINTHEATRES_SUCCESS:
            return {
                ...state,
                loading:false,
                highestInTheaters: action.payload,
                error:""
            }

            case MOVIESINTHEATRES_FAILER:
            return {
                ...state,
                loading:false,
                highestInTheaters:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}