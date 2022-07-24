import { message } from "antd";
import { getClass, getEducation, getSubject } from "../../../services/homeServices/homeServices";
import { GET_CLASS, GET_EDUCATION } from "./homeTypes";

export const confirmGetClass = (payload) => {
    return {
        type: GET_CLASS,
        payload,
    }
}

export const confirmGetEducation = (payload) => {
    return {
        type: GET_EDUCATION,
        payload,
    }
}

export const getAllClassAction = (id) => {
    return async dispatch => {
        try {
            const result = await getClass(id);
            dispatch(confirmGetClass(result.data.docs))
        } catch (err) {
            message.error(err.response.data)
        }
    }
}

export const getClassAction = (id, type) => {
    return async dispatch => {
        if (type === "STUDENT") {
            try {
                const subject = await getSubject(id, "educations");
                dispatch(confirmGetClass(subject.data.docs));
            } catch (err) {
                message.error(err.response.data)
            }
        } else if(type === "PUPIL") {
            try {
                const result = await getClass(id);
                const allClass = result.data.docs;
                message.error("action", allClass);
                let arraySubject = [];
                for (let i = 0; i < allClass.length; i++) {
                    const subject = await getSubject(allClass[i].id, "classes");
                    const item = {
                        class: allClass[i],
                        subject: subject.data.docs
                    }
                    arraySubject.push(item);
                }
                dispatch(confirmGetClass(arraySubject));
            } catch (err) {
                message.error(err.response.data)
            }
        }
    }
}

export const getEducationAction = () => {
    return async dispatch => {
        try {
            const educations = await getEducation();

            dispatch(confirmGetEducation(educations.data.docs))
        } catch (err) {
            message.error(err.response.data)
        }
    }
}

