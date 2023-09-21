"use client";
import { Box, Typography, Stack } from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "97%",
        margin: "1rem auto",
        backgroundColor: "#001E00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "8px",
        padding: "1rem 0",
      }}>
      <Box sx={{ width: "80%", margin: "0 auto", paddingBottom: "1rem" }}>
        <Stack alignItems={"center"}>
          <Stack
            sx={{ width: "100%", paddingTop: "1rem" }}
            direction={"row"}
            alignItems={"baseline"}
            justifyContent={"space-between"}>
            <List
              sx={{
                flex: 1,
                "& li ": {
                  padding: 0,
                  minHeight: "auto",
                  paddingBottom: "5px",
                  color: "white",
                },
                "& li p ": {
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.6px",
                },
                "& li p:hover ": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}>
              <ListItem>
                <Typography variant="body1">About Us</Typography>{" "}
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Feedback</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Community</Typography>
              </ListItem>
            </List>
            <List
              sx={{
                flex: 1,
                "& li ": {
                  padding: 0,
                  minHeight: "auto",
                  paddingBottom: "5px",
                  color: "white",
                },
                "& li p ": {
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.6px",
                },
                "& li p:hover ": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}>
              <ListItem>
                {" "}
                <Typography variant="body1">
                  Trust, Safety & Security
                </Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Help & Support</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Upwork Foundation</Typography>
              </ListItem>
            </List>
            <List
              sx={{
                flex: 1,
                "& li ": {
                  padding: 0,
                  minHeight: "auto",
                  paddingBottom: "5px",
                  color: "white",
                },
                "& li p ": {
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.6px",
                },
                "& li p:hover ": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}>
              <ListItem>
                {" "}
                <Typography variant="body1">Terms of Service</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Privacy Policy</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">CA Notice at Collection</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Cookie Settings</Typography>
              </ListItem>
            </List>
            <List
              sx={{
                flex: 1,
                "& li ": {
                  padding: 0,
                  minHeight: "auto",
                  paddingBottom: "5px",
                  color: "white",
                },
                "& li p ": {
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.6px",
                },
                "& li p:hover ": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}>
              <ListItem>
                {" "}
                <Typography variant="body1">Accessibility</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Desktop App</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Cookie Policy</Typography>
              </ListItem>
              <ListItem>
                {" "}
                <Typography variant="body1">Enterprise Solutions</Typography>
              </ListItem>
            </List>
          </Stack>
          <Stack
            sx={{ width: "100%", padding: "1rem 0 0" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography variant="body2">Follow Us</Typography>
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <FacebookOutlinedIcon
                    sx={{
                      stroke: "#fff",
                      fill: "none",
                      background: "1px solid #fff",
                      width: "1.2rem",
                      "& svg path": {
                        stroke: "#fff",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <LinkedInIcon sx={{ width: "1.2rem" }} />
                </Box>{" "}
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <svg
                    width="1rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    role="img">
                    <path
                      fill="#fff"
                      d="M13.482 10.622L20.04 3h-1.554l-5.693 6.618L8.245 3H3l6.876 10.007L3 21h1.554l6.012-6.989L15.368 21h5.245l-7.131-10.378zm-2.128 2.473l-.697-.996-5.543-7.93H7.5l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787z"
                    />
                  </svg>
                </Box>
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <YouTubeIcon sx={{ width: "1.2rem" }} />
                </Box>
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <InstagramIcon sx={{ width: "1.2rem" }} />
                </Box>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography variant="body2">Mobile app</Typography>
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <svg
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    role="img">
                    <path
                      vectorEffect="non-scaling-stroke"
                      stroke=" #fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15.117 3a3.907 3.907 0 01-.87 2.918 3.607 3.607 0 01-2.778 1.409 3.657 3.657 0 01.9-2.848A4.287 4.287 0 0115.117 3z"
                      clipRule="evenodd"
                    />
                    <path
                      vectorEffect="non-scaling-stroke"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18.295 18.381c.453-.69.844-1.42 1.17-2.178a3.997 3.997 0 01-.53-7.204 4.586 4.586 0 00-3.458-1.83c-.705.01-1.401.16-2.048.44-.433.22-.905.353-1.389.39a4.726 4.726 0 01-1.559-.36c-.6-.25-1.24-.388-1.888-.41a4.676 4.676 0 00-3.777 2.26c-1.31 1.998-1.09 5.805.999 8.992.79 1.2 1.808 2.508 3.127 2.508.46-.01.91-.123 1.32-.33a3.997 3.997 0 013.587 0c.395.217.838.334 1.289.34 1.329-.01 2.398-1.459 3.157-2.618z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
                <Box
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <svg
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    role="img">
                    <path
                      fill=" #fff"
                      vectorEffect="non-scaling-stroke"
                      stroke=" #fff"
                      strokeMiterlimit={10}
                      strokeWidth={0.4}
                      d="M9.893 6.726a.44.44 0 100-.88.44.44 0 000 .88zm3.522 0a.44.44 0 100-.88.44.44 0 000 .88z"
                    />
                    <path
                      vectorEffect="non-scaling-stroke"
                      stroke=" #fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.656 3.83a5 5 0 00-5.23 4.82h10.46a5 5 0 00-5.23-4.82zm-2.501.58L8.375 3m5.791 1.41l.77-1.41"
                    />
                    <path
                      vectorEffect="non-scaling-stroke"
                      stroke=" #fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16.896 8.648H6.426v9.2h10.47v-9.2zM4 8.648v6.3m15.314-6.3v6.3M9.57 17.85V21m4.174-3.15V21"
                    />
                  </svg>
                </Box>{" "}
              </Stack>
            </Stack>
          </Stack>
          <Divider
            sx={{
              width: "100%",
              height: "1px",
              background: "#fff",
              marginTop: "1rem",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: "11px",
              letterSpacing: "0.6px",
              lineHeight: "16px",
              textAlign: "center",
              paddingTop: "1rem",
            }}>
            © 2015 - 2023 Upwork® Global Inc.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
