import {
  Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import Skill from './Skill';

const Resume = () => {
  const skills = [
    { name: 'Ruby on Rails', competence: 80 },
    { name: 'ReactJS', competence: 77 },
    { name: 'GraphQL', competence: 80 },
    { name: 'SQL', competence: 75 },
    { name: 'HTML', competence: 85 },
    { name: 'CSS', competence: 83 },
    { name: 'GIT', competence: 72 },
    { name: 'Jira', competence: 80 },
  ];

  return (
    <Grid
      sx={{
        padding: { xs: '50px 16px', sm: '50px 0' },
        scrollMarginTop: '80px',
      }}
      id="resume"
    >
      <Container
        sx={{
          padding: { xs: '0 16px', sm: 0 },
          width: {
            xs: '100%',
            sm: '90%',
            md: '80%',
            lg: '75%',
            position: 'relative',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: '40px', fontSize: '36px', lineHeight: '42px', fontFamily: 'Roboto Mono,monospace',
          }}
        >
          Resume_
        </Typography>
        <Typography sx={{ lineHeight: 'inherit', fontSize: 'inherit', maxWidth: { sm: '600px', md: '800px' } }}>
          In the past year, I have served as a full-stack developer at
          <a
            href="https://marbleflows.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '4px', display: 'inline' }}
          >
            Marbleflows
          </a>
          .
          Completing over 100 plus Jira tasks by building new features, fixing bugs,
          and performance improvements.

        </Typography>
        <Typography sx={{ lineHeight: 'inherit', fontSize: 'inherit', maxWidth: { sm: '600px', md: '800px' } }}>
          I achieved these by properly organizing my work and time, staying focused on the task,
          learning new technologies (e.g. MaterialUI, Jira, GraphQL), and staying in constant
          communication with the rest of the team
        </Typography>
        <Typography sx={{
          marginBottom: '30px', lineHeight: 'inherit', fontSize: 'inherit', maxWidth: { sm: '600px', md: '800px' },
        }}
        >
          When I am not coding, you will find me playing soccer or teaching Mathematics.
        </Typography>
        <Grid className="resume">
          <Grid sx={{ margin: '30px 0' }} className="resume-list">
            <Typography sx={{
              fontSize: '14px',
              color: '#999',
              lineHeight: '20px',
              textTransform: 'uppercase',
              fontWeight: '700',
              marginBottom: '40px',
              letterSpacing: '5px',
              fontFamily: 'Roboto Mono,monospace',
            }}
            >
              Employment
            </Typography>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">MarbleFlows</Typography>
              <Typography>March 2022  -  Present</Typography>
              <Typography>
                Add secure payments and API integrations,
                landing pages based on Figma designs, bug fixes, and performance improvements
                in slow queries resulting in up to 7000 ms plus speed increase
                and overall app performance.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Freelance Developer</Typography>
              <Typography>Oct 2021  -  Feb 2022</Typography>
              <Typography>
                Completed fifteen (15) jira tasks for an upwork project (smart car parking system)
                while performing both backend and front-end roles alongside
                invloved in code review process.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Microverse code Reviewer</Typography>
              <Typography>Oct 2010  -  July 2013</Typography>
              <Typography>
                Performed 100+ code reviews on Html, CSS, Javascript, and React-Redux projects
                while giving constructive and supportive feedback.
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ margin: '30px 0' }} className="resume-list">
            <Typography sx={{
              fontFamily: 'Roboto Mono,monospace',
              fontSize: '14px',
              color: '#999',
              lineHeight: '20px',
              textTransform: 'uppercase',
              fontWeight: '700',
              marginBottom: '40px',
              letterSpacing: '5px',
            }}
            >
              education
            </Typography>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Microverse</Typography>
              <Typography>Oct 2021  -  Aug 2022</Typography>
              <Typography>
                Spent 1200+ hours mastering algorithms, data structures, and full-stack development
                while simultaneously developing projects with, Ruby on Rails,
                Javascript, React and Redux, HTML, CSS, and, Bootstrap.
                Developed skills in remote pair programming using GitHub, industry-standard GitFlow,
                and daily standups to communicate and collaborate with
                international remote developers.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">University of Buea</Typography>
              <Typography>Oct 2010  -  July 2013</Typography>
              <Typography>
                Completed coursework with First Class Honors.
                Mastered skills in communication and understanding enabling me to stay
                calm and communicate properly under pressure.
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ margin: '30px 0' }} className="resume-list">
            <Typography sx={{
              fontSize: '14px',
              color: '#999',
              lineHeight: '20px',
              textTransform: 'uppercase',
              fontWeight: '700',
              marginBottom: '40px',
              letterSpacing: '5px',
              fontFamily: 'Roboto Mono,monospace',
            }}
            >
              General Skills
            </Typography>
            <Grid sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {
                skills.map((skill) => (
                  <Skill key={skill.name} skill={skill} />
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Resume;
