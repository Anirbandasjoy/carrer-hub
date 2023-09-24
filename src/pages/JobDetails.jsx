import React, { useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import Details from '../components/Details';


const JobDetails = () => {

    const { state } = useLocation();
    const { data } = useLoaderData();
    const findJob = data.find((job) => job.id === state);


    return (
        <div>
            <Details job={findJob} />
        </div>
    )
}

export default JobDetails