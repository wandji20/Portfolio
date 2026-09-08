import {
  Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

const sectionTitleStyle = {
  fontSize: '14px',
  color: '#999',
  lineHeight: '20px',
  textTransform: 'uppercase',
  fontWeight: '700',
  marginBottom: '40px',
  letterSpacing: '5px',
  fontFamily: 'Roboto Mono,monospace',
};

const dateStyle = { fontStyle: 'inherit', fontWeight: '600', fontSize: '14px' };
const leadStyle = { fontStyle: 'inherit', fontWeight: '600' };

const employment = [
  {
    title: 'Lumina Tech Systems (OneView Properties) — Lead Engineer',
    period: 'January 2026 - Present',
    summary: 'Property-management platform for landlords and property firms in Cameroon, in production.',
    bullets: [
      {
        lead: '- Designed and built oneviewproperties.com end to end',
        text: ' on Rails 8 and Hotwire, from an empty repository to a live product in about three months of active development, with around 2,700 RSpec examples covering models, requests, jobs, and browser flows.',
      },
      {
        lead: '- Modelled a domain with real financial consequences',
        text: ' (tenancies, invoicing, rent reconciliation, audit history) carefully enough that landlords can rely on the records, and made it importable from the spreadsheets they already keep.',
      },
      {
        lead: '- Turned local payment and data-protection rules into working code',
        text: ': a provider-neutral payments layer with an MTN Mobile Money integration, and consent, retention, and deletion flows for Cameroon’s 2024 data-protection law.',
      },
      {
        lead: '- Built a native e-signature flow',
        text: ' rather than paying for a third-party service, removing a per-signature cost, and shipped a Hotwire Native Android app so tenants and caretakers can use the product on their phones.',
      },
      {
        lead: '- Set up and operate the production environment',
        text: ': Kamal deployments to separate web, worker, and database servers, PostgreSQL backups, Cloudflare at the edge, Sentry monitoring, and a GitHub Actions pipeline with supply-chain hardening.',
      },
    ],
  },
  {
    title: 'Open Food Network (open source) — Full-stack Developer',
    period: 'July 2024 - Present',
    summary: 'Open-source Rails marketplace connecting local farmers and consumers.',
    bullets: [
      {
        lead: '- Merged 20 pull requests',
        text: ' of features and fixes, mostly around product creation and order-cycle workflows, in a mature open-source Rails codebase.',
      },
      {
        lead: '- Took on maintenance work that keeps the project healthy',
        text: ', such as removing the awesome_nested_set gem, upgrading dependencies, and moving legacy CableReady code to Hotwire.',
      },
      {
        lead: '- Worked through review with the maintainers',
        text: ' on GitHub and Slack, where clear written communication carries most of the collaboration.',
      },
    ],
  },
  {
    title: 'SciNote ELN — Full-stack Developer',
    period: 'June 2023 - April 2024',
    summary: 'Electronic lab notebook (Rails, Vue.js) used by research labs to manage experiments and inventory.',
    bullets: [
      {
        lead: '- Merged 240 pull requests in ten months',
        text: ', delivering features consistently in a large codebase from Jira tickets and Figma designs, alongside product, design, and QA.',
      },
      {
        lead: '- Built the inventory item card',
        text: ' (stock management, reminders, barcode and QR labels, item relationships) and the global search page across tasks, results, reports, and assets.',
      },
      {
        lead: '- Extended the public V2 API',
        text: ' with endpoints for protocol step and result elements, and wrote their documentation.',
      },
      {
        lead: '- Handled the less visible work too',
        text: ': the Open Vector Editor integration, jQuery 3 upgrade fixes, Content Security Policy tightening, and SSO provider changes.',
      },
    ],
  },
  {
    title: 'Marble — Full-stack Developer',
    period: 'March 2022 - February 2023',
    summary: 'Marble Academy, a Rails course platform, and Marble Flows, an interactive flow builder.',
    bullets: [
      {
        lead: '- Merged 159 pull requests in eleven months',
        text: ' across both products, shipping features and fixes through a staging-to-production release flow.',
      },
      {
        lead: '- Built and maintained the Academy payments and subscription layer',
        text: ' on Stripe, including iDEAL for euro customers, integrations with HubSpot, Mailchimp, Pabbly, and TeamTailor, and Czech, Chinese, and German localisation.',
      },
      {
        lead: '- Cut flow page loads by up to 5 seconds',
        text: ' on Marble Flows by batching GraphQL resolvers to remove N+1 queries, an approach I later wrote up on Medium.',
      },
      {
        lead: '- Moved Academy views to Hotwire and Stimulus',
        text: ', with Sidekiq for background work.',
      },
    ],
  },
  {
    title: 'Microverse — Code Reviewer and Mentor',
    period: 'January 2021 - December 2021',
    summary: 'Remote software-development bootcamp.',
    bullets: [
      {
        lead: '- Reviewed student Rails and JavaScript projects',
        text: ' and led feedback sessions, giving detailed written reviews on structure, testing, and readability that helped students stay in the programme.',
      },
      {
        lead: '- Mentored junior web developers',
        text: ', providing technical support through code reviews and proposing improvements in code organisation and performance.',
      },
    ],
  },
  {
    title: 'Ministry of Secondary Education, Cameroon — Mathematics Teacher',
    period: 'March 2014 - April 2020',
    summary: '',
    bullets: [
      {
        lead: '- Taught algebra and calculus at secondary level for six years',
        text: ', preparing students for national exams and engineering-school entry.',
      },
      {
        lead: '- Learned to break down complex concepts and explain them simply',
        text: ', a habit that still shapes how I write code, reviews, and documentation.',
      },
    ],
  },
];

const education = [
  {
    title: 'University of Bamenda — BEd Mathematics',
    period: 'October 2010 - July 2013',
    summary: 'Second-class upper division, Higher Teachers Training Diploma in Mathematics.',
    bullets: [
      {
        lead: '- Developed strong analytical and problem-solving skills',
        text: ' through extensive coursework in calculus, algebra, and related fields.',
      },
    ],
  },
  {
    title: 'Microverse — Full-stack Developer Certification',
    period: 'October 2020 - August 2021',
    summary: '',
    bullets: [
      {
        lead: '- Mastered algorithms, data structures, and full-stack development',
        text: ' through 1200+ hours of hands-on projects.',
      },
      {
        lead: '- Gained expertise in remote pair programming',
        text: ', using GitHub and GitFlow for collaboration and sharpening communication through daily standups.',
      },
    ],
  },
  {
    title: 'Languages',
    period: '',
    summary: 'English, native-level fluency. French, fluent.',
    bullets: [],
  },
];

const skills = [
  { name: 'Ruby on Rails', competence: 90 },
  { name: 'Ruby', competence: 88 },
  { name: 'Hotwire (Turbo, Stimulus)', competence: 88 },
  { name: 'RSpec & Capybara', competence: 85 },
  { name: 'PostgreSQL', competence: 82 },
  { name: 'JavaScript', competence: 82 },
  { name: 'React', competence: 78 },
  { name: 'Vue.js', competence: 78 },
  { name: 'GraphQL', competence: 78 },
  { name: 'Tailwind CSS', competence: 80 },
  { name: 'Kamal & Docker', competence: 75 },
  { name: 'Git & GitHub Actions', competence: 82 },
];

const ResumeEntry = ({ entry }) => (
  <Grid className="resume-list-item">
    <Typography className="resume-list-item-title">{entry.title}</Typography>
    {entry.period && (
      <Typography>
        <em style={dateStyle}>{entry.period}</em>
      </Typography>
    )}
    {entry.summary && <Typography>{entry.summary}</Typography>}
    {entry.bullets.map((bullet) => (
      <Typography key={bullet.lead}>
        <em style={leadStyle}>{bullet.lead}</em>
        {bullet.text}
      </Typography>
    ))}
  </Grid>
);

ResumeEntry.propTypes = {
  entry: PropTypes.shape().isRequired,
};

const Resume = () => (
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
          <Typography sx={sectionTitleStyle}>Employment</Typography>
          {employment.map((entry) => (
            <ResumeEntry key={entry.title} entry={entry} />
          ))}
        </Grid>
        <Grid sx={{ margin: '30px 0' }} className="resume-list">
          <Typography sx={sectionTitleStyle}>Education</Typography>
          {education.map((entry) => (
            <ResumeEntry key={entry.title} entry={entry} />
          ))}
        </Grid>
        <Grid sx={{ margin: '30px 0' }} className="resume-list">
          <Typography sx={sectionTitleStyle}>General Skills</Typography>
          <Grid sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {skills.map((skill) => (
              <Skill key={skill.name} skill={skill} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Grid>
);

export default Resume;
