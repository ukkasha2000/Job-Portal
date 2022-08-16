import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const DateOfBirth = () => {
    const formValues  = useSelector((state) => state.FormReducer);
    return (
        <>
            <Form labelName={"Date Of Birth"} inpType={"date"} buttonText={"Next"} inputPattern={""} currentValue={formValues.dateOfBirth} displayClass={'block'} />
        </>
    )
}

export default DateOfBirth