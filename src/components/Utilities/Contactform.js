import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Snackbar, Alert } from '@mui/material';
import validate from 'validate.js';
import emailjs from 'emailjs-com';

const USER_ID = process.env.REACT_APP_EMAILJS_USERID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATEID
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICEID

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: { maximum: 128 },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
      email: true,
      length: { maximum: 300 },
  },
  message: {
    presence: { allowEmpty: false, message: 'is required' },
    length: { maximum: 1000 },
  }
}

function Contactform() {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  
  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();
    setFormState(formState => ({
      ...formState,
        values: {
          ...formState.values,
          [e.target.name]:
            e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value,
        },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field]
    ? true
    : false;

  const sendEmail = (e) => {
    e.preventDefault();
      emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        USER_ID
      )
        .then((res) => console.log('SUCCESS!', res.status, res.text))
        .catch(error => console.log('FAILED...', error));

        setFormState(formState => ({
          ...formState,
          isValid: false,
          values: {},
          touched: {},
          errors: {}
        }));
        handleClick()
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <form
    headers="application/json"
    name="contact-form"
    onSubmit={sendEmail}
    >
        <Grid container spacing={2} sx={{padding: '5%'}}>
          <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <TextField
              placeholder='Name'
              id="name"
              label="Name *"
              variant="filled"
              name="name"
              fullWidth
              helperText={
                hasError('name') ? formState.errors.name[0] : null
              }
              error={hasError('name')}
              onChange={handleChange}
              type="text"
              value={formState.values.name || ''}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <TextField
              placeholder='E-mail'
              id="email"
              name='email'
              type="email"
              label="E-mail *"
              variant='filled'
              fullWidth
              helperText={
                hasError('email') ? formState.errors.email[0] : null
              }
              error={hasError('email')}
              onChange={handleChange}
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <TextField
              id="message"
              label="Message *"
              name="message"
              multiline
              rows={4}
              variant="filled"
              fullWidth
              helperText={
                hasError('message') ? formState.errors.message[0] : null
              }
              error={hasError('message')}
              onChange={handleChange}
              value={formState.values.message || ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant="contained" type="submit"  disabled={!formState.isValid}>Submit</Button>
          </Grid>
        </Grid>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Your message has been sent!
          </Alert>

      </Snackbar>
      </form>

  );
}

export default Contactform;
