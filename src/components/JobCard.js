import React from 'react';
import { AiFillStar } from "react-icons/ai";


const JobCard = ({ data,starToShow }) => {
    let text1 = "", text2 = "", check = true;
    if (data.title.includes(')')) {
        text1 = data.title.split(')');
        check = true;
    }
    else {
        text2 = data.title.split('is');
        check = false;
    }
    const newDate = new Date(data.time);
    const dateToShow = {
        date: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear()
    }

    return (
        // <div>
        <div className="card mt-3">
            <a className='cardLink' href={data.url ? data.url : `https://news.ycombinator.com/item?id=${data.id}`} target='blank'>
                <div className="card-body">
                    <h4 className="card-title">{check ? text1[0] + ')' : text2[0]}</h4>
                    {/* text1[0].includes(starToShow) || text2[0].includes(starToShow)  ? <span className='starSpan'><AiFillStar /></span> : <span></span> */}
                    <p className="card-text">{check ? text1[1] : 'is ' + text2[1]}{text1[1].toLowerCase().includes(starToShow.toLowerCase()) ? <span className='starSpan'><AiFillStar /></span> : <span></span>}</p>
                    <p className="card-date">{`${dateToShow.month}/${dateToShow.date}/${dateToShow.year}`}</p>
                </div>
            </a>
        </div>
        // </div>
    )
}

export default JobCard;