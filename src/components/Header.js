import React from 'react';
import { Box, Link } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderMenu from './Utilities/HeaderMenu';
import { StyledRedLink, StyledTealLink, StyledYellowLink } from './Utilities/ColorLinks';

const Header = () => {
  const handleClickScrollHero = () => {
    const element = document.getElementById('hero'); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollAbout = () => {
    const element = document.getElementById('about'); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollProjects = () => {
    const element = document.getElementById('projects'); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollContact = () => {
    const element = document.getElementById('contact'); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Box sx={{ position: 'fixed', backgroundColor: '#ffffff', width: '100%', zIndex:'10', boxShadow: '0 10px 100px rgb(0 0 0 / 10%)'}}>
      <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: {xs:'1rem 3rem',sm:'1.5rem 2rem', md:'1.5rem 4rem', lg:'2rem 6rem', xl:'2rem 20rem'}, zIndex:'100'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', fontSize: {sm:'1rem', md:'1.15rem'}, letterSpacing: '0.1rem', cursor: 'pointer' }}>
          <AccountCircleIcon />
          <Link underline="none" sx={{ color: 'black', px:1, fontWeight: '700' }}>ALEX PARKER</Link>
        </Box>
        {/* This section is for when the width is over 600px */}
        <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>
          <Box sx={{ px:{ sm:2, lg:3, xl:4 }}}>
            <StyledRedLink underline="none" onClick={handleClickScrollHero} sx={{ color: 'black', fontSize: {sm: '1rem', md:'1.25rem'}, fontWeight: '500', letterSpacing: '0.1rem' }}>HOME</StyledRedLink>
          </Box>
          <Box sx={{ px:{ sm:2, lg:3, xl:4 } }}>
            <StyledYellowLink underline="none" onClick={handleClickScrollAbout} sx={{ color: 'black', fontSize: {sm: '1rem', md:'1.25rem'}, fontWeight: '500', letterSpacing: '0.1rem'  }}>ABOUT</StyledYellowLink>
          </Box>         
          <Box sx={{ px:{ sm:2, lg:3, xl:4 } }}>
            <StyledTealLink underline="none" onClick={handleClickScrollProjects} sx={{ color: 'black', fontSize: {sm: '1rem', md:'1.25rem'}, fontWeight: '500', letterSpacing: '0.1rem'  }}>PROJECTS</StyledTealLink>
          </Box>          
          <Box sx={{ px:{ sm:2, lg:3, xl:4 } }}>
            <StyledRedLink underline="none" onClick={handleClickScrollContact} sx={{ color: 'black', fontSize: {sm: '1rem', md:'1.25rem'}, fontWeight: '500', letterSpacing: '0.1rem'  }}>CONTACT</StyledRedLink>
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