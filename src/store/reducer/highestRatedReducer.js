import { HIGHESTRATED_REQUEST,HIGHESTRATED_SUCCESS,HIGHESTRATED_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    hiestRated:[],
    error: ""
}

export const hiestRatedReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case HIGHESTRATED_REQUEST:
            return {
                ...state,
                loading:true
            }

        case HIGHESTRATED_SUCCESS:
            return {
                ...state,
                loading:false,
                hiestRated: action.payload,
                error:""
            }

            case HIGHESTRATED_FAILER:
            return {
                ...state,
                loading:false,
                hiestRated:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}