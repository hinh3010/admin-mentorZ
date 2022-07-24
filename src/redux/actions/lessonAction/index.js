import { getLissonById, getLissons } from "../../../services/lessonService/lessonService"
import { FETCH_LESSONS_FAILED, FETCH_LESSONS_REQUEST, FETCH_LESSONS_SUCCESS } from "./type"
import { FETCH_LESSON_BY_ID_FAILED, FETCH_LESSON_BY_ID_REQUEST, FETCH_LESSON_BY_ID_SUCCESS } from "./type"


export const fetchLessonsRequest = () => async dispatch => {
    try {
        dispatch({
            type: FETCH_LESSONS_REQUEST
        })
        const { data } = await getLissons()

        dispatch({
            type: FETCH_LESSONS_SUCCESS,
            payload: data?.docs
        })
    } catch (error) {
        dispatch({
            type: FETCH_LESSONS_FAILED,
            payload: error.message
        })
    }
}

export const fetchLessonsByIdRequest = (payload) => async dispatch => {
    try {
        dispatch({
            type: FETCH_LESSON_BY_ID_REQUEST
        })
        const { data } = await getLissonById(payload)

        dispatch({
            type: FETCH_LESSON_BY_ID_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FETCH_LESSON_BY_ID_FAILED,
            payload: error.message
        })
    }
}