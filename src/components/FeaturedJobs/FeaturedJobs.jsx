

import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    const handleSeeMoreClick = () => {
        setDisplayCount(displayCount + 2);
    }

    return (
        <div className='mt-32 flex justify-center'>
            <div>
                <h1 className='text-center font-bold text-3xl'>  Featured Jobs
                </h1>


                <p className='text-center'>Top rated  <span className='text-orange-600 font-bold'>Companies!</span> </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10    mt-10  '>
                    {
                        featuredJobs.slice(0, displayCount).map(featuredJob => (
                            <FeaturedJob
                                key={featuredJob.id}
                                featuredJob={featuredJob}
                            />
                        ))
                    }
                </div>
                {featuredJobs.length > displayCount && (

                    <div className='flex justify-center my-10'>
                        <button onClick={handleSeeMoreClick} className="btn w-60 rounded-none   bg-gradient-to-t from-[#7E90FE] to-[#9873FF]  border-none">See More</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeaturedJobs;