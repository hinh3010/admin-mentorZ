import axios from 'axios'
import { BASE_URL } from "../../config/BASE_URL";

export const getLissons = () => {
    return axios({
        url: `${BASE_URL}/api/lesson`,
        method: 'GET',
    })
}

export const getLissonById = (payload) => {
    return axios({
        url: `${BASE_URL}/api/lesson/${payload}`,
        method: 'GET',
    })
}