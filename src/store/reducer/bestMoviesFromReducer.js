import { BESTMOVIESFROM_REQUEST,BESTMOVIESFROM_SUCCESS,BESTMOVIESFROM_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    bestMoviesFrom:[],
    error: ""
}

export const bestMoviesFromReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case BESTMOVIESFROM_REQUEST:
            return {
                ...state,
                loading:true
            }

        case BESTMOVIESFROM_SUCCESS:
            return {
                ...state,
                loading:false,
                bestMoviesFrom: action.payload,
                error:""
            }

            case BESTMOVIESFROM_FAILER:
            return {
                ...state,
                loading:false,
                bestMoviesFrom:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}