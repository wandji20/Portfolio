import React from 'react';
import {
  Box, Container, Grid, Link, Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PropTypes from 'prop-types';
import Nav from './Nav';
import backgroungImage from '../images/wandji20.jpg';

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
        }}
      >
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
              <dt>AGE:</dt>
              <dd>30</dd>
              <dt>PHONE:</dt>
              <dd>+(237) 678 163 225</dd>
              <dt>EMAIL:</dt>
              <dd>wbertrand10@gmail.com</dd>
              <dt>ADDRESS:</dt>
              <dd>Limbe, Cameroon</dd>
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
      </Container>
    </Grid>
  </Grid>
);

Profile.propTypes = {
  activeNav: PropTypes.bool.isRequired,
};

export default Profile;
