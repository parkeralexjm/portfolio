import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
      <Box sx={{ backgroundColor: 'black', height: '20vh', width: '100%', position: 'relative' }}>
        <Grid container sx={{ alignItems: 'center' }}>
          <Grid item xs={6}>
            <Typography variant='h3' color={'white'}>Alex Parker</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex'}}>
              <Typography variant='subtitle2' color={'white'}>Github</Typography>
              <GitHubIcon sx={{ color: 'white' }}/>
            </Box>
            <Box item sx={{ display: 'flex'}}>
              <Typography variant='subtitle2' color={'white'}>LinkedIn</Typography>
              <LinkedInIcon sx={{ color: 'white' }}/>
            </Box>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Box>
  )

}

export default Footer;