import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import { SkillButton } from './Utilities/SkillButton.js'

const About = () => {
    return (
      <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '90rem', margin: 'auto', width: '90%' }}>
        <h1>About Me</h1>
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  My Journey
                </Typography>
                <Typography variant='body1' gutterBottom>
                  I am an aspiring Full-Stack Website and Web application developer commmited to something.
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Currently employed as a secondary school middle leader I experimented with a career change
                  by completing the CS50 Computer Science course from Harvard X. Having found a passion for 
                  web design I have since completed 'The Odin Project' sequence of online learning, expanding
                  on that experience using Material UI.
                </Typography>
                <Typography variant='body1' gutterBottom>
                  I'm open to all employment experiences where I can contribute, learn and grow.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <Button variant='contained'>
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>
                My Skills
              </Typography>
              <Box>
                <SkillButton variant='confined' disabled>CSS</SkillButton>
                <SkillButton variant='confined' disabled>ReactJS</SkillButton>
                <SkillButton variant='confined' disabled>Material UI</SkillButton>
                <SkillButton variant='confined' disabled>HTMl</SkillButton>
                <SkillButton variant='confined' disabled>JavaScript</SkillButton>
                <SkillButton variant='confined' disabled>Responsive Design</SkillButton>
                <SkillButton variant='confined' disabled>Entry SQL</SkillButton>
                <SkillButton variant='confined' disabled>Node.JS</SkillButton>
                <SkillButton variant='confined' disabled>GIT</SkillButton>
                <SkillButton variant='confined' disabled>Linux</SkillButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>  
    )
}


export default About;