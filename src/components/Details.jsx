import React from 'react'
import { BiDollar } from "react-icons/bi"
import { MdOutlineSubtitles } from "react-icons/md"
import { BsTelephoneOutbound } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"
import bg from "../assets/images/bg1.png"
import { saveJobApplication } from '../config/localstorage'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Details = ({ job }) => {
    const navigate = useNavigate()
    const handelAppliedJob = () => {
        const exsis = saveJobApplication(job.id);
        if (exsis) {
            return toast.error("Already applied");
        } else {
            toast.success("Applied successfully");
            setTimeout(() => {
                navigate("/applied-jobs")
            }, 1000);

        }

    }
    return (
        <div className=' m-h-screen'>
            <div className="hero h-72" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-sm">
                        <h1 className="mb-5 text-3xl font-bold">Job Details</h1>

                    </div>
                </div>
            </div>
            <div className='mt-20 '>
                <div className="flex flex-col  lg:flex-row max-w-5xl mx-auto">
                    <div className="grid w-[100%] lg:w-[20%]  p-8 text-ellipsis flex-grow  card bg-base-300 rounded-box place-items-center space-y-8">
                        <h1 ><strong className='text-white underline'>Job Description </strong> : {job.job_description}</h1>
                        <h1 ><strong className='text-white underline'>Job Responsibility </strong> : {job.job_responsibility}</h1>
                        <div className='mr-auto space-y-8'>
                            <h1 className='text-xl font-semibold text-white'>Educational Requirements: </h1>
                            <p>{job.educational_requirements}</p>
                            <h1 className='text-xl font-semibold text-white'>Experiences: </h1>
                            <p>{job.experiences}</p>
                        </div>
                    </div>

                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid  w-[100%] lg:w-[20%] p-8 flex-grow   bg-base-300 rounded-box place-items-left">
                        <div>
                            <h1 className='text-xl font-bold '>Job Details</h1>
                            <div className='h-[1px] mt-6 bg-gray-500 w-full'></div>
                            <div className='mt-16  flex items-center gap-1 text-xl'>
                                <BiDollar size={20} />
                                <h2><strong className='text-white'>Salary : </strong>{job.salary}</h2>
                            </div>
                            <div className='mt-5  flex items-center gap-1 text-xl'>
                                <MdOutlineSubtitles size={20} />
                                <h2><strong className='text-white'>Job Title  : </strong>{job.job_title}</h2>
                            </div>
                            <h1 className='text-2xl  mt-9 '>Contact Information</h1>
                            <div className='h-[1px] mt-6 bg-gray-500 w-full'></div>

                            <div className='mt-12 flex items-center gap-3'>
                                <BsTelephoneOutbound />
                                <h1><strong className='text-white'>Phone :</strong> {job.contact_information.phone}</h1>
                            </div>
                            <div className='mt-3 flex items-center gap-3'>
                                <AiOutlineMail />
                                <h1><strong className='text-white'>Email :</strong> {job.contact_information.email}</h1>
                            </div>
                            <div className='mt-3 flex items-center gap-3'>
                                <IoLocationOutline />
                                <h1><strong className='text-white'>Address :</strong> {job.contact_information.address}</h1>
                            </div>
                        </div>
                        <button onClick={handelAppliedJob} className='btn btn-primary capitalize mt-5'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details