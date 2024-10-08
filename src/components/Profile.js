import React from 'react';
import {
  Box, Container, Grid, Link, Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import PropTypes from 'prop-types';
import Nav from './Nav';
import backgroungImage from '../images/wandji20.jpg';
import image from '../images/wandji-crop.jpg';

const Profile = ({ activeNav }) => (
  <Grid sx={{
    backgroundImage: `url(${backgroungImage}), linear-gradient(54deg,rgba(74,76,179,.95) 34%,hsla(0,34%,71%,.95))`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
  >
    <Grid sx={{ background: 'linear-gradient(54deg,rgba(74,76,179,.95) 34%,hsla(0,34%,71%,.95))' }}>
      <Nav activeNav={activeNav} />
      <Container
        id="hello"
        sx={{
          fontFamily: 'Roboto Mono,monospace',
          padding: {
            xs: '80px 16px 0', sm: '80px 0 0',
          },
          width: {
            xs: '100%', sm: '90%', md: '80%', lg: '75%',
          },
          display: 'flex',
        }}
      >
        <Grid sx={{
          display: { xs: 'none', md: 'flex' },
          maxWidth: { md: 280 },
          margin: '40px 50px 0 0',
          position: 'relative',
          width: '100%',
        }}
        >
          <Box position="absolute">
            <img style={{ borderRadius: '5px', height: '360px' }} src={image} alt="wandji bertrand" width="100%" />
          </Box>
        </Grid>
        <Grid sx={{ padding: 0, color: 'white' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="p"
              sx={{
                fontWeight: '700', fontSize: '44px', lineHeight: '50px', margin: '40px 0 10px',
              }}
            >
              {' '}
              Wandji Bertrand_
            </Typography>
            <Typography variant="p" sx={{ fontSize: '16px', lineHeight: '24px', marginBottom: '40px' }}> full-stack developer</Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <dl className="contact-list">
              <dt>EMAIL:</dt>
              <dd>wandji.bt@gmail.com</dd>
              <dt>ADDRESS:</dt>
              <dd>Douala, Cameroon</dd>
            </dl>
          </Box>
          <Box sx={{ display: 'flex', paddingBottom: '35px' }}>
            <Link href="https://twitter.com/wandjibertrand" rel="noopener" target="_blank" className="profile-social-icon">
              <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/wandji-bertrand/" rel="noopener" target="_blank" className="profile-social-icon">
              <LinkedInIcon />
            </Link>
            <Link href="https://x.com/wandjibertrand" rel="noopener" target="_blank" className="profile-social-icon">
              <XIcon />
            </Link>
          </Box>
        </Grid>
      </Container>
    </Grid>
  </Grid>
);

Profile.propTypes = {
  activeNav: PropTypes.bool.isRequired,
};

export default Profile;
