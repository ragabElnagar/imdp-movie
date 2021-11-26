import { HIGHESTCOMEDIES_REQUEST,HIGHESTCOMEDIES_SUCCESS,HIGHESTCOMEDIES_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    hiestComidies:[],
    error: ""
}

export const hiestComidiesReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case HIGHESTCOMEDIES_REQUEST:
            return {
                ...state,
                loading:true
            }

        case HIGHESTCOMEDIES_SUCCESS:
            return {
                ...state,
                loading:false,
                hiestComidies: action.payload,
                error:""
            }

            case HIGHESTCOMEDIES_FAILER:
            return {
                ...state,
                loading:false,
                hiestComidies:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}