import React from 'react'
import { Card, Grid, Button, Typography } from '@mui/material'
import appimg from '../assets/Match.png'

const Match = () => {
  return (
    <Card elevation={4}>
      <Grid container sx={{padding: '1rem'}}>
        <Grid item xs={12} md={6} container sx={{ justifyContent: "center"}}>
          <img src={`${appimg}`} alt='Match App' loading='lazy' width={'75%'}></img>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: {xs:'center', md: 'flex-start'}, justifyContent: "space-around", textAlign: {xs:'center', md: 'left'}}}>
          <Typography variant='h4'>Match App</Typography>
          <Typography variant='main1' sx={{ width: {xs:'75%', md: '100%'}, py: {xs:'1rem', md: '0'}}}>A picture memory game designed using react props</Typography>
          <Button href='#' variant='contained'>Github</Button>
        </Grid>
      </Grid>
    </Card>
  )
} 

// const WeatherCard = styled.Card`
// `

export default Match;