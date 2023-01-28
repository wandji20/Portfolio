import React, { useState } from 'react';
import {
  Box, Button, Grid, Link, Snackbar, TextField, Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { withStyles } from '@mui/styles';

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
      fontFamily: 'Roboto Mono,monospace',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [background, setBackground] = useState('#4caf50');
  // const URL = 'http://localhost:3001/api/v1/portfolio/';
  const URL = 'https://email-api.fly.dev/api/v1/portfolio/';
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const server = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          mode: 'no-cors',
        },
        body: JSON.stringify({ sender: { name, email, message } }),
      });

      const response = await server.json();
      setName('');
      setEmail('');
      setMessage('');
      if (response.message) {
        setBackground('#4caf50');
        setShowNotification(true);
        setNotificationMessage('Thank you for reaching out.');
        return;
      }
      setBackground('#ef5350');
      setShowNotification(true);
      setNotificationMessage('Something went wrong');
    } catch (error) {
      setBackground('#ef5350');
      setShowNotification(true);
      setNotificationMessage(error.message);
    }
  };
  return (
    <>
      <Grid
        sx={{
          background: 'linear-gradient(54deg,rgba(74,76,179,.95) 34%,hsla(0,34%,71%,.95))',
          color: 'white',
          padding: '50px 16px',
          scrollMarginTop: '80px',
        }}
        id="contact"
      >
        <Typography
          variant="p"
          sx={{
            margiBbottom: '40px',
            fontSize: '36px',
            lineHeight: '42px',
            fontFamily: 'Roboto Mono,monospace',
          }}
        >
          Get in touch_
        </Typography>
        <Grid>
          <Grid>
            <Box sx={{ marginBottom: '20px' }}>
              <dl className="contact-list">
                <dt>PHONE</dt>
                <dd>+(237) 678 163 225</dd>
                <dt>EMAIL</dt>
                <dd>wbertrand10@gmail.com</dd>
              </dl>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '35px' }}>
              <Link href="https://twitter.com/wandjibertrand" rel="noopener" target="_blank" className="profile-social-icon">
                <GitHubIcon />
              </Link>
              <Link href="https://www.linkedin.com/in/wandji-bertrand/" rel="noopener" target="_blank" className="profile-social-icon">
                <LinkedInIcon />
              </Link>
              <Link href="https://github.com/wandji20" rel="noopener" target="_blank" className="profile-social-icon">
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>
          <Grid sx={{
            fontSize: '16px',
            lineHeight: '24px',
            fontFamily: 'Roboto Mono,monospace',
          }}
          >
            <Typography sx={{
              margin: '10px 0', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit',
            }}
            >
              Or send me an email here_
            </Typography>
            <form onSubmit={sendMessage}>
              <CustomTextField
                sx={{
                  width: '100%', marginBottom: '15px', color: 'white', borderColor: 'white',
                }}
                inputProps={{
                  sx: {
                    color: 'white', borderColor: 'white', fontFamily: 'Roboto Mono,monospace', fontSize: '16px', lineHeight: '24px',
                  },
                }}
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="small"
                variant="outlined"
                required
              />
              <CustomTextField
                sx={{
                  width: '100%', marginBottom: '15px', color: 'white', borderColor: 'white',
                }}
                inputProps={{
                  sx: {
                    color: 'white', borderColor: 'white', fontFamily: 'Roboto Mono,monospace', fontSize: '16px', lineHeight: '24px',
                  },
                }}
                label="email"
                value={email}
                size="small"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <CustomTextField
                sx={{ width: '100%', marginBottom: '15px' }}
                inputProps={{
                  sx: {
                    color: 'white',
                    borderColor: 'white',
                    fontFamily: 'Roboto Mono,monospace',
                    fontSize: '16px',
                    lineHeight: '24px',
                    display: 'block',
                    height: 'auto',
                  },
                }}
                multiline
                label="message"
                value={message}
                size="small"
                variant="outlined"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  background: '#6d56c1',
                  borderRadius: '25px',
                  width: '100%',
                  fontWeight: 600,
                  '&:hover': { background: '#6d56c1' },
                  '&:focus': { background: '#6d56c1' },
                }}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        sx={{
          minWidth: 'auto',
          color: 'white',
          background: 'transparent',
          '& .MuiSnackbarContent-root': {
            background: `${background}`,
            minWidth: 'auto',
          },
          '& .MuiSnackbarContent-message': {
            padding: 0,
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={showNotification}
        onClose={() => {
          setShowNotification(false);
          setNotificationMessage('');
        }}
        message={notificationMessage}
        key="bottomright"
      />

    </>

  );
};

export default Contact;
