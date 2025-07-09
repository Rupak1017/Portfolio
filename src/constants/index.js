import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Helix,
  Virufy,
  IIT,
  threejs,
} from "../assets";

export const navLinks = [
    {
    id: "home", 
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
   {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Helix Stack (Pune, India)",
    icon: Helix,
    iconBg: "#FFFFFF",
    date: "September 2021 - July 2023",
    points: [
      "Led frontend development for a platform with 30K+ users using React, JavaScript, and scalable UI patterns, improving load speed by 20% through performance optimizations.",
      "Collaborated on secure, efficient backends with Node.js, Express, and PostgreSQL; implemented JWT auth and automated deployments via Docker, GitHub Actions, and Azures.",
      "Achieved 90% test coverage with Jest, resolved critical performance bottlenecks, and led a 5-member optimization project that saved $10K annually.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer ( Web-Contract) ",
    company_name: "Virufy (Los Altos, U.S.A)",
    icon: Virufy,
    iconBg: "#FFFFFF",
    date: "June 2024 - August 2024",
    points: [
      "Revamped Virufy’s web platform in collaboration with the frontend team using React and TypeScript, reducing load time by 25% and improving user retention.",
      "Enhanced performance through lazy loading, memoization, and optimized state updates; resolved complex TypeScript issues and improved stability via centralized state using Context API.",
      "Ensured code quality, test coverage (Jest, React Testing Library), accessibility (WCAG), and cross-browser compatibility across modern frontend workflows",
      "Contributed to Agile delivery via Jira, Git, and CI/CD with Azure, while collaborating cross-functionally with design and product teams.",
    ],
  },
  {
    title: "Information Technology and Management",
    company_name: "Illinois Institute of Technology",
    icon: IIT,
    iconBg: "#FFFFFF",
    date: "August 2023 - May 2025",
    points: [
      "Graduated with a degree in Information Technology, specializing in Full-Stack Web Development, with a 4.0 GPA.",
      "Served as a Teaching Assistant for 2 semesters, supporting student learning and coursework.",
      "Recipient of the Excellent Student Award for academic excellence and active contributions to the university through leadership in student societies, event organization, and mentorship roles.",
      
    ],
  },

];


const projects = [
  {
    name: "Jarvis AI",
    description:
      "Engineered a Generative AI–powered platform using MERN stack, enabling real-time collaboration with up to 10 users and integrated Google Gemini for live code and content assistance.",
tags: [
    {
    name: "javascript",
    color: "yellow-text-gradient", // JavaScript = yellow
  },
  {
    name: "react",
    color: "blue-text-gradient", // React = blue
  },
  {
    name: "nodejs",
    color: "green-text-gradient", // Node.js = green
  },
  {
    name: "express",
    color: "gray-text-gradient", // Express = neutral/gray
  },
  {
    name: "mongodb",
    color: "green-text-gradient", 
  },
  {
    name: "websockets",
    color: "orange-text-gradient", // WebSockets = real-time = orange
  },
  {
    name: "web containers",
    color: "cyan-text-gradient", // ONLY this one = cyan
  },
  {
    name: "gemini",
    color: "purple-text-gradient", // Gemini = LLM vibes = purple
  },
  {
    name: "tailwind",
    color: "pink-text-gradient", // Tailwind = pink
  },
  {
    name: "sentry",
    color: "orange-text-gradient", // error tracking
  },
],
    image:  "/Jarvis.jpeg",
    source_code_link: "https://jarvis-ai-five.vercel.app/",
  },
  {
    name: "MovieHub",
    description:
      "Crafted and launched a responsive React-based front-end application to showcase trending and popular movies and TV series trailers, integrating external APIs and ensuring smooth experience across devices.",
tags: [
      {
    name: "javascript",
    color: "yellow-text-gradient", // JavaScript = yellow
  },
  {
    name: "react",
    color: "blue-text-gradient", // React = blue
  },
  {
    name: "redux",
    color: "purple-text-gradient", // reuse = Gemini
  },
  {
    name: "jest",
    color: "orange-text-gradient", // reuse = WebSockets
  },
  {
    name: "react testing library",
    color: "pink-text-gradient", // reuse = Tailwind
  },
  {
    name: "azure",
    color: "gray-text-gradient", // Express = neutral/gray
  },
  {
    name: "webpack",
    color: "yellow-text-gradient", // reuse = JavaScript
  },
  {
    name: "restapi",
    color: "green-text-gradient", // reuse = Node.js
  },

  {
    name: "tailwind",
    color: "purple-text-gradient", // alt reuse to avoid pink clash with scss
  },
    {
    name: "microsoft clarity",
    color: "blue-text-gradient", // session replay / analytics
  },
],
    image: "/moviehub.jpg",
    source_code_link: "https://black-island-01206f710.6.azurestaticapps.net/",
  },
  {
    name: "SnapSight",
    description:
      "Built and launched a post-centric social platform from scratch, enabling secure access and interactive content sharing while validating product assumptions through early traction and meaningful engagement.",
    tags: [
  {
    name: "ejs",
    color: "gray-text-gradient", // server-side templates, neutral tone
  },
  {
    name: "tailwind css",
    color: "pink-text-gradient", // same as "css"
  },
  {
    name: "javascript",
    color: "yellow-text-gradient", // frontend scripting
  },
  {
    name: "nodejs",
    color: "green-text-gradient", // backend runtime
  },
  {
    name: "express",
    color: "gray-text-gradient", // lightweight backend framework
  },
  {
    name: "mongodb",
    color: "green-text-gradient", // same as nodejs
  },
  {
    name: "passport.js",
    color: "purple-text-gradient", // authentication
  },
  {
    name: "jest",
    color: "orange-text-gradient", // reuse = WebSockets
  },
  {
  name: "lighthouse",
  color: "orange-text-gradient", // matches performance/insights theme
}

],
    image: "/snapsight.jpg",
    source_code_link: "https://snapsight.glitch.me/",
  },
];

export {  technologies, experiences, projects };
