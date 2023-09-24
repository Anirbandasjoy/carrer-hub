import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getLocalstorageData } from '../config/localstorage';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
const AppliedJobs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([])
    const { data } = useLoaderData();
    useEffect(() => {
        const storedJobId = getLocalstorageData();
        if (data.length) {
            const appliedJob = data.filter((job) => storedJobId.includes(job.id));
            setAppliedJobs(appliedJob);
            setDisplayJob(appliedJob);
        }
    }, []);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleFilter = (filter) => {
        if (filter === "all") {
            setDisplayJob(appliedJobs)
        } else if (filter === "remote") {
            const remoteJob = appliedJobs.filter((job) => job.remote_or_onsite === "Remote");
            setDisplayJob(remoteJob)
        } else if (filter === "onsite") {
            const onSiteJob = appliedJobs.filter((job) => job.remote_or_onsite === "Onsite");
            setDisplayJob(onSiteJob)
        }
    }
    return (
        <div className='min-h-screen mt-20 flex items-start justify-center'>
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Jobs</h5>
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                            onClick={toggleDropdown}
                        >
                            <span>Filters</span>
                            <div className=''>
                                {
                                    isOpen ? <AiFillCaretUp className="ml-2" /> : <AiFillCaretDown className="ml-2" />
                                }
                            </div>
                        </button>
                        {isOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                                <div className="py- ">
                                    {/* Filter fields go here */}
                                    <div onClick={() => handleFilter("all")} className="px-4 py-2 cursor-pointer hover:bg-slate-500 text-gray-800">All</div>
                                    <div onClick={() => handleFilter("remote")} className="px-4 py-2 cursor-pointer hover:bg-slate-500 text-gray-800">Remote</div>
                                    <div onClick={() => handleFilter("onsite")} className="px-4 py-2 cursor-pointer hover:bg-slate-500 text-gray-800">Onsite</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flow-root max-h-[25rem] overflow-y-auto">
                    {displayJob.map((appliedjob, index) => {
                        return <ul key={index} role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-6">
                                    <div className="flex-shrink-0 bg-slate-300 py-6 rounded-sm px-3">
                                        <img className='md:w-32 w-10' src={appliedjob.logo} alt={appliedjob.job_title} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {appliedjob.job_title}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {appliedjob.company_name}
                                        </p>
                                        <div className='flex items-center gap-2 '>
                                            <p className="text-xs text-red-200 truncate dark:text-red-200">
                                                #{appliedjob.remote_or_onsite}
                                            </p>
                                            <p className="text-xs text-red-200 truncate dark:text-red-200">
                                                #{appliedjob.job_type}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button className='btn mr-3 border border-emerald-800 text-white hover:bg-transparent capitalize'>View Details</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    })}
                </div>
            </div>
        </div>

    )
}

export default AppliedJobs