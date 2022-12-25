import React from 'react'
import { Card, Grid, Typography } from '@mui/material'

const Match = () => {
  return (
    <Grid container sx={{ marginTop: '0.5rem'}}>
      <Grid xs={6}>
        <Card elevation={4}>
          <h2>Match App</h2>
          <p>A game utilising props within react (elaborate)</p>
        </Card>
      </Grid>
      <Grid xs={6}>
          <Typography variant='subtitle1'>Match App Picture</Typography>
      </Grid>
    </Grid>

    

  )
} 

// const WeatherCard = styled.Card`
// `

export default Match;