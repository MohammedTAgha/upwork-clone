import { Box, Typography } from '@mui/material';

const AuthFooter = () => {
  return (
    <Box
      sx={{
        width: '97%',
        height: 130,
        margin: '0 auto',
        backgroundColor: '#001E00',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '1rem',
      }}>
      <Typography
        variant='h6'
        sx={{
          fontSize: '11px',
          letterSpacing: '0.6px',
          lineHeight: '16px',
          textAlign: 'center',
        }}>
        © 2015 - 2023 Upwork® Global Inc. • Privacy Policy
      </Typography>
    </Box>
  );
};

export default AuthFooter;
