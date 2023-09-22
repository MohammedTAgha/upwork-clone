"use client";
import { StyledFlex ,StyledBox ,StyledSidebar} from "@/styles/common";
import colors from "@/constants/colors";
import { Avatar, Box, Stack, Typography, Divider, Slider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {StyledMainBox , StyleSideBox} from './style'
import { Heading, MainHeading, Body ,SmallText } from "@/components/atoms/Typography/";


const Job = () => {
    const containerStyle = {
        border: '1px solid #ccc',
        width:'100%',
        borderRadius: '10px', 
      };
    
      const leftBoxStyle = {
        width: '75%',
        borderRight: '1px solid #ccc',
      };
    
      const rightBoxStyle = {
        width: '25%',
      };
    return (
        <Box display="flex" style={containerStyle}>
        <Box style={{ ...leftBoxStyle, padding: '20px' }}>
          <Heading >
          Configure NodeJS app with Google Auth
          </Heading>
          <Body hover>
          Full Stack Development
          </Body>
          <SmallText color={colors.gray600Color}>
          Posted 11 hours ago
          </SmallText>
          <Divider width='100%'/>
          <Body>
          I need someone to help me configure an existing webapp using ReactJS (frontend), NodeJS (backend), GoogleAPI (authentication) and MongoDB (database). Im trying to have it running in a VM (Azure) and to use a domain name.
          </Body>
        </Box>
        



        <Box style={{ ...rightBoxStyle, padding: '20px' }}>
 
        </Box>
      </Box>
    )
    }
export default Job;