import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { SkillButton } from './Utilities/SkillButton'

const About = () => {
  const handleClickScrollContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <Box id='about' sx={{backgroundColor: "#f5f5f5"}}>
      <Box sx={{ maxWidth: '90rem', margin: 'auto', width: '90%', padding: {xs: '6rem 0', md: '9rem 0'} }}>
        <Stack sx={{ alignItems: 'center', textAlign: 'center' }} spacing={3}>
          <Typography variant='h3'>ABOUT ME</Typography>
          <Box sx={{ width: '50px', height: '10px', backgroundColor: '#fad037', borderRadius: '10px'}}></Box>
          <Typography variant='subtitle1'>A description of me</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ flexGrow: 1, textAlign: 'left', pr: '1rem' }}>
                <Typography variant="subtitle1" gutterBottom>
                  My Journey
                </Typography>
                <Typography variant='body1' gutterBottom>
                  I am an aspiring <strong>Full-Stack Website and Web application developer</strong> commmited to something.
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Currently employed as a secondary school middle leader I experimented with a career change
                  by completing the CS50 Computer Science course from Harvard X. Having found a passion for 
                  web design I have since completed 'The Odin Project' sequence of online learning, expanding
                  on that experience using <strong>Material UI</strong>. You can find some examples of my work
                  in the <strong>projects</strong> section.
                </Typography>
                <Typography variant='body1' gutterBottom>
                  I'm open to all employment experiences where I can contribute, learn and grow.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <Button color="error" variant='contained' sx={{ mt:2 }} onClick={handleClickScrollContact}>
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
              <Typography variant="subtitle1" gutterBottom>
                My Skills
              </Typography>
              <Box sx={{alignItems: 'left'}}>
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
        </Stack>
      </Box>  
      </Box>
    )
}


export default About;