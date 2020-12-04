import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andy Stitt', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Web Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Andy Stitt',
  subtitle: 'I am a web developer specializing in front-end work.',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.jpg',
  paragraphOne: 'I have worked in the “tech for good” space since 2008 as a layout designer, front-end developer, digital marketing manager, and project manager.',
  paragraphTwo: 'I was in the nonprofit world for over a decade. I made a brief stop at a pharma marketing company with clients who treat rare diseases. I am currently in state government working for the Delaware Department of State.',
  paragraphThree: "My main work these days is as the lead developer on the Delaware Coronavirus website. I love contributing to public health and making a difference in people's lives in a time of national crisis.",
  resume: 'https://www.linkedin.com/in/andrewstitt/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'coronavirus-website.jpg',
    title: 'Coronavirus Website',
    info: "I did the layout design and am the lead developer for the State of Delaware's Coronavirus Website. I manage it with my team as well as the Department of Health and Social Services and the Delaware Emergency Management Agency.",
    info2: 'The site is built on WordPress.',
    url: 'https://coronavirus.delaware.gov',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coronavirus-testing-event-calendar.jpg',
    title: 'Coronavirus Testing Event Calendar',
    info: 'The Delaware state government wants as many citizens as possible to get tested for COVID-19. We wanted to give people easily accessible information on when and where they can get tested.',
    info2: 'I built a testing event calendar with a searchable map using the Modern Tribe Events Calendar WordPress plugin.',
    url: 'https://coronavirus.delaware.gov/testing-events/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'delaware-city-website.jpg',
    title: 'Delaware City Website',
    info: 'I turned a custom design into a custom-built WordPress theme for the municipality of Delaware City, Delaware.',
    info2: 'This theme was built using Bootstrap 4, jQuery, and FontAwesome.',
    url: 'https://delawarecity.delaware.gov',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'small-business-phase-2-industry-specific-guidance.jpg',
    title: 'Small Business Reopening Guidance',
    info: 'On the Delaware Division of Small Business website, I built a series of filters that businesses could use to find reopening guidance based on their industry.',
    info2: 'I built the interface using jQuery and Font Awesome icons.',
    url: 'https://business.delaware.gov/coronavirus/delawares-recovery-phase-2-guidance/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I take on occasional freelance work and am open to contacts for networking. Reach out anytime!',
  btn: '',
  email: 'andystitt829@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrewstitt/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/andystitt829',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andystitt829',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
