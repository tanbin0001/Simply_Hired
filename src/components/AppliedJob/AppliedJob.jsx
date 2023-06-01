import { faDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({ saveJob }) => {
    console.log(saveJob);
    const { id, img, company, salary, company_location, job_location, job_type, designation } = saveJob;
    return (
        <div>

            <div className='flex items-center w-[650px] border p-4'>
                <div>
                    <img className='bg-gray-200 px-5 py-10' src={img} alt="" />
                </div>
                <div className='flex items-center justify-between w-[100%] pl-4'>
                    <div className='space-y-3'>
                        <h1 className='font-bold'>{designation}</h1>
                        <h2 className='text-gray-500'>{company}</h2>
                        <div className='space-x-3'>
                            <button class="  btn btn-outline rounded-none border-[#7E90FE] text-[#9873FF]">{job_location}</button>
                            <button class="btn btn-outline rounded-none text-[#7E90FE] border-[#9873FF]">{job_type}</button>
                        </div>

                        <div className='flex  space-x-2'>
                            <p className='text-[#757575]'>  <FontAwesomeIcon icon={faLocationDot} /> {company_location}</p>
                            <p className='text-[#757575]'>  <FontAwesomeIcon icon={faDollar} /> {salary}</p>

                        </div>
                    </div>
                    <Link to={`/featuredJob/${id}`}>
                        <button className="btn btn-primary   rounded-none   bg-gradient-to-t from-[#7E90FE] to-[#9873FF]  border-none">View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;



