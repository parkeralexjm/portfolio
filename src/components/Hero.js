import React from 'react';
import { Stack, Box, Typography } from '@mui/material'
import background from './assets/lowpoly.png'
import { StyledTealButton } from './Utilities/ColorLinks';

const Hero = () => {
	return (
		<>
			<Box sx={{ height: {xs:'60vh', sm:'100vh'}, position: 'relative', minHeight: '40rem', maxHeight: '120rem', backgroundImage:`linear-gradient(90deg, rgba(250, 250, 250, 1), rgba(117, 19, 93, 0)),url(${background})`, backgroundSize: 'cover' }}>
				<Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: {xs: 'translate(-50%, -43%)',sm:'translate(-50%,-35%)'}, width: '90%', margin: 'auto', alignItems: 'center'}} spacing={4}>
					<Typography variant='h1' sx={{fontSize: {xs: '3rem', sm:'3.75rem'}, fontWeight: '700', textAlign: 'center', margin: '0', letterSpacing: '0.15rem'}}>HI, I'M ALEX PARKER</Typography>
					<Typography variant='subtitle1' sx={{ fontSize: {xs: '1.5rem', sm: '1.8rem'}, textAlign: 'center', width:'80%'}}>A front-end focused web developer aspiring to build Websites and Web Applications</Typography>
					<Box sx={{ textAlign: 'center'}}>
						<StyledTealButton>Projects</StyledTealButton>
					</Box>
				</Stack>
			</Box>
		</>
	)
}

export default Hero;