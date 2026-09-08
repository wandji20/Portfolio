# Wandji Bertrand — Portfolio

Personal portfolio site for Wandji Bertrand, a full-stack Ruby on Rails developer based in
Douala, Cameroon. Live at [wandji-bertrand.netlify.app](https://wandji-bertrand.netlify.app/).

The content mirrors the CV in `public/WandjiBertrandResume.pdf` and the
[LinkedIn profile](https://www.linkedin.com/in/wandji-bertrand/), so all three stay consistent.

## Stack

React 18, Material UI 5 and Create React App.

## Where the content lives

| Section | File |
| --- | --- |
| Header, name, tagline, contact details | `src/components/Profile.js` |
| Intro paragraphs and CV download button | `src/App.js` |
| Employment, education and skills | `src/components/Resume.js` |
| Project cards | `src/constants.js` |
| Contact details and message form | `src/components/Contact.js` |
| Page title and social preview tags | `public/index.html` |

When the CV changes, replace `public/WandjiBertrandResume.pdf` and update
`src/components/Resume.js` in the same commit.

## Scripts

```bash
npm install     # install dependencies
npm start       # run at http://localhost:3000
npm test        # run tests
npm run build   # production build into build/
npx eslint src --ext .js
```

## Deployment

Netlify builds from the default branch with `npm run build` and publishes `build/`.
