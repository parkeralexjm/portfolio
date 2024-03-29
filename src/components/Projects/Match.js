import React from 'react'
import { Grid, Button, Typography, Box } from '@mui/material'
import appimg from '../assets/Match.png'

const Match = () => {
  return (
    <Box>
      <Grid container sx={{padding: '1rem'}}>
        <Grid item xs={12} md={6} container sx={{ justifyContent: "center"}}>
          <img src={`${appimg}`} alt='Match App' loading='lazy' width={'75%'}></img>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: {xs:'center', md: 'flex-start'}, justifyContent: "space-around", textAlign: {xs:'center', md: 'left'}}}>
          <Typography variant='h4'>Match App</Typography>
          <Typography variant='main1' sx={{ width: {xs:'75%', md: '100%'}, py: {xs:'1rem', md: '0'}}}>A picture memory game designed using react props</Typography>
          <Box sx={{ display: 'flex'}}>
            <Button href='https://github.com/parkeralexjm/memory-game' target="_blank" rel="noreferrer noopener" variant='contained' color='secondary'>Github</Button>
            <Button sx={{ ml:2 }} href='https://parkeralexjm.github.io/memory-game/' target="_blank" rel="noreferrer noopener" variant='contained' color='primary'>Live</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
} 

// const WeatherCard = styled.Card`
// `

export default Match;