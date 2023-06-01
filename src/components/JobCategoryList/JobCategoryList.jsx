import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const JobCategoryList = () => {
    const [jobCategories, setJobCategories] = useState([]);
    useEffect(() => {
        fetch('/jobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
    }, [])
    return (
        <section className=' mt-32 space-y-3'>
            <h1 className='text-center font-bold text-3xl'>Job Category Lists</h1>

            <p className='text-center'>Here are some job categories you should apply <span className='text-blue-700 font-bold'>NOW!</span> </p>
            <div className='flex justify-center '>
                <div className='grid lg:grid-cols-4 gap-10 grid-cols-1'>
                    {
                        jobCategories.map(job => <SingleJob
                            key={job.id}
                            job={job}
                        ></SingleJob>)
                    }
                </div>
            </div>
        </section>
    );
};

export default JobCategoryList;