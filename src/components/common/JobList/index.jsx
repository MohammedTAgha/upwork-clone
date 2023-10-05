import React from 'react';
import JobCard from "@/components/molecules/JopCard";

const JobList = ({ jobData, handleDrawerOpen }) => {
  if (!jobData || jobData.length === 0) {
    return <p>No jobs found yet.</p>;
  }

  return (
    <div>
      {jobData.map((job) => (
        <JobCard key={job.jobsId} job={job} {...job} onClick={() => handleDrawerOpen(job)} />
      ))}
    </div>
  );
};

export default JobList;
