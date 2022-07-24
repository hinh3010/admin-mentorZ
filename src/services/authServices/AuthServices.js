import { confirmLogin, logOut } from "../../redux/actions/authActions/authAction";
import axios from 'axios'
import { BASE_URL } from "../../config/BASE_URL";

export function checkAutoLogin(dispatch, history) {
    const userDetail = JSON.parse(localStorage.getItem("userDetail"));
    if (!userDetail) {
        dispatch(logOut(history));
        return;
    }
    else {
        dispatch(confirmLogin(userDetail));
    }
}

export const loginService = (data) => {
    return axios({
        url: `${BASE_URL}/api/auth/login`,
        method: 'POST',
        data
    })
}

export const registerService = (data) => {
    console.log("service", data)
    return axios({
        url: `${BASE_URL}/api/auth/register`,
        method: 'POST',
        data
    })
}

export const attachmentService = (form) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmQ2NjhjMWFiODIzYjI1ZTliNzFjZmYiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjU4MjE5NDIxLCJleHAiOjE2NTg4MjQyMjF9.c3slw7EbiqzrrEbIDykf_XYpT1-LiJ6e0OKsLR7rPUc';
    return axios({
        url: 'https://file.alo389.vn/cloud-storage/v1/attachment',
        data: form,
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
        },
    });
}