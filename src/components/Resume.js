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
          In the past year, I served as a full-stack developer at
          {' '}
          <a
            href="https://marbleflows.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'inline' }}
          >
            Marbleflows
          </a>
          .
          Completing over
          {' '}
          <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>100 plus</em>
          {' '}
          Jira tasks by building features, fixing bugs,
          and performance improvements.

        </Typography>
        <Typography sx={{ lineHeight: 'inherit', fontSize: 'inherit', maxWidth: { sm: '600px', md: '800px' } }}>
          I achieved these by properly organizing my work and time, staying focused on the task,
          learning new technologies (e.g. MaterialUI, Jira, GraphQL), and staying in constant
          communication with the rest of the team.
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
              <Typography>
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>March 2022  -  Present</em>
              </Typography>
              <Typography>
                Add secure payment gateways and API integrations,
                landing pages based on Figma designs, bug fixes,
                and improved performance for slow queries.
                This resulted in up to
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>7000ms</em>
                {' '}
                plus speed increase
                and improved performance overall.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Freelance Developer</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>Oct 2021  -  Feb 2022</em>
                {' '}
              </Typography>
              <Typography>
                Completed
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>eight (08)</em>
                {' '}
                Jira tasks for a smart car parking system while performing
                backend and front-end roles alongside
                being involved in the code review process.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Microverse code Reviewer</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>September 2021  -  February 2022</em>
                {' '}
              </Typography>
              <Typography>
                Performed
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>100+</em>
                {' '}
                code reviews on HTML, CSS, Javascript, React-Redux, Ruby, and Ruby on Rails projects
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
              <Typography><em style={{ fontStyle: 'inherit', fontWeight: '600' }}> Oct 2020  -  Aug 2021</em></Typography>
              <Typography>
                Spent
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>1200+</em>
                {' '}
                hours mastering algorithms, data structures, and full-stack development
                while simultaneously developing projects with Ruby on Rails,
                Javascript, React and Redux, HTML, CSS, and Bootstrap.
                Developed skills in remote pair programming using GitHub, industry-standard GitFlow,
                and daily standups to communicate and collaborate with
                international remote developers.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">University of Buea</Typography>
              <Typography><em style={{ fontStyle: 'inherit', fontWeight: '600' }}> Oct 2010  -  July 2013</em></Typography>
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
