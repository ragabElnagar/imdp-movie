import { KIDSMOVIES_REQUEST,KIDSMOVIES_SUCCESS,KIDSMOVIES_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    popularkidsMovies:[],
    error: ""
}

export const popularkidsMoviesReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case KIDSMOVIES_REQUEST:
            return {
                ...state,
                loading:true
            }

        case KIDSMOVIES_SUCCESS:
            return {
                ...state,
                loading:false,
                popularkidsMovies: action.payload,
                error:""
            }

            case KIDSMOVIES_FAILER:
            return {
                ...state,
                loading:false,
                popularkidsMovies:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}