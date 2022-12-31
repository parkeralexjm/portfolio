import React from 'react'
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
      <Box sx={{ backgroundColor: 'black', width: '100%', position: 'relative' }}>
        <Box sx={{ display: 'flex', padding: '3rem 0', justifyContent: 'space-between', width: '80%', margin: 'auto'}}>
          <Box>
            <Typography variant='h5' color={'white'}>ALEX PARKER</Typography>
            <Typography variant='subtitle3' color={'white'}>\A front-end focused web developer aspiring to build Websites and Web Applications</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-end', paddingLeft: '20%'}}>
            <Box sx={{ display: 'flex'}}>
              <Typography variant='subtitle2' color={'white'}>Github</Typography>
              <GitHubIcon sx={{ color: 'white', pl:1 }}/>
            </Box>
            <Box item sx={{ display: 'flex'}}>
              <Typography variant='subtitle2' color={'white'}>LinkedIn</Typography>
              <LinkedInIcon sx={{ color: 'white', pl:1 }}/>
            </Box>
          </Box>
        </Box>
        <Box sx={{ margin: 'auto', width: '80%', display: 'flex', padding: '1rem 0', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderTop:'solid 1px lightgrey'}}>
          <Typography variant='h6' color={'white'}>&copy; Copyright 2022. Made by Alex Parker</Typography>        </Box>
      </Box>
  )

}

export default Footer;