import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditButton() {
    return (
      <Box
        sx={{
          maxWidth: '30px',
          maxHeight: '30px',
          padding: '3px',
          borderRadius: "50%",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            background: "#ddd",
          },
        }}
      >
        <EditIcon
          sx={{
            color: "#14a800",
          }}
        />
      </Box>
    )
  }