import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const JobRole = () => {
    const formValues  = useSelector((state) => state.FormReducer);
    return (
        <>
            <Form labelName={"Job Role"} inpType={"text"} buttonText={"Next"} inputPattern={"[A-Za-z ]{1,}"} currentValue={formValues.jobRole} displayClass={'block'} errorMsg={"Please Use Only Alphabets and Spaces"} />
        </>
    )
}

export default JobRole