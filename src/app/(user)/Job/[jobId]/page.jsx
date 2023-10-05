"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import JobPage from "@/components/pages/JobPage";
import styled from "styled-components";
import useJobData from '@/hooks/useApi';
import { StyledPage } from "@/styles/common";
import { Typography } from "@mui/material";
const Job = ({params}) => {
  // const router = useRouter();

  console.log(params)
  const { jobId } = params;
  const { jobData, loading, error } = useJobData('',jobId);
  console.log(jobData)
  return (
    <StyledPage
      col
      width="100%"
      paddingX="30px"
      sx={{
        maxWidth: "960px", // Set the desired max width
      }}
      alignItems={"flex-start"}
    >
    {jobData && jobData.length != 0? <JobPage job={jobData[0]}/> :<h3>no job</h3>}
    </StyledPage>
  );
};

export default Job;
