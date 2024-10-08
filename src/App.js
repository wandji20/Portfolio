import {
  Container, Grid, Typography,
} from '@mui/material';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <Grid>
    <Profile activeNav />
    <Grid sx={{ padding: { xs: '50px 16px 10px 16px', sm: '50px 0 10px 0' } }}>
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
            marginBottom: '40px',
            marginTop: { md: '40px' },
            fontSize: '36px',
            lineHeight: '42px',
            fontFamily: 'Roboto Mono,monospace',
            textIndent: 0,
            fontWeight: '500',
          }}
        >
          Hi_
        </Typography>
        <Typography sx={{ lineHeight: 'inherit', fontSize: 'inherit', maxWidth: { sm: '600px', md: '800px' } }}>
          Resilient full-stack developer with over three years of experience building
          and maintaining complex Ruby on Rails applications,
          with a proven track record of resolving 300+ issues across multiple projects
          while improving code quality,
          performance, and design implementations. Motivated by a passion
          for learning new technologies,
          I excel at problem-solving, analytical thinking,
          and team collaboration. Known for delivering clean,
          reusable software solutions and consistently meeting
          deadlines with a strong commitment to quality.
        </Typography>
        <Typography sx={{ margin: '15px 0 36px', lineHeight: 'inherit', fontSize: 'inherit' }}>
          Open to new roles.
        </Typography>
        {/* <Button
          startIcon={<CloudDownloadIcon sx={{ color: 'white' }} />}
          variant="contained"
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            background: '#6d56c1',
            borderRadius: '25px',
            '&:hover': { background: '#6d56c1' },
            '&:focus': { background: '#6d56c1' },
          }}
          onClick={downLoadResume}
        >
          Download CV
        </Button> */}
      </Container>
    </Grid>
    <hr style={{ borderTop: '1px solid rgba(0,0,0,.1)' }} />

    <Resume />

    <Projects />

    <Contact />
  </Grid>
);

export default App;
