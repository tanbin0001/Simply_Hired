import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {
    const { id, img, designation, company, company_location, salary, job_type, job_location } = featuredJob;
    return (
        <div>
            <div className="  w-96 bg-base-100 border-2 shadow-xl">
                <figure><img className='pt-4 pl-4' src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{designation}</h2>

                    <p className='text-[#757575]'>{company}</p>
                    <div className='space-x-2'>
                        <button className="  btn btn-outline rounded-none border-[#7E90FE] text-[#9873FF]">{job_type}</button>

                        <button className="btn btn-outline rounded-none text-[#7E90FE] border-[#9873FF]">{job_location}</button>
                        <div className='flex  my-2'>
                            <p className='text-[#757575]'>  <FontAwesomeIcon icon={faLocationDot} /> {company_location}</p>
                            <p className='text-[#757575]'>  <FontAwesomeIcon icon={faDollar} /> {salary}</p>

                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/featuredJob/${id}`}>
                            <button className="btn btn-primary   rounded-none   bg-gradient-to-t from-[#7E90FE] to-[#9873FF]  border-none">View details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;