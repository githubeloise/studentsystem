import React from 'react';
import { styled } from '@mui/system'; // Import styled from @mui/system
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Define your styled components
const StyledAppBar = styled(AppBar)({
  flexGrow: 1,
});

const StyledIconButton = styled(IconButton)({
  marginRight: (theme) => theme.spacing(2),
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

// Define your functional component
export default function Appbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </StyledIconButton>
        <StyledTypography variant="h6">
          Spring Boot React Full Stack Application
        </StyledTypography>
      </Toolbar>
    </StyledAppBar>
  );
}
