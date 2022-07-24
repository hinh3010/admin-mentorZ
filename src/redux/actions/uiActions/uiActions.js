import { HIDE_HOME_MODAL, SHOW_HOME_MODAL } from "./uiTypes"

export const showHomeModal = (type) => {
    return {
        type: SHOW_HOME_MODAL,
        payload: type
    }
}

export const hideHomeModal = (type) => {
    return {
        type: HIDE_HOME_MODAL,
        payload: type
    }
}