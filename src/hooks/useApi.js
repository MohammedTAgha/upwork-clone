import { useState, useEffect } from 'react';
import axios from 'axios';

const useJobData = (searchQuery = '', jobId = null) => {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
          // Fetch all jobs and filter based on the search query
          response = await axios.get('http://localhost:5000/jobs');
          let jobs = response.data;
  
          // If jobId is provided, filter the jobs to get the specific job
          if (jobId) {
            console.log('id exist')
            const job = jobs.find(job => job.jobsId == jobId);  
            setJobData(job ? [job] : []);
          } else {
            console.log('id no')
            // Filter jobs based on the search query
            const filteredJobs = jobs.filter(job =>
              job.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setJobData(filteredJobs);
          }
        
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, jobId]);
  return { jobData, loading, error };
};

export default useJobData;
