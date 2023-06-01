


import React, { useState, useEffect } from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';
import JobDetailsSideBar from '../JobDetailsSideBar/JobDetailsSideBar';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const { detailsId } = useParams();
    const data = useLoaderData();
    // console.log(data);
    const [matchedJob, setMatchedJob] = useState(null);

    useEffect(() => {
        const matchedJob = data.find(job => job.id === parseInt(detailsId));
        setMatchedJob(matchedJob);
    }, [detailsId, data]);
    // console.log(matchedJob);

    if (!matchedJob) {
        return <div>Loading...</div>;
    }

    const handleApplyNowBtn = id => {
        addToDb(id);
    }
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'> Job Details</h1>
            <div className=' flex mt-10'>
                <div className=' border-2 border-[#9873FF]  space-y-3 p-3 m-3'>
                    <h1 className='text-sm '> <span className='font-bold'>Job Description:</span> <span className='text-[]'> {matchedJob.jobDescription} </span></h1>
                    <h1 className='text-sm'> <span className='font-bold'>Job Responsibility:</span>  <span className='text-[#757575s]'> {matchedJob.job_responsibility} </span> </h1>

                    <h2 className='text-sm'><span className='font-bold'>Educational Requirements:</span>  <br /> {matchedJob.educational_requirements}</h2>
                    <h2 className='text-sm'><span className='font-bold'>Experiences:</span>  <br /> {matchedJob.experiences}</h2>

                </div>
                <div className=' '>
                    <JobDetailsSideBar
                        handleApplyNowBtn={handleApplyNowBtn}
                        matchedJob={matchedJob}
                    ></JobDetailsSideBar>
                </div>

            </div>

        </div>
    );
};

export default JobDetails;
