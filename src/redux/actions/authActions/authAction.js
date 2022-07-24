import { message } from "antd"
import { loginService, registerService } from "../../../services/authServices/AuthServices"
import { CONFIRM_LOGIN, HIDE_SOCIAL, LOG_OUT, SHOW_SOCIAL } from "./authTypes"

export const showSocial = (type) => {
    return {
        type: SHOW_SOCIAL,
        payload: type
    }
}

export const hideSocial = (type) => {
    return {
        type: HIDE_SOCIAL,
        payload: type
    }
}

export const confirmLogin = (data) => {
    localStorage.setItem('userDetail', JSON.stringify(data))
    return {
        type: CONFIRM_LOGIN,
        payload: data
    }
}

export const logOut = (history) => {
    return dispatch => {
        dispatch({
            type: LOG_OUT
        })
    }
}

export const loginAction = (data, history) => {
    return async (dispatch) => {
        try {
            const result = await loginService(data);
            dispatch(confirmLogin(result.data))
            history.push('/admin');
            message.success('Đăng nhập thành công!');
        } catch (err) {
            console.log(err.response.data.message)
            message.error(err.response.data.message);
        }
    }
}

export const logoutAction = (history) => {
    return dispatch => {
        localStorage.removeItem('userDetail');
        history.push('/login')
        dispatch({
            type: LOG_OUT
        })
    }
}

export const registerAction = (data, history) => {
    return async (dispatch) => {
        try {
            console.log(data)
            const result = await registerService(data);
            history.push("/login");
            message.success("Đăng ký thành công, vui lòng chờ admin xét duyệt!!")
        } catch (err) {
            console.log(err.response.data.message)
            message.error(err.response.data.message);
        }
    }
}