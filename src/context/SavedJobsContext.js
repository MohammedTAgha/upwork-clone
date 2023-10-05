import React, { createContext, useState } from 'react';

const SavedJobsContext = createContext();

const SavedJobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);

  const addSavedJob = (job) => {
    setSavedJobs([...savedJobs, job]);
  };

  const removeSavedJob = (jobId) => {
    setSavedJobs(savedJobs.filter((job) => job.jobsId !== jobId));
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, addSavedJob, removeSavedJob }}>
      {children}
    </SavedJobsContext.Provider>
  );
};

export { SavedJobsProvider, SavedJobsContext };
