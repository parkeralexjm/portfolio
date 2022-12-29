import { Card, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Contactform from './Utilities/Contactform';
import background from './assets/lowpoly2.png'

const Contact = () => {
  return (
    <Box id='contact' sx={{ backgroundImage:`linear-gradient(90deg, rgba(250, 250, 250, 1), rgba(260, 260, 260, 0.05)),url(${background})` }}>
    <Box sx={{ maxWidth: '90rem', margin: 'auto', width: '90%', padding: {xs: '6rem 0', md: '9rem 0'}  }}>
      <Stack sx={{alignItems: 'center', textAlign: 'center'}} spacing={3}>
        <Typography variant='h3'>CONTACT</Typography>
        <Box sx={{ width: '50px', height: '10px', backgroundColor: '#f25641', borderRadius: '10px'}}></Box>
        <Typography variant='subtitle1' sx={{ fontWeight: '400', fontSize: {xs: '1.25rem', sm:'1.5rem'}}}>Feel free to contact me using the form below and I will get back to you as soon as possible.</Typography>
        <Card elevation={4} sx={{ maxWidth: '80rem', borderRadius: '5px', width: '75%', marginBottom: '2rem'}}>
          <Contactform/>
        </Card>
      </Stack>
    </Box>
    </Box>
  )

}

export default Contact;