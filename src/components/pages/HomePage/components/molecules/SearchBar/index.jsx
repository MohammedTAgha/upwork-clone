"use client";
import React, { useState } from 'react';
import { Input } from "@mui/joy";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from 'next/navigation';
const Search = ({ width }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (event) => {
    console.log('ch')
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('test')
    // Navigate to the search page with the search query as a prop
    router.push({
      pathname: '/search',
      query: { q: searchQuery }, // Pass the search query as a query parameter
    });
  };

  return (
    <Box width={width || '100%'}>
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
        onChange={handleInputChange}
        endDecorator={<SearchIcon onClick={handleSearch} />}
        
      />
    </Box>
  );
};

export default Search;
