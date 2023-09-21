"use client";
import JobPage from '@/components/pages/JobPage'
import styled from "styled-components";

import {StyledPage} from '@/styles/common'
const Job = () => {
//      const StyledPage = styled.div` 
//   width: ${(props) => props.width};
//   // min-height: 100vh;
//   margin-top: 40px;
// `;
    return (
          <StyledPage width="77%">
            <JobPage/>
            </StyledPage>
        
    )

}

export default Job;