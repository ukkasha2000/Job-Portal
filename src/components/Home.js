import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

let initialCount = 0, finalCount = 9;
const Home = () => {
    let getJobRole = JSON.parse(localStorage.getItem('user')).jobRole;
    // console.log(getJobRole);
    const [postIDs, setPostIDs] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const axiosInstance = axios.create({
        baseURL: 'https://hacker-news.firebaseio.com/v0/'
    });
    const loadMore = () => {
        initialCount = finalCount;
        finalCount += 6;
        fetchPostById(initialCount, finalCount, postIDs);
    }
    useEffect(() => {
        async function getpostsID() {
            await axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json')
                .then(function (resp) {
                    setPostIDs(resp.data);
                }).catch(function (error) {
                    alert(error);
                })
        }
        getpostsID();
    }, []);
    useEffect(() => {
        fetchPostById(initialCount, finalCount, postIDs);
    }, [postIDs])

    const fetchPostById = (initialCount, finalCount, ids) => {
        const countData = ids.slice(initialCount, finalCount);
        const mapArr = countData?.map((item, index) => {
            const promise = new Promise((resolve, reject) => {
                // axios.get(`https://hacker-news.firebaseio.com/v0//item/${item}.json`)
                axiosInstance({
                    method: "get",
                    url: `/item/${item}.json`,
                })
                    .then((res) => {
                        resolve(res?.data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
            return promise;
        });
        Promise.allSettled(mapArr)
            .then((success) => {
                setPostsData((previousItem) => {
                    return [...previousItem, ...success];
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div className='mainDivHome'>
                <h1 className='mainHeading'>HN Jobs</h1>
                <div className="container jobListDiv">
                    <div className="row">
                        {postsData.map((currentElement, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-12 mt-3" key={index}>
                                    <JobCard data={currentElement.value} starToShow={getJobRole}/>
                                </div>
                            )

                        })}
                    </div>
                    <div className="loadMoreButtonDiv row mt-4">
                        <button className='loadMoreButton' onClick={()=>loadMore()}>Load More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
