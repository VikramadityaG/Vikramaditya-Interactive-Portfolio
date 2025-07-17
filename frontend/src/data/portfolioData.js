// Mock data for Vikramaditya's 3D Portfolio
export const portfolioData = {
  personal: {
    name: "Vikramaditya Gaikwad",
    email: "gaikwadvikramaditya@gmail.com",
    phone: "+91-967-342-5099",
    portfolio: "https://www.crio.do/gaikwadvikramaditya/",
    linkedin: "linkedin.com/in/vikramaditya-gaikwad",
    github: "github.com/VikramadityaG",
    title: "Software Engineer & Entrepreneur",
    tagline: "Building the future with immersive technologies"
  },

  education: [
    {
      id: 1,
      institution: "Indian Institute of Technology, Hyderabad",
      degree: "Master of Technology in Techno-Entrepreneurship",
      duration: "July 2024 – July 2026 (Expected)",
      location: "Hyderabad, India",
      gpa: "8.64/10.0",
      type: "masters"
    },
    {
      id: 2,
      institution: "Government College of Engineering, Karad",
      degree: "Bachelor of Technology in Information Technology",
      duration: "Aug. 2016 – July 2021",
      location: "Karad, India",
      gpa: "7.79/10.0",
      type: "bachelors"
    }
  ],

  entrepreneurship: {
    companyName: "Holofuse Technologies LLP",
    position: "Co-founder",
    startDate: "January 2021",
    website: "#",
    description: "Successfully Co-founded a Games, Augmented Reality and Virtual Reality Development service company",
    achievements: [
      "Led Team of 7 members",
      "Managed End-to-End projects from gathering project requirement from client to budgeting to product design to delivery and maintenance",
      "Delivered AR/VR projects to local as well as International Clients Including the USA, the UK, Netherlands and New Zealand"
    ]
  },

  experience: [
    {
      id: 1,
      company: "PwC Acceleration Centers",
      position: "Software Engineer 2",
      duration: "Sep 2021 - June 2024",
      location: "Bangalore, India",
      product: "Cloud Intelligence Platform",
      responsibilities: [
        "Developed and maintained REST APIs using Java and the Spring Boot framework for performing CRUD operations",
        "Enhanced the performance and scalability of Azure function apps by conducting performance testing using JMeter and analyzing 40+ scenarios",
        "Integrated SonarQube for continuous code quality improvement and JaCoCo for code coverage analysis",
        "Implemented Zipkin for distributed tracing to monitor and analyze the application's performance"
      ]
    },
    {
      id: 2,
      company: "Coding Ninjas",
      position: "Teaching Assistant [Part-Time]",
      duration: "Dec 2022 - May 2023",
      location: "Delhi, India",
      responsibilities: [
        "Resolved doubts/queries raised by students for java and data structures course",
        "Helped students with 900+ doubts in the span of 4.5 months during 10 pm to 12 am",
        "Mentored 650+ Students on coding and problem-solving skills"
      ]
    },
    {
      id: 3,
      company: "CHRP-India",
      position: "Virtual Reality Developer Intern",
      duration: "Nov. 2020 - Dec 2020",
      location: "Hyderabad, India",
      responsibilities: [
        "Developed Safety VR Application to avoid possible accidents while working on different machines",
        "Used C Sharp, Unity 3d for developing VR apps using HTC Vive and Oculus Quest Headsets",
        "Worked on User-interfaces, animations, and audios for immersive experiences",
        "Optimized 2.2 Gb Oculus Quest Application to 900 Mb in size"
      ]
    },
    {
      id: 4,
      company: "GameEon Studios",
      position: "Game Programmer Intern",
      duration: "May 2020 - Oct 2020",
      location: "Mumbai, India",
      responsibilities: [
        "Developed and Updated 15+ HTML5 games for android as well as web platforms using Construct 3 and Unity 3d",
        "Upgraded an old multiplayer game by implementing flurry analytics SDK using Unity3d and C Sharp"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: "QEats Food Ordering App",
      description: "Built different parts of the QEats backend which is a Spring Boot application",
      technologies: ["Spring Boot", "Java", "REST API", "JMeter"],
      achievements: [
        "Several REST API endpoints are implemented to query restaurant information and place food orders",
        "Improved the app performance under large load scenarios as well as included an advanced search feature",
        "Employed JMeter or load testing to expose performance issues"
      ]
    },
    {
      id: 2,
      name: "QMoney Visual Stock Portfolio Analyzer",
      description: "Implemented the core logic of the portfolio manager and published it as a library",
      technologies: ["Java", "REST API", "Tiingo API", "Portfolio Management"],
      achievements: [
        "Implemented the core logic of the portfolio manager and published it as a library",
        "Refactored code to add support for multiple stock quote services",
        "Used Tiingo's REST APIs to fetch stock quotes"
      ]
    }
  ],

  skills: {
    expertise: [
      "Java", "Spring Boot Web Development", "Games/AR/VR development using Unity 3D", 
      "Data structures and Algorithms", "DevOps"
    ],
    languages: [
      "C/C++", "C #", "Java", "Python", "JavaScript", "PHP", "Shell Scripting"
    ],
    tools: [
      "Intellij", "VScode", "Outsystems", "Mendix", "Eclipse", "Postman", 
      "Dbeaver", "Git", "Jupyter", "Unity 3D"
    ],
    cloudPlatforms: ["AWS", "Microsoft Azure", "GCP"],
    databases: ["MySql", "Postgresql", "MongoDB", "H2"]
  },

  achievements: [
    {
      id: 1,
      title: "Inter-college Project Competition Winner",
      category: "Competition",
      description: "Won Inter-college project competition based on industry 4.0"
    },
    {
      id: 2,
      title: "Smart India Hackathon Runner Up",
      category: "Hackathon",
      description: "Runner Up in 30 Hr Smart India Hackathon in college"
    },
    {
      id: 3,
      title: "Game Dev/AR/VR Club Founder",
      category: "Leadership",
      description: "Started a Game Dev/AR/VR Club in college to teach students about these technologies"
    },
    {
      id: 4,
      title: "Technical Educator",
      category: "Teaching",
      description: "Encouraged and taught game dev to 100+ students using unity 3d and C sharp"
    },
    {
      id: 5,
      title: "VR Technology Demonstrator",
      category: "Technical",
      description: "Given Demo of Various virtual reality devices like HTC Vive, Oculus Rift, Samsung Odyssey, Dell and Acer Mixed reality headsets"
    }
  ],

  volunteering: [
    {
      id: 1,
      organization: "E-Cell at IITB",
      position: "Campus Ambassador",
      duration: "May 2019 - Feb 2020",
      location: "Mumbai, India",
      description: "Shared details about different events to college students and encouraged them to participate in various business sessions, this event was attended by 40,000+ students and professionals"
    },
    {
      id: 2,
      organization: "Qurve, IITH",
      position: "Volunteer",
      duration: "Sep 2024 - Present",
      location: "Hyderabad, India",
      description: "Building an inclusive and supportive environment for the LGBTQIA+ community on campus, fostering open conversations, awareness, and respect"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "April 2023 - April 2026",
      status: "Active"
    },
    {
      id: 2,
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Nov 2021 - No Expiry",
      status: "Active"
    }
  ],

  coursework: {
    major: [
      "Foundations of Techno-Entrepreneurship",
      "Accounting and Finance for Entrepreneurs",
      "Entrepreneurial Marketing",
      "Strategic Management",
      "Operational Entrepreneurship"
    ],
    electives: [
      "Innovation Management",
      "HR and Leadership",
      "Economics for Technocrats"
    ]
  }
};
