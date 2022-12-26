import { Card, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Contactform from './Utilities/Contactform';

const Contact = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: '90rem', margin: 'auto', width: '90%'  }}>
      <Box sx={{ py: 2}}>
        <Typography variant='h5'>Contact me</Typography>
      </Box>
      <Card elevation={4} sx={{ maxWidth: '80rem', borderRadius: '5px', width: '75%', marginBottom: '2rem'}}>
        <Contactform/>
      </Card>
    </Box>
  )

}

export default Contact;