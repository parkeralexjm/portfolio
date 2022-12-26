import React from 'react'
import { Card, Grid } from '@mui/material'
import appimg from '../assets/Match.png'

const Match = () => {
  return (
    <Card elevation={4}>
      <Grid container sx={{ marginTop: '0.5rem'}}>
        <Grid item xs={6} container sx={{ justifyContent: "center"}}>
          <img src={`${appimg}`} alt='Match App' loading='lazy' width={'75%'}></img>
        </Grid>
        <Grid item xs={6}>
          <h2>Match App</h2>
          <p>A game utilising props within react (elaborate)</p>
        </Grid>
      </Grid>
    </Card>
  )
} 

// const WeatherCard = styled.Card`
// `

export default Match;