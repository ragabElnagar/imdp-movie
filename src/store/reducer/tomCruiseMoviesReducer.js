import { TOMCRUISE_REQUEST,TOMCRUISE_SUCCESS,TOMCRUISE_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    tomCruiseMovies:[],
    error: ""
}

export const tomCruiseMoviesReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case TOMCRUISE_REQUEST:
            return {
                ...state,
                loading:true
            }

        case TOMCRUISE_SUCCESS:
            return {
                ...state,
                loading:false,
                tomCruiseMovies: action.payload,
                error:""
            }

            case TOMCRUISE_FAILER:
            return {
                ...state,
                loading:false,
                tomCruiseMovies:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}