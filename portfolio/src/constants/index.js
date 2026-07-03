export const myProjects = [
  {
    id: 1,
    title: "Nimbus Keyboards",
    category: "Full Stack",
    description:
      "A high-performance e-commerce application for custom keyboards with 3D visualization.",
    subDescription: [
      "Developed a full-stack e-commerce application using Next.js 15, React 19, and TypeScript with server-side rendering for optimal performance.",
      "Implemented interactive 3D product visualization using React Three Fiber and Three.js for enhanced user engagement.",
      "Integrated Stripe API for secure payment processing and Prismic headless CMS for dynamic content management.",
      "Deployed on Vercel with responsive UI using Tailwind CSS and GSAP animations.",
    ],
    href: "https://robusta-keyboard-5xx2.vercel.app/",
    logo: "",
    image: "/assets/projects/Custom_Keyboard_Ecommerce.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Posture Correction System",
    category: "GenAI",
    description:
      "A deep learning system for real-time posture detection and correction feedback.",
    subDescription: [
      "Achieved 92%+ accuracy in posture detection using MediaPipe and LSTM networks on time-series data.",
      "Built a real-time inference pipeline (25 FPS) using OpenCV, optimizing preprocessing time by 30%.",
      "Delivered immediate corrective feedback, improving user posture consistency by 40% during testing.",
    ],
    href: "https://train-wise-website.vercel.app/",
    logo: "",
    image: "/assets/projects/Personal_AI_Trainer.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 3,
    title: "EcommerceHub",
    category: "Back End",
    description:
      "A multi-role e-commerce platform with comprehensive order management and secure payments.",
    subDescription: [
      "Engineered a multi-role platform (Admin/User) with Spring Boot REST APIs and Role-Based Access Control.",
      "Integrated Stripe payments and managed order lifecycles using PostgreSQL; deployed securely on AWS.",
      "Implemented scalable backend architecture with production-ready API documentation.",
    ],
    href: "https://github.com/GreyNova/EcomHome.git",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "Spring Boot",
        path: "/assets/logos/spring-boot.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Movie Recommender System",
    category: "ML",
    description:
      "A machine learning-based recommendation engine that suggests movies based on user preferences.",
    subDescription: [
      "Implemented content-based filtering using cosine similarity to recommend movies.",
      "Built an interactive Streamlit web interface for easy user interaction.",
      "Utilized TMDB API to fetch movie posters and details in real-time.",
    ],
    href: "https://github.com/GreyNova/Movie-Recommender-System-with-TMDB-Dataset",
    logo: "",
    image: "/assets/projects/Movie_Recommender_System.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 5,
    title: "PG Life",
    category: "Full Stack",
    description:
      "A full-stack web platform with optimized search and secure user authentication.",
    subDescription: [
      "Optimized search algorithm, increasing CTR by 25% and reducing query response time by 40%.",
      "Increased search result relevance, leading to a 30% increase in user retention.",
      "Developed and deployed secure user authentication for 500+ test users, reducing session dropouts by 15%.",
      "Integrated password hashing for enhanced security during user registration and login processes.",
    ],
    href: "https://github.com/GreyNova/PG-Life",
    logo: "",
    image: "/assets/projects/PG_Life.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Starbucks Landing Page",
    category: "Front End",
    description:
      "A responsive and interactive Starbucks landing page clone built with vanilla web technologies.",
    subDescription: [
      "Developed a visually appealing UI using semantic HTML5 and custom CSS3 for layout and styling.",
      "Implemented interactive elements and image sliders using vanilla JavaScript for a dynamic user experience.",
      "Ensured full responsiveness across devices with media queries and a mobile-first design approach.",
    ],
    href: "https://starbucks-landing-page-pi-fawn.vercel.app/",
    logo: "",
    image: "/assets/projects/Starbucks_landing_page.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
    ],
  },
  {
    id: 7,
    title: "3D CSS",
    category: "Front End",
    description:
      "A mesmerizing 3D Halo effect created entirely using pure CSS and HTML.",
    subDescription: [
      "Leveraged advanced CSS3 properties like transform-style: preserve-3d and keyframe animations to create depth.",
      "Designed a complex 3D rotating structure without any JavaScript dependencies.",
      "Optimized rendering performance using hardware-accelerated CSS properties for smooth animations.",
    ],
    href: "https://css-3-d-halo.vercel.app/",
    logo: "",
    image: "/assets/projects/3D_CSS.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
    ],
  },
  {
    id: 8,
    title: "Freight & Logistics Blockchain",
    category: "BlockChain",
    description:
      "A decentralized logistics tracking application powered by an Ethereum smart contract deployed on the Sepolia testnet.",
    subDescription: [
      "Authored and deployed a Solidity smart contract on the Sepolia testnet to record immutable shipment events on-chain.",
      "Built a public dashboard that visualizes freight state transitions directly from contract data via Etherscan.",
      "Implemented transparent, tamper-resistant shipment tracking with verifiable transaction hashes for every lifecycle update.",
    ],
    href: "https://github.com/GreyNova/Freight-and-Logistics-using-Blockchain",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Solidity",
      },
      {
        id: 2,
        name: "Ethereum",
      },
      {
        id: 3,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 9,
    title: "Linklytics",
    category: "Full Stack",
    description:
      "A full-stack URL shortener with real-time click analytics, built across a React frontend and a Spring Boot backend.",
    subDescription: [
      "Designed a React frontend paired with a Spring Boot backend service that generates and resolves short links.",
      "Implemented click tracking and an analytics layer to surface traffic insights for each shortened URL.",
      "Packaged the backend (url-shortener-sb) alongside the React client for a clean, deployable monorepo structure.",
    ],
    href: "https://github.com/GreyNova/Linklytics",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/spring-boot.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 10,
    title: "Noticias Breves",
    category: "GenAI",
    description:
      "An AI-powered news aggregator that collects, summarizes, and surfaces concise news briefs.",
    subDescription: [
      "Built a Python pipeline that aggregates news from multiple sources and condenses articles into brief summaries.",
      "Applied generative-AI summarization to reduce long-form articles into scannable, high-signal updates.",
      "Structured the output for quick consumption across categories and topics.",
    ],
    href: "https://github.com/GreyNova/Noticias-breves",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "GenAI",
      },
    ],
  },
  {
    id: 11,
    title: "SQL Database Agent",
    category: "GenAI",
    description:
      "A natural-language-to-SQL agent that lets users query a database conversationally and returns grounded, accurate results.",
    subDescription: [
      "Engineered an LLM agent that translates natural-language questions into validated SQL queries.",
      "Containerized the service with Docker for consistent, reproducible deployments.",
      "Exposed a clean API surface so any frontend can submit queries and receive structured answers.",
    ],
    href: "https://sql-database-agent-eta.vercel.app",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "LLM Agents",
      },
      {
        id: 3,
        name: "Docker",
      },
    ],
  },
  {
    id: 12,
    title: "SRE Swarm",
    category: "GenAI",
    description:
      "An autonomous Site Reliability Engineering agent built on LangGraph that detects, diagnoses, patches, tests, and deploys fixes for production failures.",
    subDescription: [
      "Modeled a multi-step remediation workflow with LangGraph covering memory leaks, connection-pool exhaustion, and CPU spikes.",
      "Automated the full loop from incident detection through patch generation, testing, and deployment.",
      "Targeted a Spring Boot / AWS ECS service, demonstrating real failure-class coverage.",
    ],
    href: "https://github.com/GreyNova/SRE-SWARM",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "LangGraph",
      },
      {
        id: 3,
        name: "AWS",
      },
    ],
  },
  {
    id: 13,
    title: "Nano LLM",
    category: "ML",
    description:
      "A lightweight, from-scratch implementation of a GPT-style transformer language model built for educational exploration.",
    subDescription: [
      "Implemented the full transformer architecture (tokenization, attention, training loop) from the ground up in Python.",
      "Designed for step-by-step exploration of how GPT-like models are constructed and trained.",
      "Kept the implementation minimal and readable to make the internals easy to follow.",
    ],
    href: "https://github.com/GreyNova/Nano_LLM",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "PyTorch",
      },
      {
        id: 3,
        name: "Transformers",
      },
    ],
  },
  {
    id: 14,
    title: "Rubik's Cube Solver",
    category: "ML",
    description:
      "A computer-vision system that scans a Rubik's Cube from a live camera feed and computes an optimal solution.",
    subDescription: [
      "Captures and analyzes all six faces of the cube in real time using a live camera feed and OpenCV color detection.",
      "Reconstructs the cube's 3D state digitally and computes an optimal solution, averaging ~24 moves.",
      "Renders the solution as an intuitive, step-by-step visual guide.",
    ],
    href: "https://github.com/GreyNova/Rubik-s-Cube",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "OpenCV",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 3,
        name: "Computer Vision",
      },
    ],
  },
  {
    id: 15,
    title: "NGL",
    category: "Full Stack",
    description:
      "An anonymous messaging application built with Next.js and TypeScript, letting users receive questions without revealing identities.",
    subDescription: [
      "Developed a full-stack anonymous messaging flow with Next.js and TypeScript for a type-safe codebase.",
      "Implemented shareable user profiles that collect anonymous messages and questions.",
      "Structured the project for fast iteration with the modern Next.js app architecture.",
    ],
    href: "https://github.com/GreyNova/NGL",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/anash-g08a10419/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/the_anonymous_ag?igsh=MWx2MmNvemVid2NuYw==",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "",
    job: "Uniphar Biotech Pvt. Ltd. — Tech Intern",
    date: "Mar 2026 - Present",
    contents: [
      "Spearheaded the development of Uniphar Biotech's core enterprise website, replacing an outdated legacy system with a scalable React and TypeScript platform, improving overall application rendering speed by 40%.",
      "Engineered a responsive 'Liquid Glass' UI with Tailwind CSS and complex global transitions, enhancing navigation efficiency and reducing user workflow completion time by 25%.",
      "Architected and integrated a robust MongoDB schema to manage and index 1000+ pharmaceutical product records, achieving sub-100ms query response times.",
    ],
  },
  {
    title: "",
    job: "GenAI",
    date: "July 2025 - Present",
    contents: [
      "Developed advanced generative AI models and integrated them into real-world applications.",
      "Optimized model inference time and improved overall AI pipeline efficiency.",
    ],
  },
  {
    title: "",
    job: "Machine Learning",
    date: "April 2025 - Present",
    contents: [
      "Designed and implemented machine learning algorithms for predictive analysis and data processing.",
      "Trained and evaluated models using Python, TensorFlow, and scikit-learn.",
    ],
  },
  {
    title: "",
    job: "BlockChain",
    date: "Jan 2025 - Present",
    contents: [
      "Developed smart contracts and decentralized applications (dApps) using Solidity and Web3 technologies.",
      "Ensured high security and optimized gas usage for blockchain transactions.",
    ],
  },
  {
    title: "ISTE Thapar",
    job: "Core Member - Media Head",
    date: "Oct 2022 - May 2024",
    contents: [
      "Led 3+ major publicity initiatives for institutional chapters, expanding targeted event conversion rates by 35% and coordinating weekly cross-functional feedback workflows for 10+ team members.",
    ],
  },
  {
    title: "",
    job: "FullStack Development",
    date: "Feb 2024 - Present",
    contents: [
      "Built responsive and dynamic full-stack web applications using React, Node.js, and MongoDB.",
      "Implemented RESTful APIs and secure authentication mechanisms for user management.",
    ],
  },
  {
    title: "",
    job: "Backend",
    date: "March 2023 - 2024",
    contents: [
      "Engineered robust backend systems and microservices using Spring Boot, Node.js, and PostgreSQL.",
      "Managed databases, optimized queries, and ensured seamless integration with frontend services.",
    ],
  },
  {
    title: "",
    job: "FrontEnd",
    date: "October 2022 - 2023",
    contents: [
      "Created highly interactive and visually appealing user interfaces using modern HTML, CSS, JavaScript and React.",
      "Focused on responsive design and cross-browser compatibility to deliver optimal user experiences.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
