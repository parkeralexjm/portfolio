import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import appimg from '../assets/Weather.png'

const Weather = () => {
  return (
    <Box>
      <Grid container sx={{padding: '1rem'}}>
        <Grid item xs={12} md={6} container sx={{ justifyContent: "center"}}>
          <img src={`${appimg}`} alt='Weather App' loading='lazy' width={'75%'}></img>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', alignItems: {xs:'center', md: 'flex-start'}, justifyContent: "space-around", textAlign: {xs:'center', md: 'left'}}}>
          <Typography variant='h4'>Weather App</Typography>
          <Typography variant='main1' sx={{ width: {xs:'75%', md: '100%'}, py: {xs:'1rem', md: '0'}}}>A park sunset themed app to display the weather in the chosen country including a 3 hour breakdown</Typography>
          <Button href='https://github.com/parkeralexjm/weather-app' target="_blank" rel="noreferrer noopener" variant='contained' color='secondary'>Github</Button>
        </Grid>
      </Grid>
    </Box>
  )
} 

export default Weather;