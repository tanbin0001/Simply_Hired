import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBuilding, faCalendar, faDollar, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const JobDetailsSideBar = ({ matchedJob, handleApplyNowBtn }) => {
    const { id, salary, designation, phone, email, company_location, company } = matchedJob;
    return (
        <div className='bg-gradient-to-tr from-[#7E90FE1A] to-[#9873FF1A] w-64 p-5 m-2 ' >
            <h1 className='font-bold py-2'>Job Details</h1>
            <hr />
            <div className='text-sm py-4 space-y-2'>
                <h3 className='text-xs'> <FontAwesomeIcon className='text-[#9873FF]' icon={faBuilding} />   <span className='font-bold'> Company:</span> {company} </h3>
                <h3 className='text-xs'> <FontAwesomeIcon className='text-[#9873FF]' icon={faDollar} />   <span className='font-bold'> Salary:</span> {salary} </h3>
                <h3 className='text-xs'> <FontAwesomeIcon className='text-[#9873FF]' icon={faCalendar} /> <span className='font-bold'> Job Title:</span> {designation} </h3>
            </div>
            <h1 className='font-bold py-2'>Contact Information</h1>
            <hr />
            <div className='text-sm py-4 space-y-2'>
                <h3 className='text-xs'> <FontAwesomeIcon className='text-[#9873FF]' icon={faPhone} />   <span className='font-bold'> Phone:</span> {phone} </h3>
                <h3 className='text-xs'> <FontAwesomeIcon className='text-[#9873FF]' icon={faEnvelope} /> <span className='font-bold'>Email:</span> {email} </h3>
                <h3 className='text-xs'> <FontAwesomeIcon className='text-[#9873FF]' icon={faLocationDot} /> <span className='font-bold'> Address:</span> {company_location} </h3>
            </div>
            <button onClick={() => { handleApplyNowBtn(id) }} className=" btn bg-gradient-to-t from-[#7E90FE] to-[#9873FF]  border-none rounded-none">Apply Now</button>
        </div>
    );
};

export default JobDetailsSideBar;