import axios from "axios"
import { BASE_URL } from "../../config/BASE_URL"

export const getClass = (id) => {
    return axios({
        url: `${BASE_URL}/api/class?educationId=${id}`,
        method: "GET"
    })
}

export const getEducation = () => {
    return axios({
        url: `${BASE_URL}/api/education`,
        method: "GET"
    })
}

export const getSubject = (id, type) => {
    return axios({
        url: `${BASE_URL}/api/subject/?classId=${id}&onModel=${type}`,
        method: "GET"
    })
}