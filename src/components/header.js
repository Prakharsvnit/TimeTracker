import { Box, Typography } from "@mui/material";
import "../css/header.css";

const Header = () => {
  return (
    <Box className="header">
      <Typography className="header-text" variant="h4">
        Timed Contest
      </Typography>
    </Box>
  );
};

export default Header;
