import React from 'react';
import { Box, Link } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderMenu from './Utilities/HeaderMenu';
import { StyledRedLink, StyledTealLink, StyledYellowLink } from './Utilities/ColorLinks';

const Header = () => {
  return (
    <Box sx={{ position: 'fixed', backgroundColor: '#ffffff', width: '100%', zIndex:'10', boxShadow: '0 10px 100px rgb(0 0 0 / 10%)'}}>
      <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: {xs:'1rem 3rem', md:'1.5rem 5rem',lg:'2rem 5rem'}, zIndex:'100'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', fontSize: {sm:'1rem', md:'1.15rem'}, letterSpacing: '0.1rem', cursor: 'pointer' }}>
          <AccountCircleIcon />
          <Link underline="none" sx={{ href: '#', color: 'black', px:1, fontWeight: '700' }}>ALEX PARKER</Link>
        </Box>
        {/* This section is for when the width is over 600px */}
        <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>
          <Box sx={{ px:1 }}>
            <StyledRedLink underline="none" sx={{ href: '#', color: 'black', fontSize: '1.25rem', fontWeight: '700', letterSpacing: '0.05rem' }}>HOME</StyledRedLink>
          </Box>
          <Box sx={{ px:1 }}>
            <StyledYellowLink underline="none" sx={{ href: '#', color: 'black', fontSize: '1.25rem', fontWeight: '700', letterSpacing: '0.05rem'  }}>ABOUT</StyledYellowLink>
          </Box>         
          <Box sx={{ px:1 }}>
            <StyledTealLink underline="none" sx={{ href: '#', color: 'black', fontSize: '1.25rem', fontWeight: '700', letterSpacing: '0.05rem'  }}>PROJECTS</StyledTealLink>
          </Box>          
          <Box sx={{ px:1 }}>
            <StyledRedLink underline="none" sx={{ href: '#', color: 'black', fontSize: '1.25rem', fontWeight: '700', letterSpacing: '0.05rem'  }}>CONTACT</StyledRedLink>
          </Box>
        </Box>
        {/* This section is for mobile devices */}
        <Box sx={{display: { xs: 'flex', sm:'none'}}}>
          <HeaderMenu/>
        </Box>

      </Box>
    </Box>
  )
}

export default Header;