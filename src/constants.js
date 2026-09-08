import oneview from './images/oneview.png';
import garage from './images/garage.jpg';
import culture from './images/culture.png';
import linters from './images/linters.png';
import sneakers from './images/sneakers.jpg';
import quizCenter from './images/quiz-center.png';

const projects = [
  {
    id: 0,
    title: 'OneView Properties',
    url: oneview,
    description: 'A property-management platform for landlords and property firms in Cameroon, in production since 2026. Built end to end on Rails 8 and Hotwire: tenancies, invoicing, rent reconciliation and audit history, a provider-neutral payments layer with MTN Mobile Money, a native e-signature flow, and consent, retention and deletion flows for Cameroon’s 2024 data-protection law. Ships with a Hotwire Native Android app and around 2,700 RSpec examples, deployed with Kamal to separate web, worker and database servers.',
    stacks: ['Ruby on Rails 8', 'Hotwire', 'Turbo', 'Stimulus', 'PostgreSQL', 'Solid Queue', 'RSpec', 'Kamal', 'Hotwire Native', 'Kotlin', 'Tailwind CSS'],
    live: 'https://oneviewproperties.com/',
  },
  {
    id: 1,
    title: 'Quiz Center',
    url: quizCenter,
    description: 'A responsive quiz platform where users answer category-based questions, with answers displayed on a results page. Users are restricted to answering once within the allocated time, enhancing engagement and challenge. Built using Rails, React, Apollo Client and GraphQL, the app features real-time data fetching and a user-friendly interface for a dynamic quiz experience.',
    stacks: ['Ruby on Rails', 'React', 'JavaScript', 'Apollo Client', 'GraphQL', 'Bootstrap', 'HTML', 'CSS'],
    source: 'https://github.com/wandji20/quiz-center-front',
    live: 'https://quiz-center-front.netlify.app/',
  },
  {
    id: 2,
    title: 'Sneakers Hub',
    url: sneakers,
    description: 'A fully responsive e-commerce web application allowing users to browse, filter and search for products, with seamless payment processing powered by Stripe. Optimized performance is achieved through Sidekiq for background jobs. Built with Rails, Stimulus and the Stripe web UI, delivering a smooth and efficient shopping experience.',
    stacks: ['Ruby on Rails', 'Redis', 'Sidekiq', 'Hotwire', 'Stimulus JS', 'Stripe', 'Bootstrap'],
    live: 'https://sneakers-hub.fly.dev/',
    source: 'https://github.com/wandji20/sneakers-hub/',
  },
  {
    id: 3,
    title: 'A plus Garage',
    url: garage,
    description: 'The application uses a Rails API to manage UI data while monitoring and updating car parts.',
    stacks: ['Ruby on Rails', 'JavaScript', 'React', 'Redux', 'HTML', 'Bootstrap', 'CSS'],
    live: 'https://a-plus-garage.netlify.app/',
    source: 'https://github.com/wandji20/a-plus-garage',
  },
  {
    id: 4,
    title: 'Culture Educate',
    url: culture,
    description: 'A Rails app that allows users to create an account and view articles organized by category. Users can also create, upvote and downvote articles.',
    stacks: ['Ruby on Rails', 'HTML', 'Bootstrap', 'CSS'],
    source: 'https://github.com/wandji20/Culture-Educate',
    live: 'https://chat-blog-app.fly.dev/',
  },
  {
    id: 5,
    title: 'Text Grammar Linter',
    url: linters,
    description: 'A linter designed to scan a text file and output errors in its structure and typography.',
    stacks: ['Ruby'],
    source: 'https://github.com/wandji20/Grammar-checker',
  },
];

export default projects;
