import React from 'react'
import { Card, Grid } from '@mui/material'
import appimg from '../assets/Weather.png'

const Weather = () => {
  return (
    <Card elevation={4}>
    <Grid container sx={{ marginTop: '0.5rem'}}>
      <Grid xs={6} container sx={{ justifyContent: "center"}}>
        <img src={`${appimg}`} alt='Weather App' loading='lazy' width={'75%'}></img>
      </Grid>
      <Grid xs={6}>
        <h2>Weather App</h2>
        <p>A campfire themed app to display the weather in the chosen country including a 3 hour breakdown</p>
      </Grid>
    </Grid>
    </Card>
  )
} 

// const WeatherCard = styled.Card`
// `

export default Weather;