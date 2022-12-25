import React from 'react'
import { Card, Grid, Typography } from '@mui/material'

const Weather = () => {
  return (
    <Grid container sx={{ marginTop: '0.5rem'}}>
      <Grid xs={6}>
        <Card elevation={4}>
          <h2>Weather App</h2>
          <p>A campfire themed app to display the weather in the chosen country including a 3 hour breakdown</p>
        </Card>
      </Grid>
      <Grid xs={6}>
        <Typography variant='subtitle1'>Weather App</Typography>
      </Grid>
    </Grid>
  )
} 

// const WeatherCard = styled.Card`
// `

export default Weather;