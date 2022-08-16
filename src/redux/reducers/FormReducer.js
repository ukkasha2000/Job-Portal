import { NAME, EMAIL, JOB_ROLE, DOB, PASSWORD } from "../Types";

const INITIAL_STATE = {
    name: "",
    email: "",
    jobRole: "",
    dateOfBirth: "",
    password: "",
    // formSubmissions: [],
};

const FormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME:
            state.name = action.payload;
            return { ...state };

        case EMAIL:
            state.email = action.payload;
            return { ...state };

        case JOB_ROLE:
            state.jobRole = action.payload;
            return { ...state };

        case DOB:
            state.dateOfBirth = action.payload;
            return { ...state };

        case PASSWORD:
            state.password = action.payload;
            // state.formSubmissions.push({ name: state.name, email: state.email, jobRole: state.jobRole, dateOfBirth: state.dateOfBirth, password: state.password });
            return { ...state };

        default:
            return state;
    }
}

export default FormReducer;