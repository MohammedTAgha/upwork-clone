"use client";

import { StyledFlex ,StyledBox ,StyledSidebar} from "@/styles/common";
import { Avatar } from "@mui/material";
import { Heading, MainHeading, Body } from "@/components/atoms/Typography/";
import colors from "@/constants/colors";


const SideBar = () => {


    return(
        <StyledSidebar>
      <StyledBox>
      <StyledFlex flexDirection='column' >
        <Avatar
                alt="user name"
                src="assets/images/avatar.jpg"
                sx={{ width: 56, height: 56 }}
                />
        <Heading>
            Mohammed . T
        </Heading>
        <Body color={colors.gray600Color}>
        Full stack developer 
        </Body>
        </StyledFlex>
      </StyledBox>
      
      </StyledSidebar>
    )
}

export default SideBar