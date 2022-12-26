import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Weather from './Projects/Weather'
import Match from './Projects/Match'

const Portfolio = () => {
    return (
        <Box  sx={{maxWidth: '90rem', margin: 'auto', width: '90%' }}>
            <Stack sx={{alignItems: 'center'}}>
                <Typography variant='h3'>My Projects</Typography>
                <Typography variant='subtitle1' sx={{ p:2}}>A selection of my Github projects</Typography>
                <Weather></Weather>
                <Match></Match>
            </Stack>
        </Box>
    )
}

export default Portfolio;