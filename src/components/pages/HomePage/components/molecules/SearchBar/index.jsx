"use client";
import { Input } from "@mui/joy";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Input
        autoFocus={false}
        className="input-group"
        sx={{
          border: "2px solid #e4ebe4",
          color: "#001E00",
          paddingRight: 0,
          borderRadius: "10px",
          "&:hover": {
            borderColor: "#cbcecb",
          },
          "& .MuiInput-endDecorator": {
            backgroundColor: "#108a00",
            color: "#fff",
            padding: "0 .5rem",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",

            "&:hover": {
              backgroundColor: "#14a800",
            },
          },
        }}
        placeholder="Search for job"
        endDecorator={<SearchIcon sx={{}} />}
      />
    </Box>
  );
};

export default Search;
