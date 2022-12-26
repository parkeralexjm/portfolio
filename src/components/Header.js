import React from 'react';
import { Box, Link } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import HeaderMenu from './Utilities/HeaderMenu';

const Header = () => {
  return (
    <Headerbackdrop>
      <Headerwrapper>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon />
          <Link underline="none" sx={{ href: '#', color: 'black', px:1  }}>Alex Parker</Link>
        </Box>
        {/* This section is for when the width is over 600px */}
        <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>
          <Box sx={{ px:1 }}>
            <Link underline="none" sx={{ href: '#', color: 'black' }}>Home</Link>
          </Box>
          <Box sx={{ px:1 }}>
            <Link underline="none" sx={{ href: '#', color: 'black' }}>About</Link>
          </Box>         
          <Box sx={{ px:1 }}>
            <Link underline="none" sx={{ href: '#', color: 'black' }}>Projects</Link>
          </Box>          
          <Box sx={{ px:1 }}>
            <Link underline="none" sx={{ href: '#', color: 'black' }}>Contact</Link>
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
  background-color: grey;
  width: 100%;
  z-index: 1000;
`

const Headerwrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 1rem;
`

export default Header;