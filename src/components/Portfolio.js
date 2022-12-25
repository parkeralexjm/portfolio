import React from 'react'
import { Container, Typography, Stack } from '@mui/material'
import Weather from './Projects/Weather'
import Match from './Projects/Match'

const Portfolio = () => {
    return (
        <>
            <Container>
                <Stack sx={{alignItems: 'center'}}>
                    <Typography variant='h1'>My Projects</Typography>
                    <Weather></Weather>
                    <Match></Match>
                </Stack>
            </Container>
        </>
    )
}

export default Portfolio;