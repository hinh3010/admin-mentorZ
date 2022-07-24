import { CONFIRM_LOGIN, HIDE_SOCIAL, LOG_OUT, SHOW_SOCIAL } from "../actions/authActions/authTypes";

const initialState = {
    showSocial: false,
    userType: "",
    isAuthenticated: false,
    detailUser: {}
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SOCIAL: {
            return { ...state, showSocial: true, userType: action.payload };
        }
        case HIDE_SOCIAL: {
            return { ...state, showSocial: false, userType: action.payload };
        }
        case LOG_OUT: {
            return {...state, isAuthenticated: false}
        }
        case CONFIRM_LOGIN: {
            return {...state, isAuthenticated: true, detailUser: action.payload}
        }
        default:
            return { ...state };
    }
};
