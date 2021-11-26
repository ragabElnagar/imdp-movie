import { MOVIEINFO_REQUEST,MOVIEINFO_SUCCESS,MOVIEINFO_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    movieInfo:[],
    error: ""
}

export const movieInfoReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case MOVIEINFO_REQUEST:
            return {
                ...state,
                loading:true
            }

        case MOVIEINFO_SUCCESS:
            return {
                ...state,
                loading:false,
                movieInfo: action.payload,
                error:""
            }

            case MOVIEINFO_FAILER:
            return {
                ...state,
                loading:false,
                movieInfo:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}