import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const Password = () => {
    const formValues  = useSelector((state) => state.FormReducer);
    return (
        <>
            <Form labelName={"Password"} inpType={"password"} buttonText={"Submit"} inputPattern={"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"} currentValue={formValues.password} displayClass={'block'} errorMsg={"Your Password should be atleast 8 characters long and should contain atleast one Uppercase letter, one Lowercase letter & a number"} />
        </>
    )
}

export default Password