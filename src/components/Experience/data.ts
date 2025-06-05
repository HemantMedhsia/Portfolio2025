import aradhyaLogo from "../../assets/Images/Company/aradhyatechLogo.jfif";
import growquestLogo from "../../assets/Images/Company/growQuestLogo.jfif";
import cognisLogo from "../../assets/Images/Company/cognisLogo.png";
import reactImg from "../../assets/Images/stack/react.svg";
import nodeImg from "../../assets/Images/stack/NodeJs.svg";
import expressImg from "../../assets/Images/stack/Express.png";
import mongoImg from "../../assets/Images/stack/MongoDB.svg";
import jsImg from "../../assets/Images/stack/Javascript.svg";
import tailwindImg from "../../assets/Images/stack/Tailwind.png";
import htmlImg from "../../assets/Images/stack/HTML.png";
import cssImg from "../../assets/Images/stack/CSS.png";
import githubImg from "../../assets/Images/stack/icons8-github-144.png";
import gitImg from "../../assets/Images/stack/Git.svg";
import graphQLImg from "../../assets/Images/stack/Graphql.svg";
import nextJsImg from "../../assets/Images/stack/icons8-nextjs-144.png";
import reduxImg from "../../assets/Images/stack/Redux.svg";
import saasImg from "../../assets/Images/stack/Saas.svg";
import materailUIImg from "../../assets/Images/stack/MaterialUI.svg";
import bootstrapImg from "../../assets/Images/stack/Bootstrap.svg";
import bashImg from "../../assets/Images/stack/Bash.svg";
import javaImg from "../../assets/Images/stack/icons8-java-500.png";
import springImg from "../../assets/Images/stack/icons8-spring-boot-240.png";
import sprintBootImg from "../../assets/Images/stack/icons8-spring-boot-480.png";
import angularImg from "../../assets/Images/stack/icons8-angular-144.png";

const experiences = [
  {
    year: "June 2024 - July 2024",
    title: "Full Stack Developer Intern",
    company: "Growquest Consultancy",
    location: "Bangalore, India",
    logo: growquestLogo,
    description:
      "Built dynamic SaaS dashboards, implemented secure logins, and integrated OCR-based document reading in vendor tax-related applications.",
    story:
      "This is where the fire lit up 🔥 — my internship at Growquest kickstarted it all. I built SaaS dashboards, implemented secure login systems, and integrated OCR logic to extract data from scanned vendor tax docs 📄🔍. The thrill of turning raw ideas into beautiful UI was next-level. From debugging late at night to deploying working apps — this was my foundation 🧱⚙️.",
    techStackImgs: [
      reactImg,
      nodeImg,
      expressImg,
      mongoImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      nextJsImg,
      reduxImg,
      saasImg,
      materailUIImg,
      bootstrapImg,
      bashImg,
    ],
  },
  {
    year: "Aug 2024 - Dec 2024",
    title: "Full Stack Developer",
    company: "Aradhya Technologies and Skill Development Pvt. Ltd.",
    location: "Varanasi, India",
    logo: aradhyaLogo,
    description:
      "Built full CRM solutions (school, employee, admin panels), responsive landing pages, and worked on EDI file UI. Entire stack handled using MERN.",
    story:
      "At Aradhya Technologies 💼, I was deep into the MERN stack jungle 🌴. I built multiple CRM systems — school portals, employee management apps, and dynamic landing pages 🚀. This is where I really sharpened my frontend & backend skills with React and Node. No Java here — just pure JavaScript and firepower from Mongo to Express! 🔥👨‍💻",
    techStackImgs: [
      reactImg,
      nodeImg,
      expressImg,
      mongoImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      graphQLImg,
      reduxImg,
      saasImg,
      materailUIImg,
      bootstrapImg,
      bashImg,
    ],
  },
  {
    year: "Feb 2025 - Present",
    title: "Associate Software Developer Intern",
    company: "Cognis Solutions Pvt. Ltd.",
    location: "Bangalore, India",
    logo: cognisLogo,
    description:
      "Switched to Java and contributed to a smart CMS for shipping & vessel management. Worked on EDI validation and microservice architecture using Spring Boot and Angular.",
    story:
      "After working deeply with MERN, I decided to expand my horizon and joined Cognis Solutions Pvt. Ltd. in Bangalore 🌇, where I switched to Java 🚀. I worked on a smart CMS for managing shipping & vessel data, plus tackled EDI validation systems. I also explored microservices with Spring Boot and learned how enterprise apps scale and communicate ⚙️. It was my gateway to backend mastery 👨‍💻💡.",
    techStackImgs: [
      javaImg,
      springImg,
      sprintBootImg,
      reactImg,
      angularImg,
      nodeImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      graphQLImg,
      reduxImg,
      saasImg,
      bootstrapImg,
      bashImg,
    ],
  },
];

const reverseExperienceData = [
  {
    ...experiences[2],
    story:
      "Today, I’m deep into Java and enterprise-scale backend work at Cognis Solutions 🚢. But just a few months ago, I was immersed in the MERN stack jungle 🌴. It’s incredible how fast the transition was — from building full-stack apps in JavaScript to crafting microservices in Spring Boot ☕. At Cognis, I’m learning the rigor of scalable systems and the elegance of strong typing. Backend mastery in progress! ⚙️📈",
  },
  {
    ...experiences[1],
    story:
      "Before diving into the world of Java, I was wielding the full power of the MERN stack at Aradhya Technologies ⚒️. I crafted CRMs for schools and employees and polished responsive designs. This phase helped me solidify my full-stack skills and taught me how to build production-ready dashboards with JS firepower 🔥. It laid a solid ground before stepping into more structured enterprise systems.",
  },
  {
    ...experiences[0],
    story:
      "And it all began here — at Growquest Consultancy 🧠. My first taste of full-stack development came in the form of SaaS dashboards and OCR integrations 🧾. I still remember the thrill of deploying my first secure login system. Debugging those early bugs, pushing commits at midnight 🌙 — this was the spark that set everything in motion. From here, my tech journey truly started 🔧🚀.",
  },
];

export { experiences, reverseExperienceData };
