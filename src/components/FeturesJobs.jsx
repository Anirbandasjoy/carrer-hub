import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Job from './Job';
const url = "../jobs.json"
const FeturesJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    const fetchData = async (url) => {
        const { data } = await axios.get(url);
        setJobs(data);
    }
    useEffect(() => {
        fetchData(url)
    }, [url])
    return (
        <div>
            <div className='space-y-3'>
                <h1 className='text-center text-2xl text-white font-semibold'>Featured Jobs</h1>
                <p className='text-center  text-gray-400 text-xs '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 text-center max-w-4xl mx-auto mt-14 gap-4'>
                {
                    jobs.slice(0, dataLength).map((job) => <Job key={job.id} job={job} />)
                }
            </div>
            <div className='text-center mt-5'>
                <button onClick={() => {
                    dataLength <= 4 ? setDataLength(jobs.length) : setDataLength(4)
                }} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">{dataLength <= 4 ? "See more" : "Less more"}</button>


            </div>
        </div>
    )
}

export default FeturesJobs