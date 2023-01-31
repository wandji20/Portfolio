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
    description: 'Responsive web app where users can answer questions (just once and within the allocated duration) from different categories. Answers are cumulated and displayed on a results page.',
    stacks: ['Ruby on Rails', 'React', 'JavaScript', 'Apollo Client', 'GraphQL', 'Bootstrap', 'HTML', 'CSS'],
    source: 'https://github.com/wandji20/quiz-center-front',
    live: 'https://quiz-center-front.netlify.app/',
  },
  {
    id: 1,
    title: 'Sneakers Hub',
    url: sneakers,
    description: 'A responsive e-commerce web application where users can browse, filter, search, make payments for sneakers and subscribe to newsletters.',
    stacks: ['Ruby on Rails', 'Redis', 'SideKiq', 'Hotwire', 'Stimulus JS', 'Bootstrap'],
    live: 'https://sneakers-hub.fly.dev/',
    source: 'https://github.com/wandji20/sneakers-hub/',
  },
  {
    id: 2,
    title: 'A plus Garage',
    url: garage,
    description: 'A mobile car tracker to monitor and update car parts while using a Rails API manage UI data.',
    stacks: ['React and Redux', 'Ruby on Rails', 'JavaScript', 'HTML', 'Bootstrap', 'CSS'],
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
