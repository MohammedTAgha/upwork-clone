"use client";
import JobPage from '@/components/pages/JobPage'
import styled from "styled-components";

import {StyledPage} from '@/styles/common'
import { Typography } from '@mui/material';
const Job = () => {
//      const StyledPage = styled.div` 
//   width: ${(props) => props.width};
//   // min-height: 100vh;
//   margin-top: 40px;
// `;
    return (
          <StyledPage col width="100%" paddingX='30px' sx={{
            maxWidth: '960px', // Set the desired max width
          }} alignItems={'flex-start'}>
         
            <Typography variant='h5' sx={{margin:'14px'}}>
            Job details
            </Typography>
            <JobPage/>
            </StyledPage>
        
    )

}

export default Job;