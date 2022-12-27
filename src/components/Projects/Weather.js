import React from 'react'
import { Card, Grid, Button, Typography } from '@mui/material'
import appimg from '../assets/Weather.png'

const Weather = () => {
  return (
    <Card elevation={4}>
      <Grid container sx={{padding: '1rem'}}>
        <Grid item xs={12} md={6} container sx={{ justifyContent: "center"}}>
          <img src={`${appimg}`} alt='Weather App' loading='lazy' width={'75%'}></img>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: {xs:'center', md: 'flex-start'}, justifyContent: "space-around"}}>
          <Typography variant='h4'>Weather App</Typography>
          <Typography variant='main1'>A campfire themed app to display the weather in the chosen country including a 3 hour breakdown</Typography>
          <Button href='#' variant='contained'>Github</Button>
        </Grid>
      </Grid>
    </Card>
  )
} 

export default Weather;