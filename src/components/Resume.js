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
              <Typography className="resume-list-item-title">Open Food Network</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>July 2024 - Present</em>
                {' '}
              </Typography>

              <Typography>
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Resolved 20 plus GitHub issues</em>
                {' '}
                involving bug fixes, dependency upgrades, and code
                quality improvements, while implementing Figma designs and migrating
                AngularJS-related logic to Stimulus controllers, utilizing Hotwire
                for enhanced frontend responsiveness.
              </Typography>

              <Typography>
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Facilitated productive tech discussions</em>
                {' '}
                with team members across Slack and GitHub pull requests, fostering collaboration,
                code quality improvements, and best practices.
              </Typography>
            </Grid>

            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">SciNote ELN</Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>June 2023 - April 2024</em>
                {' '}
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Completed 280+ Jira tickets</em>
                , including package upgrades, bug fixes, code quality improvements,
                implementing Figma designs, and writing API documentation primarily
                used by app users to facilitate smoother interactions with the platform.
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>
                  - Collaborated daily with a cross-functional team
                </em>
                {' '}
                of 9 developers, UX designers, and 5 product team members,
                ensuring seamless communication and progress on project goals.
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Contributed significantly</em>
                {' '}
                to the development of 4 new features under supervision,
                which created upsell opportunities and enhanced product offerings.
              </Typography>
            </Grid>

            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Freelance Developer (Upwork)</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>March 2022 - May 2023</em>
                {' '}
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Completed 420+ hours</em>
                {' '}
                of work on Upwork, managing 40+ tasks from development
                through production with minimal supervision,
                leveraging agile methodologies to ensure efficient delivery.
              </Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Consistently achieved 100% </em>
                {' '}
                client satisfaction by delivering high-quality solutions,
                and building strong, collaborative relationships with team members and stakeholders.
              </Typography>
            </Grid>

            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">MarbleFlows</Typography>
              <Typography>
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>March 2022  - February 2023</em>
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Maintained and enhanced Marble products</em>
                , including Marble Academies (Rails) and Marbleflows
                (Rails, GraphQL, ReactJS, MaterialUI),
                while collaborating with the product team to achieve a
                100% customer satisfaction rate.
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Optimized app performance</em>
                ,reducing response time up to 7000 ms by resolving N+1 problems and integrating
                Turbo Streams, StimulusJS, and Sidekiq for background job processing.
                {' '}
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Developed secure API connections (CRUD)</em>
                {' '}
                for Appsumo campaigns, driving 250+ new subscriptions
                and improving campaign efficiency.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">Microverse code Reviewer and Mentor</Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}>September 2021  -  December 2022</em>
              </Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Performed 100 plus code reviews</em>
                {' '}
                on HTML, CSS, JavaScript, React-Redux, Ruby, and Ruby on
                Rails projects, offering detailed,
                supportive feedback that helped improve code quality and developer skills.
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Mentored junior web developers</em>
                , providing technical support through code reviews
                and proposing improvements in code organization and performance,
                achieving a 100% satisfaction rate from both mentees and instructors.
              </Typography>

              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Increased student retention by 13%</em>
                {' '}
                through delivering motivational advice and practical
                tips that fostered a supportive learning environment.
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
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Mastered algorithms, data structures, and full-stack development</em>
                {' '}
                through 1200+ hours of hands-on projects.
              </Typography>
              <Typography>
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>- Gained expertise in remote pair programming</em>
                , leveraging GitHub and GitFlow for collaboration, and
                sharpened communication skills through daily standup meetings.
              </Typography>
            </Grid>
            <Grid className="resume-list-item">
              <Typography className="resume-list-item-title">University of Bamenda</Typography>
              <Typography><em style={{ fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' }}> Oct 2010  -  July 2013</em></Typography>

              <Typography>
                - Developed strong
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>analytical and problem-solving skills</em>
                {' '}
                through extensive coursework in calculus, algebra, and related fields.
              </Typography>
              <Typography>
                - Gained the ability to
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>break down complex concepts</em>
                , an essential skill in both mathematics and programming.
              </Typography>

              <Typography>
                - Enhanced
                {' '}
                <em style={{ fontStyle: 'inherit', fontWeight: '600' }}>communication and collaboration abilitiess</em>
                , crucial for working effectively in development teams
                and explaining technical concepts.
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
