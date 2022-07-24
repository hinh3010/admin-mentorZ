import { GET_CLASS, GET_EDUCATION } from "../actions/homeActions/homeTypes";

const initialState = {
    class: [],
    education: []
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLASS: {
            return { ...state, class: action.payload }
        } 
        case GET_EDUCATION: {
            return { ...state, education: action.payload }
        }
        default:
            return { ...state };
    }
};
