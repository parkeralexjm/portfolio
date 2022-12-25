import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: 'black', height: '20vh', width: '100vw', position: 'relative' }}>
        <Grid container>
          <Grid xs={6}>
            <Typography variant='h3' color={'white'}>Alex Parker</Typography>
          </Grid>
          <Grid xs={6}>
            <Box>
            <Typography variant='subtitle2' color={'white'}>Github</Typography>
            <GitHubIcon/>
            </Box>
            <Box>
            <Typography variant='subtitle2' color={'white'}>LinkedIn</Typography>
            </Box>
          </Grid>
          <Grid xs={12}>

          </Grid>
        </Grid>
      </Box>
    </Box>
    
  
  )

}

export default Footer;