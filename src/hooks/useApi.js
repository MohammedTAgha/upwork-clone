import { useState, useEffect } from 'react';
import axios from 'axios';

const useJobData = (searchQuery = '') => {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');  // Adjust URL as needed

        // Filter jobs based on the search query
        const filteredJobs = response.data.filter(job =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setJobData(filteredJobs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return { jobData, loading, error };
};

export default useJobData;
