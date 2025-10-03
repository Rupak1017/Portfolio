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
  Uber,
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
    company_name: "Airbnb (India)",
    icon: Helix,
    iconBg: "#FFFFFF",
    date: "August 2021 - July 2023",
    points: [
       "Built scalable, reusable UI systems with React.js, Redux, and TypeScript, converting Figma prototypes into WCAG-compliant components and documenting them in Storybook,boosting maintainability and accessibility for 3,500+ weekly users.",
       "Optimized performance across the stack by resolving UI bottlenecks, applying Node.js SSR and CDN strategies, and implementing caching/pagination,cutting page load time from 4.2s to 1.8s and API latency from 1.6s to 700ms at scale.",
       "Delivered high-impact features like an Elasticsearch-powered Help Center search with improved typeahead responsiveness and query relevance, scaling to 45K requests/day while reducing latency from 1.2s to 500ms.",
       "Strengthened code quality and delivery by introducing Jest/RTL tests (85% coverage), enforcing CI gates, and driving agile collaboration with designers, PMs, and engineers,reducing sprint bugs by 80% and improving conversion rates by 8%.",
    ],
  },
  {
    title: "Software Engineer ( Web-Contract) ",
    company_name: "Virufy (Los Altos, U.S.A)",
    icon: Virufy,
    iconBg: "#FFFFFF",
    date: "June 2024 - August 2024",
    points: [
      "Revamped Virufy’s web platform in collaboration with the frontend team using React, Next.js and TypeScript, reducing load time by 25% and improving user retention.",
      "Enhanced performance through lazy loading, memoization, and optimized state updates; resolved complex TypeScript issues and improved stability via centralized state using Context API.",
      "Ensured code quality, test coverage (Jest, React Testing Library), accessibility (WCAG), and cross-browser compatibility across modern frontend workflows.",
      "Contributed to Agile delivery via Jira, Git, and CI/CD with Azure, while collaborating cross-functionally with design and product teams.",
    ],
  },
  {
    title: "Information Technology and Management",
    company_name: "Illinois Institute of Technology (Chicago, U.S.A)",
    icon: IIT,
    iconBg: "#FFFFFF",
    date: "August 2023 - May 2025",
    points: [
      "Graduated with a degree in Information Technology, specializing in Full-Stack Web Development, with a 4.0 GPA.",
      "Served as a Teaching Assistant for 2 semesters, supporting student learning and coursework.",
      "Recipient of the Excellent Student Award for academic excellence and active contributions to the university through leadership in student societies, event organization, and mentorship roles.",

    ],
  },
  {
    title: "Software Engineer (Contract)",
    company_name: "Uber (U.S.A)",
    icon: Uber,
    iconBg: "#FFFFFF",
    date: "July 2025 - Present",
    points: [
      "Engineered and optimized 10+ modular UI components with React, Redux, and TypeScript for a real-time customer support dashboard, supporting 5,000+ weekly sessions and reducing triage time by 22%.",
      "Enhanced dashboard performance by applying memoization, lazy loading, code-splitting, Redis caching, and MySQL query optimization, reducing TTI by 40% and latency by 37% under concurrent usage.",
      "Integrated Google Maps API with WebSocket/ Kafka streams and built RESTful APIs using Node.js and Python to deliver real-time trip insights and ensure accurate data flow across 4+ reporting workflows for global support teams.",
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
    source_code_link: "https://movie-hub-murex.vercel.app/",
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
