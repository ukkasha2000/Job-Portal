import { NAME, EMAIL, JOB_ROLE, DOB, PASSWORD } from "../Types";

export const changeName = (value) => {
    return (dispatch) => {
        dispatch({
            type: NAME,
            payload: value,
        })
    };
};

export const changeEmail = (value) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL,
            payload: value,
        })
    };
};

export const changeJobRole = (value) => {
    return (dispatch) => {
        dispatch({
            type: JOB_ROLE,
            payload: value,
        })
    };
};

export const changeDOB = (value) => {
    return (dispatch) => {
        dispatch({
            type: DOB,
            payload: value,
        })
    };
};

export const changePassword = (value) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD,
            payload: value,
        })
    };
};