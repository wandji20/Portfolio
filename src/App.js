import {
  Button, Container, Grid, Typography,
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
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
          I am a full-stack developer with over five years of experience building and
          maintaining Ruby on Rails applications, with shipped, well-tested features
          across several codebases: SciNote, Marble, Open Food Network, and my own
          OneView Properties. I enjoy taking a problem from a rough idea through design,
          code review, and production, and I am comfortable working in remote teams
          where communication matters.
        </Typography>
        <Typography sx={{
          margin: '15px 0 0',
          lineHeight: 'inherit',
          fontSize: 'inherit',
          maxWidth: { sm: '600px', md: '800px' },
        }}
        >
          Most recently I designed and launched OneView Properties, a property-management
          platform for the Cameroonian market, which meant learning payments, e-signatures,
          and data-protection rules well enough to build them in. My background in
          mathematics and teaching still shapes how I work, and I like explaining things
          simply and getting the details right.
        </Typography>
        <Typography sx={{ margin: '15px 0 36px', lineHeight: 'inherit', fontSize: 'inherit' }}>
          Open to new roles.
        </Typography>
        <Button
          startIcon={<CloudDownloadIcon sx={{ color: 'white' }} />}
          variant="contained"
          href={`${process.env.PUBLIC_URL}/WandjiBertrandResume.pdf`}
          download="WandjiBertrandResume.pdf"
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            background: '#6d56c1',
            borderRadius: '25px',
            '&:hover': { background: '#6d56c1' },
            '&:focus': { background: '#6d56c1' },
          }}
        >
          Download CV
        </Button>
      </Container>
    </Grid>
    <hr style={{ borderTop: '1px solid rgba(0,0,0,.1)' }} />

    <Resume />

    <Projects />

    <Contact />
  </Grid>
);

export default App;
