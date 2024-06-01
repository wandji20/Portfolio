import {
  Button, Container, Grid, Typography,
} from '@mui/material';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // const [activeNav, setActiveNav] = useState(true);
  // const toggleNav = () => {
  //   if (window.scrollY <= 80) {
  //     setActiveNav(true);
  //     return;
  //   }
  //   setActiveNav(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', toggleNav)
  //   return () => {
  //     window.removeEventListener('scroll', toggleNav)
  //   }
  // }, [])

  const downLoadResume = () => {
    fetch(
      'WandjiBertrandResume.pdf',
      {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/pdf',
        },
      },
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'WandjiBertrandResume.pdf';
        alink.click();
      });
    });
  };

  return (
    <Grid>
      <Profile activeNav />
      <Grid sx={{ padding: { xs: '50px 16px', sm: '50px 0' } }}>
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
            Resilient full-stack developer with strong motivation for learning new things.
            With solid problem-solving and analytical skills, excels at working in teams
            and loves writing simple and reusable software solutions.
            Well-recognized for commitment and completing work on time.
          </Typography>
          <Typography sx={{ lineHeight: 'inherit', fontSize: 'inherit', maxWidth: { sm: '600px', md: '800px' } }}>
            In my free time, you will find me playing soccer, visiting a family member, etc.
          </Typography>
          <Typography sx={{ marginBottom: '36px', lineHeight: 'inherit', fontSize: 'inherit' }}>Open to new roles.</Typography>
          <Button
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
          </Button>
        </Container>
      </Grid>
      <hr style={{ borderTop: '1px solid rgba(0,0,0,.1)' }} />

      <Resume />

      <Projects />

      <Contact />
    </Grid>
  );
}

export default App;
