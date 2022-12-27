import React from "react";
import { Grid, TextField } from '@mui/material'
import { StyledYellowButton } from "./ColorLinks";

function Contactform() {

  return (
      <Grid container spacing={2} sx={{padding: '5%'}}>
        <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <label for="name-required" style={{ marginBottom: '0.5rem'}}>Name</label>
          <TextField
            required
            id="name-required"
            label="Name"
            defaultValue=""
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label for="email-required" style={{marginBottom: '0.5rem'}}>Email</label>
          <TextField
            required
            id="email-required"
            label="Email"
            defaultValue=""
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <label for="message-required" style={{ marginBottom: '0.5rem'}}>Message</label>
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
          <StyledYellowButton variant="contained">Submit</StyledYellowButton>
        </Grid>
      </Grid>

  );
}

export default Contactform;
