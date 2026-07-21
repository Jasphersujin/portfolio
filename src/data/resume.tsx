import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Jaspher sujin - Software Engineer",
  initials: "M",
  url: "https://jasphersujin.vercel.app",
  location: "Bengaluru, India",
  locationLink: "",
  description:
      // "Software Engineer building scalable multi-tenant SaaS platforms with high ownership across System Design, Architecture, Implementation, and Deployment.",
    "1.6+ Years of Experience as a Software Engineer, building systems from 0→1 in fast-paced startup environments—from planning, architecture, implementation.",
  // summary:
  //   "In early 2023, I left a senior engineering role to go all-in on building my own SaaS products. Before that, [I completed a double degree in computer science and business](/#education), [interned at companies like Stripe and Cloudflare](/#work), and [competed in 18+ hackathons](/#hackathons). I also spent a summer in San Francisco as part of a founder residency focused on shipping fast and finding early customers.",
  summary: "Over the last 1.6+ years, I've been building scalable multi-tenant SaaS platforms in fast-paced startup environments, taking ownership of core product systems from System Design and Architecture to Implementation and Deployment. My experience includes designing and developing Authentication & Authorization, Role-Based Access Control (RBAC), User Management, Audit Logging, event-driven workflows, and scalable APIs, with a strong focus on performance, scalability, and maintainability.",
  avatarUrl: "/jasphersujin.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on my LinkedIn.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: Java },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "JavaScript", icon: Typescript },
    { name: "MySQL", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "alex@alexmercer.dev",
    tel: "+1 512 000 0000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jasphersujin/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jaspher-sujin/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jasphersujin273@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Future Transformation",
      href: "https:/futuretransformation.in",
      badges: ["Software Developer"],
      location: "Bengaluru, India",
      title: "Software Engineer",
      logoUrl: "/companys/futuretransformation.jpg",
      start: "Mar 2025",
      end: undefined,
      // description:
        // "Building a suite of developer productivity tools focused on local-first architecture and offline sync. Grew to 1,200 paying customers within the first year. Responsible for the full stack - product, engineering, and growth.",
description: `
- Built and owned core platform capabilities for a multi-tenant SaaS product, contributing across System Design, Architecture, Implementation, and Deployment.

- Designed and implemented a unified Authentication & Authorization system supporting platform administrators, tenants, and end users.

- Developed a dynamic Role-Based Access Control (RBAC) and Permission Management framework for configurable access control.

- Built User Management, User Provisioning, Role Mapping, and Audit Logging systems as foundational platform components.

- Implemented Kafka-based event-driven workflows and Redis caching to improve scalability, performance, and asynchronous processing.

- Contributed to database architecture, indexing strategies, and query optimization to enhance application performance.

- Designed scalable REST APIs and developed analytics dashboards with real-time data visualization and reporting capabilities.
`
      },
    {
      company: "Geosys It Solution Pvt Ltd",
      href: "https://geosysitsolutions.com/",
      badges: [],
      location: "Thiruvananthapuram, keralam",
      title: "Web Developer Intern",
      logoUrl: "/companys/geosys.jpg",
      start: "Jun 2024",
      end: "Sep 2024",
      // description:
      //   "Worked on the Payments Infrastructure team. Built an internal load-testing framework in Go that reduced regression testing time by 60%. Contributed to the migration of legacy billing logic to a new event-driven architecture using Kafka.",
 description: `
- Developed secure registration and user onboarding workflows with email automation capabilities.

- Built responsive business and eCommerce websites with a focus on usability and cross-device compatibility.

- Developed frontend interfaces and integrated backend services for database-driven web applications.

- Enhanced user experience through reusable UI components and performance-focused frontend improvements.

- Collaborated on the development and maintenance of client websites, contributing to both frontend and backend features.
`
    },
  ],
  education: [
    {
      school: "Networkz Systems",
      href: "https://www.networkzsystems.com/",
      degree: "Full Stack Developer Course",
      logoUrl: "/educations/networkz.png",
      start: "Jun 2023",
      end: "Mar 2024",
    },
    {
      school: "Hindusthan College of Engineering & Technology",
      href: "https://www.hindusthan.net/",
      degree: "BE in Electrical & Electronics Engineering",
      logoUrl: "/educations/hicet.jpg",
      start: "Aug 2019",
      end: "Apr 2023",
    },
  ],
  projects: [
    {
      title: "AI Powered LMS (Voice Support)",
      href: "https://js-sass-app.vercel.app/",
      dates: "May 2025 - Jun 2025",
      active: true,
      description:
        "Built an AI-powered code review tool that integrates with GitHub PRs and provides context-aware feedback based on your team's codebase conventions. Used by 300+ engineering teams.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Supabase",
        "Clerk",
        "TailwindCSS",
        "Vapi API",
        "Sentry"
      ],
      links: [
        {
          type: "Website",
          href: "https://js-sass-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jasphersujin/js-sass-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ai-lms/ai-companion-app.png",
      video: "",
    },
    {
      title: "Bus Charging Scheduler",
      href: "#",
      dates: "October 2023 - February 2024",
      active: true,
      description:
        "Open-source structured logging dashboard for Node.js and Python services. Ingest logs via a lightweight SDK, query them with a SQL-like syntax, and set up alerts in minutes.",
      technologies: [
        "Python",
        "Streamlit",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://logport.io",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Jasphersujin/Bus-Charging-Scheduler.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/bus-charging/Per-bus-charging-timeline.png",
      video: "",
    },
    {
      title: "RFP System (Request For Proposal)",
      href: "#",
      dates: "June 2023 - September 2023",
      active: true,
      description:
        "An AI-driven procurement platform that automates the complete Request for Proposal (RFP) lifecycle. The system converts natural-language procurement requirements into structured RFPs, distributes them to vendors, processes vendor responses, and leverages AI to compare proposals and recommend the most suitable vendor.",
      technologies: [
        "Node JS",
        "JavaScript",
        "MongoDB",
        "TailwindCSS",
        "React",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://formbase.dev",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Jasphersujin/AI-Powered-RFP-Request-For-Proposal.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/rfp/Dashboard.png",
      video: "",
    },
    {
      title: "Admission Management | CRM System",
      href: "#",
      dates: "February 2025 - May 2025",
      active: false,
      description:
        "Institution, Campus, Department, Program management with Student admmission management system",
      technologies: [
        "Node JS",
        "JavaScript",
        "React JS",
        "JSON",
        "MongoDB"
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/CRM/pic3.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
