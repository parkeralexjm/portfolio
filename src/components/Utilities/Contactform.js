import React from "react";
import { Box, Grid, TextField, Button } from '@mui/material'

function Contactform() {

  return (
      <Grid container spacing={2} sx={{padding: '5%'}}>
        <Grid item xs={12} md={6} sx={{display: 'flex'}}>
          <TextField
            required
            id="name-required"
            label="Name"
            defaultValue=""
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email-required"
            label="Email"
            defaultValue=""
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="message-required"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>

  );
}

export default Contactform;
