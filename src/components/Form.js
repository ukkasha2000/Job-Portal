import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeDOB, changeEmail, changeJobRole, changeName, changePassword } from '../redux/actions/actions';
import { IoArrowBack } from "react-icons/io5";

const Form = ({ labelName, inpType, buttonText, inputPattern, currentValue,displayClass,errorMsg }) => {
    const formValues  = useSelector((state) => state.FormReducer);
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (labelName === "Name") {
            dispatch(changeName(inputValue));
            navigate('email');
        }
        else if (labelName === "Email") {
            dispatch(changeEmail(inputValue));
            navigate('../jobrole');

        }
        else if (labelName === "Job Role") {
            dispatch(changeJobRole(inputValue));
            navigate('../dob');
        }
        else if (labelName === "Date Of Birth") {
            dispatch(changeDOB(inputValue));
            navigate('../password');
        }
        else if (labelName === "Password") {
            dispatch(changePassword(inputValue));
            navigate('../home');
            localStorage.setItem('user', JSON.stringify(formValues));
        }
    }
    useEffect(() => {
        setInputValue(currentValue)
    }, [])
    return (
        <>
            <div className="mainDiv">
                <h2 className='signUpHeading'>
                <span className={displayClass}><button onClick={()=>navigate(-1)}><IoArrowBack /></button></span>
                Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type={inpType} value={inputValue} onChange={(e) => setInputValue(e.target.value)} pattern={inputPattern} 
                         title={errorMsg}  required />
                        <label htmlFor={labelName}>{labelName}</label>
                    </div>
                    <button type="submit">
                        <a>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {buttonText}
                        </a>
                    </button>
                </form>
                {/* <form onSubmit={handleSubmit}>
                    
                    <label htmlFor={labelName}>{labelName}</label>
                    <br />
                    <input type={inpType} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} pattern={inputPattern} required />
                    <br />
                    <button type="submit" className='mt-2'> {buttonText} </button>
                </form> */}

            </div>
        </>
    )
}

export default Form