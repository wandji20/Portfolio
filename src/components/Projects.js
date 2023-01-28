import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container, Grid, Paper, Stack, Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import projects from '../constants';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '2px 3px',
  textAlign: 'center',
  margin: '0 10px 10px 0 !important',
  color: theme.palette.text.secondary,
  boxShadow: '0 1px 4px rgb(0 0 0 / 14%) !important',
}));

const Projects = () => (
  <Grid sx={{ padding: { xs: '50px 16px', sm: '50px 0' }, scrollMarginTop: '80px' }} id="projects">
    <Container sx={{
      padding: '0 !important',
      width: {
        xs: '100%', sm: '90%', md: '80%', lg: '75%',
      },
    }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: '40px', fontSize: '36px', lineHeight: '42px', fontFamily: 'Roboto Mono,monospace',
        }}
      >
        My Projects_
      </Typography>
      <Grid container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} spacing={{ xs: 3, sm: 4 }}>
        {projects.map((project) => (
          <Grid item key={project.id} sx={{ width: { xs: '100%' } }}>
            <Card sx={{
              display: { xs: 'block', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
            }}
            >
              <CardMedia
                className="project-image"
                image={project.url}
                sx={{ width: { md: '48%' } }}
              />
              <Box sx={{ width: { md: '48%' } }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: '18px',
                      lineHeight: '30px',
                      fontFamily: 'Roboto Mono,monospace',
                      texTtransform: 'uppercase',
                      fontWeight: '700',
                      marginBottom: '15px',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap" marginTop="10px">
                    {project.stacks.map((stack) => (
                      <Item key={stack}>{stack}</Item>
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ padding: '8px 16px' }}>
                  <a
                    href={project.live}
                    style={{
                      display: 'flex', textDecoration: 'none', alignItems: 'center', marginRight: '10px', color: 'inherit',
                    }}
                  >
                    <Typography sx={{ display: 'inline-block', marginRight: '5px' }}>live</Typography>
                    <RemoveRedEyeIcon />
                  </a>
                  <a
                    href={project.source}
                    style={{
                      display: 'flex', textDecoration: 'none', alignItems: 'center', color: 'inherit',
                    }}
                  >
                    <Typography sx={{ display: 'inline-block', marginRight: '5px' }}>source code</Typography>
                    <GitHubIcon />
                  </a>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Grid>
);

export default Projects;
