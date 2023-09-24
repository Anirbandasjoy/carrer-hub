import React from 'react'
import userImage from "../assets/images/user.png"

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-20 sm:mt-0">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={userImage} className="sm:max-w-md rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-red-300'>Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn btn-primary rounded-sm capitalize">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero