import { FETCH_LESSONS_FAILED, FETCH_LESSONS_REQUEST, FETCH_LESSONS_SUCCESS } from '../actions/lessonAction/type';
import { FETCH_LESSON_BY_ID_FAILED, FETCH_LESSON_BY_ID_REQUEST, FETCH_LESSON_BY_ID_SUCCESS } from '../actions/lessonAction/type';

const initialStateLessons = {
    pending: false,
    success: false,
    data: null,
    message: null
};

export const lessonReducer = (state = initialStateLessons, actions) => {
    switch (actions.type) {
        case FETCH_LESSONS_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_LESSONS_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: actions.payload,
            }
        case FETCH_LESSONS_FAILED:
            return {
                ...state,
                requesting: false,
                success: false,
                messages: actions.payload,
            }
        default:
            return { ...state };
    }
};


const initialStateLessonById = {
    pending: false,
    success: false,
    data: null,
    message: null
};

export const lessonByIdReducer = (state = initialStateLessonById, actions) => {
    switch (actions.type) {
        case FETCH_LESSON_BY_ID_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_LESSON_BY_ID_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: actions.payload,
            }
        case FETCH_LESSON_BY_ID_FAILED:
            return {
                ...state,
                requesting: false,
                success: false,
                messages: actions.payload,
            }
        default:
            return { ...state };
    }
};

