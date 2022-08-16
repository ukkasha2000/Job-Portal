import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const Name = () => {
    const formValues  = useSelector((state) => state.FormReducer);
    return (
        <>
            <Form labelName={"Name"} inpType={"text"} buttonText={"Next"} inputPattern={"[A-Za-z ]{1,}"} currentValue={formValues.name} displayClass={'hidden'} errorMsg={"Please Use Only Alphabets and Spaces"}/>
        </>
    )
}

export default Name