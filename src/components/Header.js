import React from 'react';
import { Box, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import HeaderMenu from './Utilities/HeaderMenu';

const Header = () => {
  return (
    <Headerbackdrop>
      <Headerwrapper>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon />
          <Button sx={{ color: 'black' }}>Alex Parker</Button>
        </Box>
        {/* This section is for when the width is over 600px */}
        <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>
          <Box sx={{ px:0 }}>
            <Button sx={{ color: 'black' }}>Home</Button>
          </Box>
          <Box sx={{ px:0 }}>
            <Button sx={{ color: 'black' }}>About</Button>
          </Box>         
          <Box sx={{ px:0 }}>
            <Button sx={{ color: 'black' }}>Projects</Button>
          </Box>          
          <Box sx={{ px:0 }}>
            <Button sx={{ color: 'black' }}>Contact</Button>
          </Box>
        </Box>
        {/* This section is for mobile devices */}
        <Box sx={{display: { xs: 'flex', sm:'none'}}}>
          <HeaderMenu/>
        </Box>

      </Headerwrapper>
    </Headerbackdrop>
  )
}

const Headerbackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
padding: 10px;
background-color: grey;
z-index: 9;
`

const Headerwrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`

export default Header;