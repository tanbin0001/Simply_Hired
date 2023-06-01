import React from 'react';

const SingleJob = ({ job }) => {
    const { img, category, availableJobs } = job;
    return (
        <div >
            <div className="card w-[230px] bg-[#7E90FE0D] shadow-xl rounded-none">
                <figure><img src={img} className='mt-5' /></figure>
                <div className="card-body">
                    <h2 className=" font-bold">{category}</h2>
                    <p className='text-sm'>{availableJobs}+ jobs available</p>

                </div>
            </div>
        </div>
    );
};

export default SingleJob;