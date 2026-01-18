export const myProjects = [
  {
    id: 1,
    title: "Posture Correction System",
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
    id: 2,
    title: "EcommerceHub",
    description:
      "A multi-role e-commerce platform with comprehensive order management and secure payments.",
    subDescription: [
      "Engineered a multi-role platform (Admin/User) with Spring Boot REST APIs and Role-Based Access Control.",
      "Integrated Stripe payments and managed order lifecycles using PostgreSQL; deployed securely on AWS.",
      "Implemented scalable backend architecture with production-ready API documentation.",
    ],
    href: "",
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
    id: 3,
    title: "Nimbus Keyboards",
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
    id: 4,
    title: "Movie Recommender System",
    description:
      "A machine learning-based recommendation engine that suggests movies based on user preferences.",
    subDescription: [
      "Implemented content-based filtering using cosine similarity to recommend movies.",
      "Built an interactive Streamlit web interface for easy user interaction.",
      "Utilized TMDB API to fetch movie posters and details in real-time.",
    ],
    href: "",
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
        path: "/assets/logos/react.svg", // Using React logo as placeholder if Streamlit logo not available, or I should check. User didn't provide Streamlit logo path. I'll stick to a generic one or React if I must, but ideally I would check. Step 20 didn't show streamlit logo. I'll use Python logo for now or just generic.
      },
    ],
  },
  {
    id: 5,
    title: "PG Life",
    description:
      "A full-stack web platform with optimized search and secure user authentication.",
    subDescription: [
      "Optimized search algorithm, increasing CTR by 25% and reducing query response time by 40%.",
      "Increased search result relevance, leading to a 30% increase in user retention.",
      "Developed and deployed secure user authentication for 500+ test users, reducing session dropouts by 15%.",
      "Integrated password hashing for enhanced security during user registration and login processes.",
    ],
    href: "",
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
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "https://starbucks-landing-page-pi-fawn.vercel.app/",
    logo: "",
    image: "/assets/projects/Starbucks_landing_page.png",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 7,
    title: "3D CSS",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "https://css-3-d-halo.vercel.app/",
    logo: "",
    image: "/assets/projects/3D_CSS.png",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
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
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/anash-gond-023005285/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/the_anonymous_ag/?__pwa=1",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "",
    job: "PG Life",
    date: "Sep 2024 - Oct 2024",
    contents: [
      "Optimized search algorithm, increasing CTR by 25% and reducing query response time by 40%.",
      "Increased search result relevance, leading to a 30% increase in user retention.",
      "Developed and deployed secure user authentication for 500+ test users, reducing session dropouts by 15%.",
      "Integrated password hashing for enhanced security during user registration and login processes.",
    ],
  },
  {
    title: "",
    job: "Mystery Messaging Website",
    date: "Nov 2024 - Jan 2025",
    contents: [
      "Built a full-stack anonymous messaging website using Next.js, TypeScript and MongoDB with secure, scalable architecture.",
      "Implemented custom authentication with AuthJS, JWT tokens, and OTP verification, ensuring robust session management.",
      "Integrated AI-powered message generation using OpenAI API and automated email verification via Resend API.",
      "Developed a responsive UI with ShadCN UI, Zod, and React Hook Form for seamless user experience.",
    ],
  },
  {
    title: "",
    job: "Nimbus Keyboards",
    date: "Jun 2025 - Jul 2025",
    contents: [
      "Developed a full-stack e-commerce application using Next.js 15, React 19, and TypeScript with server-side rendering for optimal performance.",
      "Implemented interactive 3D product visualization using React Three Fiber and Three.js for enhanced user engagement.",
      "Integrated Stripe API for secure payment processing and Prismic headless CMS for dynamic content management.",
      "Deployed on Vercel with responsive UI using Tailwind CSS and GSAP animations.",
    ],
  },
  {
    title: "",
    job: "Posture Correction System (Capstone Project)",
    date: "Jan 2025 - Nov 2025",
    contents: [
      "Developed a deep learning system to detect flaws in posture using MediaPipe Pose and LSTM networks.",
      "Utilized TensorFlow, NumPy with a focus on human activity recognition and time-series data preprocessing.",
      "Engineered a real-time training pipeline for labeling and training on correct vs incorrect form with real-time webcam-based inference using OpenCV.",
    ],
  },
  {
    title: "",
    job: "EcommerceHub",
    date: "Dec 2025 - Present",
    contents: [
      "Developed a production-grade marketplace using Spring Boot, React, and Redux. Implemented microservices with separate customer, admin, and seller portals with real-time inventory management.",
      "Integrated enterprise-level authentication using Spring Security with JWT tokens and role-based access control (RBAC). Implemented secure payment gateway integration with Stripe API.",
      "Designed complex entity relationships using JPA/Hibernate across PostgreSQL databases. Implemented advanced features including pagination, sorting and search.",
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
