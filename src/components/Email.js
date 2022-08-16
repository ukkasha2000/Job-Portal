import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const Email = () => {
    const formValues  = useSelector((state) => state.FormReducer);
    return (
        <>
            <Form labelName={"Email"} inpType={"email"} buttonText={"Next"} inputPattern={"[A-Za-z0-9_.]{3,}[@][A-Za-z]{3,}[.][A-Za-z]{2,}"} currentValue={formValues.email} displayClass={'block'} errorMsg={""} />
        </>
    )
}

export default Email