import { Input, Button } from '@mui/joy';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import './style.css';
import { FcGoogle } from 'react-icons/fc';
import AppleIcon from '@mui/icons-material/Apple';

const LoginForm = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 30px',
        marginBottom: '2rem',
        marginTop: '70px',
      }}>
      <Box
        sx={{
          minWidth: '40%',
          width: 'auto',
          backgroundColor: '#fff',
          border: '1px solid #dfe0d5',
          borderRadius: '1rem',
        }}>
        <Box
          sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            sx={{
              width: 370,
              padding: '0 15px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              paddingBottom: '131px',
            }}>
            <Typography
              variant='h3'
              sx={{
                fontSize: '26px',
                lineHeight: '32px',
                letterSpacing: '0.6px',
                textAlign: 'center',
                color: '#001e00',
              }}>
              Login in to Upwork
            </Typography>

            <Input
              autoFocus={false}
              className='input-group'
              sx={{
                border: '2px solid #e4ebe4',
                color: '#001E00',
                '&:hover': {
                  borderColor: '#cbcecb',
                },
              }}
              placeholder='Username or Email'
              startDecorator={
                <PersonIcon sx={{ color: '#001E00', width: '1.2rem' }} />
              }
            />
            <Button
              className='login_button'
              sx={{
                backgroundColor: '#108a00',
                color: '#fff',
                borderRadius: '2rem',
                '&:hover': {
                  backgroundColor: '#14a800',
                },
              }}>
              Continue with Email
            </Button>

            <Typography
              variant='body1'
              sx={{
                width: '100%',
                textAlign: 'center',
                fontWeight: '300',
                lineHeight: '.1em',
                color: '#606060',
                background: '#fff',
                borderBottom: '1px solid #e0e0e0',
                '& span': {
                  background: '#fff',
                  padding: '0 10px',
                },
              }}>
              <span>or</span>
            </Typography>

            <Button
              className='login_button'
              startDecorator={<FcGoogle className='google' />}
              sx={{
                justifyContent: 'flex-start',
                gap: '3.8rem',
                backgroundColor: '#4285F4',
                color: '#fff',
                borderRadius: '2rem',
                padding: 0,
                '&:hover': {
                  backgroundColor: '#4285F4',
                },
                '& .MuiButton-startDecorator': {
                  background: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }}>
              Continue with Google
            </Button>

            <Button
              className='login_button'
              startDecorator={<AppleIcon />}
              sx={{
                backgroundColor: '#fff',
                color: '#222',
                borderRadius: '2rem',
                border: '1px solid #222',
                padding: '0',
                '&:hover': {
                  backgroundColor: '#fff',
                },
                '& .MuiButton-startDecorator': {
                  color: '#001E00',
                },
                '& .MuiButton-startDecorator svg': {
                  width: '1rem',
                  height: '1rem',
                },
              }}>
              Continue with Apple
            </Button>
          </Box>
          <Typography className='line' variant='body2' component={'div'}>
            Don&apos;t have an Upwork account?
          </Typography>
          <Button
            sx={{
              width: '218px',
              backgroundColor: '#fff',
              color: '#108a00',
              borderRadius: '2rem',
              border: '1px solid #108a00',
              padding: '0',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
