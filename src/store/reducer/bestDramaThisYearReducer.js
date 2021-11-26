import { BESTDRAMATHISYEAR_REQUEST,BESTDRAMATHISYEAR_SUCCESS,BESTDRAMATHISYEAR_FAILER} from "../type/type"

const intialstate = {
    loading: false,
    bestDramaThisYear:[],
    error: ""
}

export const bestDramaThisYearReducer = (state = intialstate, action) => {
    switch (action.type) {
 
        case BESTDRAMATHISYEAR_REQUEST:
            return {
                ...state,
                loading:true
            }

        case BESTDRAMATHISYEAR_SUCCESS:
            return {
                ...state,
                loading:false,
                bestDramaThisYear: action.payload,
                error:""
            }

            case BESTDRAMATHISYEAR_FAILER:
            return {
                ...state,
                loading:false,
                bestDramaThisYear:[],
                error: action.payload
            }


        default:
            return {
                ...state
            }
    }
}