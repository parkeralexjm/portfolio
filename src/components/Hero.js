import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material'
import background from './assets/lowpoly.png'

const Hero = () => {
	const handleClickScrollProject = () => {
    const element = document.getElementById('projects');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

	return (
		<>
			<Box id='hero' sx={{ height: {xs:'60vh', sm:'100vh'}, position: 'relative', minHeight: '40rem', maxHeight: '120rem', backgroundImage:`linear-gradient(90deg, rgba(250, 250, 250, 1), rgba(117, 19, 93, 0)),url(${background})`, backgroundSize: 'cover' }}>
				<Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: {xs: 'translate(-50%, -43%)',sm:'translate(-50%,-35%)'}, width: '90%', margin: 'auto', alignItems: 'center'}} spacing={{xs:5, sm:7, md: 9}}>
					<Typography variant='h1'>HI, I'M ALEX PARKER</Typography>
					<Typography variant='h2'>A front-end focused web developer aspiring to build Websites and Web Applications</Typography>
					<Box sx={{ textAlign: 'center'}}>
						<Button variant='contained' size='large' onClick={handleClickScrollProject} >Projects</Button>
					</Box>
				</Stack>
			</Box>
		</>
	)
}

export default Hero;