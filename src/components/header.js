import { Box, Container, Typography } from "@mui/material";
import "../css/header.css";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Box className="header">
        <Typography className="header-text" variant="h4">
          Timed Contest
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
