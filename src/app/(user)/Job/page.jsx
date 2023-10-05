"use client";
import JobPage from "@/components/pages/JobPage";
import styled from "styled-components";

import { StyledPage } from "@/styles/common";
import { Typography } from "@mui/material";
const Job = () => {
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
      <Typography variant="h5" sx={{ margin: "14px" }}>
        Job details
      </Typography>
      <JobPage />
    </StyledPage>
  );
};

export default Job;
