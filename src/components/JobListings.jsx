

// import jobs from '../jobs.json';

import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';


// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
    const [jobs, setJobs] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {

            const apiUrl = isHome
                // ? 'http://localhost:8000/jobs?_limit=3'
                // : 'http://localhost:8000/jobs';
                ? `api/jobs?_limit=3`
                : `api/jobs`;

            try {

                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);

            } catch (err) {
                console.error('Error fetching jobs:', err);
            } finally {
                setloading(false);
                // throw err; // re-throw for an error boundary to catch it and show an error message
            }
        }

        fetchJobs();
    }, []);


    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
                        {isHome ? `Recent Jobs` : `Browse Jobs`}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {loading
                            // ? (<h2>Loading...</h2>)
                            ? (<Spinner loading={loading} />)
                            : (
                                <>
                                    {/* {jobListings.map((job) => ( */}
                                    {jobs.map((job) => (
                                        <JobListing key={job.id} job={job} />
                                    ))
                                    }
                                </>
                            )
                        }
                    </div>

                </div>





            </section >
        </>
    );
};

export default JobListings