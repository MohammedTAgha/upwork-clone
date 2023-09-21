"use client";

import { StyledFlex ,StyledBox ,StyledSidebar} from "@/styles/common";
// import { Avatar } from "@mui/material";
import { Heading, MainHeading, Body } from "@/components/atoms/Typography/";
import colors from "@/constants/colors";

import { Avatar, Box, Stack, Typography, Divider, Slider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

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
        
      <Stack
        direction='column'
        alignItems='flex-center'
        sx={{ width: '100%' }}
        spacing={0.5}>
        <Box sx={{ width: '100%', background: '#E4EBE4', padding: ' 1rem' }}>
          <Typography
            sx={{
              fontSize: '12px',
              color: '#001e00',
              cursor: 'pointer',
              '&:hover': {
                color: '#14a800',
                textDecoration: 'underline',
              },
            }}
            variant='body2'>
            Profile Completeness:{' '}
          </Typography>

          <Slider
            sx={{
              '& .css-eg0mwd-MuiSlider-thumb': {
                display: 'none',
              },
              '& .css-jiy7vy-MuiSlider-root': {
                width: '100%',
              },
              '& .css-1gv0vcd-MuiSlider-track': {
                backgroundColor: '#14a800',
              },
            }}
            disabled
            value={100}
            aria-label='Disabled slider'
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{
              padding: '1rem',
              fontSize: '12px',
              color: '#14a800',
              cursor: 'pointer',

              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            variant='body2'>
            200 Available Connects
          </Typography>
          <Divider sx={{ width: '100%' }} />
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Typography
              sx={{
                padding: ' 1rem 0 1rem 1rem ',
                fontSize: '15px',
                color: '#001e00',
                cursor: 'pointer',
              }}
              variant='body2'>
              Availability Badge
            </Typography>
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: '#ddd',
                },
              }}>
              <EditIcon
                sx={{
                  color: '#14a800',
                }}
              />
            </Box>
          </Stack>
          <Divider sx={{ width: '100%' }} />
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Typography
              sx={{
                padding: '0 0 0 1rem',
                fontSize: '15px',
                color: '#001e00',
                cursor: 'pointer',
              }}
              variant='body2'>
              Hours per week
            </Typography>
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: '#ddd',
                },
              }}>
              <EditIcon
                sx={{
                  color: '#14a800',
                }}
              />
            </Box>
          </Stack>
          
          <Typography
            sx={{
              padding: '0 1rem 1rem ',
              fontSize: '12px',
              color: '#001e00',
              cursor: 'pointer',
            }}
            variant='body2'>
            More than 30 hrs/week{' '}
          </Typography>
          <Divider sx={{ width: '100%' }} />

          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Typography
              sx={{
                padding: '0 0 0 1rem',
                fontSize: '15px',
                color: '#001e00',
                cursor: 'pointer',
              }}
              variant='body2'>
              Profile Visibility
            </Typography>
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: '#ddd',
                },
              }}>
              <EditIcon
                sx={{
                  color: '#14a800',
                }}
              />
            </Box>
          </Stack>
          <Typography
            sx={{
              padding: '0 1rem 1rem  ',
              fontSize: '12px',
              color: '#001e00',
              cursor: 'pointer',
            }}
            variant='body2'>
            Upwork Users Only
          </Typography>
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Typography
              sx={{
                padding: '0 0 0 1rem',
                fontSize: '15px',
                color: '#001e00',
                cursor: 'pointer',
              }}
              variant='body2'>
              Job Preference
            </Typography>
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: '#ddd',
                },
              }}>
              <EditIcon
                sx={{
                  color: '#14a800',
                }}
              />
            </Box>
          </Stack>
          <Typography
            sx={{
              padding: '0 1rem 1rem',
              fontSize: '12px',
              color: '#001e00',
              cursor: 'pointer',
            }}
            variant='body2'>
            No preference set
          </Typography>
          <Divider sx={{ width: '100%' }} />
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Typography
              sx={{
                padding: '0 0 0 1rem',
                fontSize: '15px',
                color: '#001e00',
                cursor: 'pointer',
              }}
              variant='body2'>
              My Categories
            </Typography>
            <Box
              sx={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: '#ddd',
                },
              }}>
              <EditIcon
                sx={{
                  color: '#14a800',
                }}
              />
            </Box>
          </Stack>
          <Typography
            sx={{
              padding: '0 1rem',
              fontSize: '12px',
              color: '#14a800',
              cursor: 'pointer',
            }}
            variant='body2'>
            Web Development
          </Typography>
        </Box>
      </Stack>
      </StyledFlex>
      </StyledBox>
      </StyledSidebar>
    )
}

export default SideBar