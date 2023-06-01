import React, { useEffect, useState } from 'react';
import { getAppliedJobs } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import Footer from '../Footer/Footer';

const AppliedJobs = () => {
    const [singleJob, setSingleJob] = useState([]);
    const [jobLocationFilter, setJobLocationFilter] = useState('All');

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setSingleJob(data))
    }, [])

    const savedJobFromDb = getAppliedJobs();
    const saveJobs = [];
    for (const id in savedJobFromDb) {
        const addedJob = singleJob.find(jb => jb.id == id);
        if (addedJob) {
            saveJobs.push(addedJob);
        }
    }

    const handleLocationFilter = (location) => {
        setJobLocationFilter(location);
    };

    const filteredJobs = jobLocationFilter === 'All' ? saveJobs : saveJobs.filter(job => job.job_location === jobLocationFilter);

    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl mt-3'>Applied Jobs</h1>
            <div className='flex justify-end'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 text-black bg-base-100 hover:bg-gray-300">Filter by</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleLocationFilter('All')}><a>All</a></li>
                        <li onClick={() => handleLocationFilter('Onsite')}><a>Onsite</a></li>
                        <li onClick={() => handleLocationFilter('Remote')}><a>Remote</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center mt-10'>

                <div className='space-y-4'>
                    {
                        filteredJobs.map(saveJob => <AppliedJob
                            key={saveJob.id}
                            saveJob={saveJob}
                        ></AppliedJob>)
                    }
                </div>
            </div>

        </div>
    );
};


export default AppliedJobs;

