import { HIDE_HOME_MODAL, SET_TEXT, SHOW_HOME_MODAL } from "../actions/uiActions/uiTypes";

const initialState = {
    isShowHomeModal: false,
    isText: true,
    isImage: false,
    isVideo: false,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HOME_MODAL: {
            switch (action.payload) {
                case "text": {
                    state.isText = true;
                    state.isImage = false;
                    state.isVideo = false;
                    break;
                }
                case "image": {
                    state.isText = false;
                    state.isImage = true;
                    state.isVideo = false;
                    break;
                }
                case "video": {
                    state.isText = false;
                    state.isImage = false;
                    state.isVideo = true;
                    break;
                }
                default: return { ...state }
            }

            return {
                ...state,
                isShowHomeModal: true,
            };
        }
        case HIDE_HOME_MODAL: {
            return { ...state, isShowHomeModal: false };
        }
        default:
            return { ...state };
    }
};
