import { Avatar, Box, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/joy';

const MainContainer = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "100%",
        padding: "2rem",
        display: 'flex',
        justifyContent:'space-between',
        alignItems:"center",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar alt="Remy Sharp" src="/images/profilePic.jpeg" sx={{
            width:"60px",
            height:"60px"
          }} 
        />
        <Box alignItems="center">
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#001e00"
            }}
          >
            Mohammed Agha
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#001e00" }}
            variant="body2"
          >
            <LocationOnIcon sx={{ fontSize: 15, color: '#5E6D55' }} />
            Gaza, Palestine - {new Date().toLocaleTimeString().slice(0, 5)} local time.
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          sx={{
            backgroundColor: '#fff',
            color: '#14a800',
            borderRadius: '2rem',
            border: '1px solid #14a800',
            paddingX: '1rem',
            width: '100%',
            minWidth: 'fit-content',
            '&:hover': {
              backgroundColor: '#fff',
            },

            '& .MuiButton-startDecorator svg': {
              width: '1rem',
              height: '1rem',
            },
          }}>
          See Public View
        </Button>
        <Button
          sx={{
            backgroundColor: '#108a00',
            color: '#fff',
            borderRadius: '2rem',
            paddingX: '1rem',
            width: '100%',
            minWidth: 'fit-content',
            '&:hover': {
              backgroundColor: '#14a800',
            },
          }}>
          Profile Settings
        </Button>
      </Stack>
    </Stack>
  );
};

export default MainContainer;
