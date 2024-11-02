export const about = {
  siteUrl: "",
  name: "Tijani Fulani",
  pageTitle: "Tijani Fulani",
  description: "Software Engineer from London, UK.",
  github: "https://github.com/Tijanif",
  linkedin: "https://www.linkedin.com/in/tijanifulani/",
  about: [
    "I am a Full Stack Software Developer who loves: writing quality code, learning new technologies, and solving complex problems. ",
    "Before joining the tech industry my background was in politics, sales and marketing, but I was always curious about computers.",
    "When I am not reading or writing about code - I spend the rest of my time following Arsenal Football Club and cycling.",
  ],
  experience: [
    {
      name: "Daaci",
      description: ["Frontend Developer, 2023 - 2024"],
      link: "https://daaci.com",
      technologies: ["Node.js", "React.js", "TypeScript", "C++"],
      bio: [
        "DAACI is building a composer-focused generative music composition system using machine learning techniques informed by musicology.",
        "Its Meta-Composition Interface (MCI) will have applications in real time gaming soundtracks, fan engagement, and film & TV music composition.",
        "I have been focusing on building out prototypes allowing meta-composition in the browser - in TypeScript / React, using the Web Audio and Web MIDI API."
      ],
    },
    {
      name: "Triptease",
      description: ["Associate Software Engineer, 2021 - 2022"],
      link: "https://triptease.com",
      technologies: ["Node.js", "React.js", "TypeScript", "MongoDB"],
      bio: [
        "Triptease help hotels to increase their direct bookings · Trusted by 10,000 hotels to drive success - no matter the circumstances.",
        "Worked on the Messages product, including the UI of the messages themselves, a rich content editor with live preview for message creation, content database and CDN, event tracking and analytics platform.",
        "My team was responsible of building the platform for hoteliers to manage their messages and crunch stats.",
      ],
    },
    {
      name: "Boolean",
      description: ["Software Engineering Course, 2021 - 2021"],
      link: "https://boolean.co.uk",
      technologies: ["Javascript", "React", "Typescript", "Node.js", "Express"],
      bio: [
        "An immersive full-time coding academy where I developed skills in full-stack Javascript.",
        "Technologies include: Javascript, React, Typescript, Node.js, Express.",
        "Developed skills in testing, git workflow, agile development, pair programming.",
      ],
    },
    {
      name: "Programmai",
      description: ["Junior Frontend Developer Internship, 2019 - 2020"],
      link: "https://p.ai/",
      technologies: ["Javascript", "React", "Typescript", "Node.js", "Express"],
      bio: [
        "Programmai is a predictive marketing platform for e-commerce marketers.",
        "Created components such as forms and buttons for the site.",
        "Worked closely with the Lead Developer, Product Manager as well as the Backend team.",
      ],
    },
  ],
  projects: [
    {
      name: "This website!",
      description:
        "Built with Next js and Tailwind CSS, based on the devfolio template by Ryan Fitzgerald",
      link: "https://tijanif.vercel.app/",
    },
    {
      name: "Fronted Mentor",
      description: "My attempts of some of the Frontend Mentor challenges",
      link: "https://blissful-montalcini-3567f2.netlify.app/",
    },
    {
      name: "Travel Home",
      description:
        "A travel website in order to learn more about Materialize CSS",
      link: "https://tijanif.github.io/travelhome/",
    },
    {
      name: "My BookList",
      description: "A book list where users can add and delete a book",
      link: "https://tijanif.github.io/myBookList/",
    },
  ],
  skills: [
    {
      name: "Languages & Frameworks",
      description: "JavaScript, TypeScript, Node.js, React,",
    },
    {
      name: "Databases",
      description: "Postgres",
    },
  ],
  education: [
    {
      name: "University of Kent - Brussels",
      description: "International Political Economy, 2011-2012",
      bio: [],
    },
    {
      name: "London Metropolitan University",
      description: "International Relations and Politics , 2008 - 2011",
      bio: [],
    },
  ],
};

export type About = typeof about;
