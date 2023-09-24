import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5"
import { BsCurrencyDollar } from "react-icons/bs"

const Job = ({ job }) => {
    return (
        <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={job.logo} alt={job.job_title} />
            <h5 className="mb-2 text-left mt-5 font-semibold tracking-tight text-gray-900 dark:text-white">{job.job_title}</h5>

            <p className="mb-3 text-left font-normal text-gray-500 dark:text-gray-400">{job.company_name}</p>
            <div className='text-left space-x-1 '>
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Remote</button>
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Full Time</button>
            </div>
            <div className="text-left flex items-center gap-3 text-gray-400 mt-1">
                <div className='flex items-center gap-1'>
                    <IoLocationOutline />
                    <p>{job.location}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <BsCurrencyDollar />
                    <p>Salary : {job.salary}</p>
                </div>
            </div>

            <div className='text-left mt-4'>
                <Link to={`job-details/${job.id}`} state={job.id} className="inline-flex items-center text-blue-600 hover:underline">
                    View Details
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </Link>
            </div>
        </div>

    )
}

export default Job