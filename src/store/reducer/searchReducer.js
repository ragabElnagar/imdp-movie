import { SEARCH_SUCCESS, SEARCH_REQUEST, SEARCH_FAILER } from "../type/type"

const intialstate = {
    loading: false,
    searchMovies: [],
    error: "",
}
export const searchReducer = (state = intialstate, action) => {
    switch (action.type) {

        case SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                searchMovies: action.payload,
                error: ""
            }

        case SEARCH_FAILER:
            return {
                ...state,
                loading: false,
                searchMovies: [],
                error: action.payload
            }
   
        default:
            return {
                ...state
            }
    }
}