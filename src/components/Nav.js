import React, { useRef, useState } from 'react';
import {
  AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

const Nav = ({ activeNav }) => {
  const sections = ['hello', 'resume', 'projects', 'contact'];
  const anchorElRef = useRef(null);
  const [showNav, setShowNav] = useState(false);

  const handleOpenNavMenu = (event) => {
    anchorElRef.current = event.currentTarget;
    setShowNav(true);
  };

  const handleCloseNavMenu = () => {
    anchorElRef.current = null;
    setShowNav(false);
  };

  const boxShadow = activeNav ? '0 5px 8px 0 rgb(0 0 0 / 14%) !important' : 'unset !important';
  const background = activeNav ? 'white !important' : 'transparent !important';
  const color = activeNav ? 'rgba(0, 0, 0, 0.87)' : 'white';

  return (
    <>
      <AppBar
        className="menu"
        sx={{
          background,
          boxShadow,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: '100%',
            padding: {
              xs: '0 16px', sm: 0,
            },
            width: {
              xs: '100%', sm: '90%', md: '80%', lg: '75%',
            },
          }}
        >
          <Toolbar disableGutters sx={{ alignItems: `${activeNav ? 'center' : 'flex-end'}`, height: '100%' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={color}
                sx={{ padding: 0 }}
              >
                <MenuIcon sx={{ color }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElRef.current}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={showNav}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {sections.map((section) => (
                  <MenuItem key={section} onClick={handleCloseNavMenu}>
                    <Link href={`#${section}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {section}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{
              flexGrow: 1,
              display: {
                xs: 'none', md: 'flex', justifyContent: 'space-around', minWidth: '60%',
              },
            }}
            >
              {sections.map((section) => (
                <Button
                  sx={{ text: 'uppercase', color: 'white', display: 'block' }}
                  key={section}
                  onClick={handleCloseNavMenu}
                >
                  <Link href={`#${section}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {section}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

Nav.propTypes = {
  activeNav: PropTypes.bool.isRequired,
};

export default Nav;
