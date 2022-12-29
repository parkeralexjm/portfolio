import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Weather from './Projects/Weather'
import Match from './Projects/Match'

const Portfolio = () => {
    return (
        <Box id="projects" className='project' sx={{maxWidth: '90rem', margin: 'auto', width: '90%', padding: {xs: '6rem 0', md: '9rem 0'}  }}>
            <Stack sx={{alignItems: 'center'}} spacing={3}>
                <Typography variant='h3'>PROJECTS</Typography>
                <Box sx={{ width: '50px', height: '10px', backgroundColor: '#72dbd1', borderRadius: '10px'}}></Box>
                <Typography variant='subtitle1'>A selection of my Github projects</Typography>
                <Weather></Weather>
                <Match></Match>
            </Stack>
        </Box>
    )
}

export default Portfolio;