import garage from './images/garage.jpg';
import culture from './images/culture.png';
// import todo from './assets/todo.png';
import linters from './images/linters.png';
import sneakers from './images/sneakers.jpg';
import quizCenter from './images/quiz-center.png';

const projects = [
  {
    id: 0,
    title: 'Quiz Center',
    url: quizCenter,
    description: 'A responsive quiz platform where users can answer category-based questions, with answers displayed on a results page. Users are restricted to answering once within the allocated time, enhancing engagement and challenge. Built using Rails, React, Apollo Client, and GraphQL, the app features real-time data fetching and a user-friendly interface for a dynamic quiz experience.',
    stacks: ['Ruby on Rails', 'React', 'JavaScript', 'Apollo Client', 'GraphQL', 'Bootstrap', 'HTML', 'CSS'],
    source: 'https://github.com/wandji20/quiz-center-front',
    live: 'https://quiz-center-front.netlify.app/',
  },
  {
    id: 1,
    title: 'Sneakers Hub',
    url: sneakers,
    description: 'A fully responsive e-commerce web application allowing users to browse, filter, and search for products, with seamless payment processing powered by Stripe. Optimized performance is achieved through Sidekiq for background jobs. Built with Rails, StimulusJS, and Stripe web UI, delivering a smooth and efficient shopping experience. Built with Rails, StimulusJS, and Stripe web UI.',
    stacks: ['Ruby on Rails', 'Redis', 'SideKiq', 'Hotwire', 'Stimulus JS', 'Bootstrap'],
    live: 'https://sneakers-hub.fly.dev/',
    source: 'https://github.com/wandji20/sneakers-hub/',
  },
  {
    id: 2,
    title: 'A plus Garage',
    url: garage,
    description: 'The application uses a Rails API to manage UI data while monitoring and updating car parts.',
    stacks: ['Ruby on Rails', 'JavaScript', 'React', 'Redux', 'HTML', 'Bootstrap', 'CSS'],
    live: 'https://a-plus-garage.netlify.app/',
    source: 'https://github.com/wandji20/a-plus-garage',
  },
  {
    id: 3,
    title: 'Culture Educate',
    url: culture,
    description: ' A Rails app that allows users to create an account and view articles organized by category. Also, users can create, upvote, and downvote articles.',
    stacks: ['Ruby on Rails', 'HTML', 'Bootstrap', 'CSS'],
    source: 'https://github.com/wandji20/Culture-Educate',
    live: 'https://chat-blog-app.fly.dev/',
  },
  // {
  //   title: 'Todo App',
  //   url: todo,
  //   description: 'A basic to-do list app made with JavaScript and webpack.
  // Users can create projects, remove projects, assign, remove, and edit to-dos.',
  //   stacks: ['JavaScript', 'HTML', 'CSS'],
  //   source: 'https://github.com/wandji20/To-Do-List',
  //   live: 'https://elastic-goldstine-735b20.netlify.app/',
  // },
  {
    id: 4,
    title: 'Text Grammar Linter',
    url: linters,
    description: ' A linter, designed to scan a text file and output errors in its structure and typography.',
    stacks: ['Ruby'],
    live: '#',
    source: 'https://github.com/wandji20/Grammar-checker',
  },
];

export default projects;
