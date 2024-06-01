import {
  Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import Skill from './Skill';

const Resume = () => {
  const skills = [
    { name: 'Ruby', competence: 80 },
    { name: 'Ruby on Rails', competence: 80 },
    { name: 'JavaScript', competence: 80 },
    { name: 'ReactJS', competence: 77 },
    { name: 'VueJS', competence: 80 },
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
              <Typography className="resume-list-item-title">SciNote ELN</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>June 2023 - April 2024 (1 yr)</em>
                {' '}
              </Typography>
              <Typography>
                Completed
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>280 plus</em>
                {' '}
                Jira tickets covering package upgrades, bug fixes, code quality improvements,
                and writing API documentation while communicating daily with the
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>development (09 members)</em>
                {' ,'}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>UX</em>
                {' ,'}
                and
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>product (05 members)</em>
                {' '}
                teams.
              </Typography>
              <Typography>
                Also, I contributed heavily to the development of
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>04 new features</em>
                {' '}
                that are now serving as upsell features.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Freelance Developer (Upwork)</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>March 2022 - May 2023 (03 months)</em>
                {' '}
              </Typography>
              <Typography>
                Completed over
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>420 plus</em>
                {' '}
                hours of work on Upwork and navigated
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>40 plus</em>
                {' '}
                tasks through the development cycle to production using agile methods while
                constantly in sync with the product and development team members.
                As a result, a
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>100%</em>
                {' '}
                client satisfaction rate and a positive relationship
                with all team members.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">MarbleFlows</Typography>
              <Typography>
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>March 2022  - February 2023 (1 yr)</em>
              </Typography>
              <Typography>
                Work closely in collaboration with customer success team and took complete
                ownership of one project (Marble Academies).
                Added secure payment gateways and API integrations, fixed bugs, optimize code
                and improve slow queries by up to
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>7000ms</em>
                {' '}
                resulting to great customer satisfaction.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Microverse code Reviewer</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>September 2021  -  February 2022 (06 months)</em>
                {' '}
              </Typography>
              <Typography>
                Performed
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>100+</em>
                {' '}
                code reviews on HTML, CSS, Javascript, React-Redux, Ruby, and Ruby on Rails projects
                for other developers,
                while providing guides and suggestions to improve code quality and readability.
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
              <Typography><em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}> Oct 2020  -  Aug 2021</em></Typography>
              <Typography>
                Spent
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>1200+</em>
                {' '}
                hours mastering algorithms, data structures, and full-stack development
                while simultaneously developing projects with Ruby on Rails, Ruby,
                Javascript, React and Redux, HTML, CSS, and Bootstrap.
                Developed skills in remote pair programming using GitHub, industry-standard GitFlow,
                and daily standups to communicate and collaborate with
                international remote developers.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">University of Bamenda</Typography>
              <Typography><em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}> Oct 2010  -  July 2013</em></Typography>
              <Typography>
                Obtained a Higher Teachers Training Diploma in Mathematics.
                I also mastered communication with peers, human psychology,
                and teaching and learning methods.
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
