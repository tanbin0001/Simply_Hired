import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'
const Header = () => {
    return (
        <div>
            <div className="hero min-h-full bg-[#7E90FE0D]">
                <div className="hero-content   flex-col lg:flex-row">
                    <div className=" ">
                        <h1 className="text-5xl font-bold">Why Are You <span className='text-blue-700'>Frustrated?</span> </h1>
                        <h3 className='mt-3'>Don't Worry! You will Simply Hired</h3>
                        <p className="py-6">Simply_Hire is a job listing website that provides an easy and convenient way for job seekers to find suitable job opportunities. </p>
                        <button className=" btn bg-gradient-to-t from-[#7E90FE] to-[#9873FF]  border-none">Get Started</button>
                    </div>
                    <div>
                        <img className='-mb-3' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;