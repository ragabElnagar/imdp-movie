import { MOSTPOPULAR_REQUEST,MOSTPOPULAR_SUCCESS,MOSTPOPULAR_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    mostPopular:[],
    error: ""
}

export const mostPopularReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case MOSTPOPULAR_REQUEST:
            return {
                ...state,
                loading:true
            }

        case MOSTPOPULAR_SUCCESS:
            return {
                ...state,
                loading:false,
                mostPopular: action.payload,
                error:""
            }

            case MOSTPOPULAR_FAILER:
            return {
                ...state,
                loading:false,
                mostPopular:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}