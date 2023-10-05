import { useState, useEffect } from 'react';
import axios from 'axios';

const useJobData = () => {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');  // Adjust URL as needed
        setJobData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { jobData, loading, error };
};

export default useJobData;
