import React from 'react';
import { Button, Stack, Box } from '@mui/material'
import styled from 'styled-components'

const Hero = () => {
	return (
		<>
			<Box sx={{ height: '100vh', position: 'relative', minHeight: '50rem', maxHeight: '120rem', backgroundColor: 'lightGray' }}>
				<Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '90%', margin: 'auto'}}>
					<PersonalTitle>Hi, I'm Alex Parker</PersonalTitle>
					<SkillTitle>A front-end focused web developer aspiring to build Websites and Web Applications</SkillTitle>
					<Box sx={{ textAlign: 'center'}}>
						<Button variant='contained' size='medium' sx={{ width: '200px' }}>Projects</Button>
					</Box>
				</Stack>
			</Box>
		</>
	)
}

const PersonalTitle = styled.h1`
    font-size: 2rem;
		text-transform: uppercase;
		text-align: center;
		margin: 0;
`

const SkillTitle = styled.p`
    font-size: 1.5rem;
    color: green;
		text-align: center;
`


export default Hero;