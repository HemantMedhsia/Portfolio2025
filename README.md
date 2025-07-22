# 🚀 Hemant Medhsia's Developer Portfolio

Welcome to my **personal developer portfolio** built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This website is a dynamic and interactive showcase of my skills, projects, education, and experience—all wrapped in a modern, visually engaging design.

![Portfolio Preview](public/og-image.png)

---

## 🔥 Features

- ⚡ Fast and optimized using [Vite](https://vitejs.dev/)
- 🌈 Smooth scrolling with Locomotive Scroll
- ✨ Interactive UI with Framer Motion
- 🧠 Type-safe development using TypeScript
- 🎨 Responsive & modern design with Tailwind CSS
- 💌 Contact form with form validation
- 💼 Projects, education, experience, and testimonial sections
- 🎵 Optional background music with toggle
- 🔁 Tech stack logos & marquee animations

---

## 🛠️ Tech Stack

| Category       | Technologies                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| **Frontend**   | React, TypeScript, Vite, Tailwind CSS, Framer Motion                         |
| **Routing**    | React Router DOM                                                             |
| **Animation**  | Framer Motion, Locomotive Scroll                                             |
| **Deployment** | [Vercel](https://vercel.com)                                                 |
| **Utilities**  | ESLint, Prettier, custom hooks, context API for global state                 |

---

## 📁 Project Structure Overview
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
    ├── HemantMedhsiaUpdatedResume.pdf
    ├── gProfile1.png
    ├── og-image.png
    └── vite.svg
├── src
    ├── App.css
    ├── App.tsx
    ├── Data
    │   └── projectsData.ts
    ├── Layout
    │   ├── Footer.tsx
    │   └── Header.tsx
    ├── Routes
    │   └── RoutesConfig.tsx
    ├── Ui
    │   ├── GradientLine
    │   │   └── GradientLine.tsx
    │   └── InputFields
    │   │   ├── TextAreaProps.tsx
    │   │   └── TextInputProps.tsx
    ├── apis
    │   └── Contactme
    │   │   └── Contactme.ts
    ├── assets
    │   ├── Images
    │   │   ├── Company
    │   │   │   ├── aradhyatechLogo.jfif
    │   │   │   ├── cognisLogo.png
    │   │   │   ├── growQuestLogo.jfif
    │   │   │   └── growquestlogo.png
    │   │   ├── Education
    │   │   │   ├── degree.png
    │   │   │   ├── fullSchollar.png
    │   │   │   ├── kidSchollar.png
    │   │   │   ├── kidSchollar2.png
    │   │   │   └── schollarHat.png
    │   │   ├── HelperImgs
    │   │   │   ├── SchoolCRMMain.jfif
    │   │   │   ├── SchoolCRMSec.png
    │   │   │   ├── cropedProfile.png
    │   │   │   ├── cropedProfile2.jpg
    │   │   │   ├── cropedProfile3.jpg
    │   │   │   ├── envelop.png
    │   │   │   ├── gProfile1.png
    │   │   │   ├── girlWithBulb.png
    │   │   │   ├── h-logo.jpg
    │   │   │   ├── hand-left.webp
    │   │   │   ├── hand-right.webp
    │   │   │   ├── image.jpg
    │   │   │   ├── overlay.png
    │   │   │   └── wwwhirl.svg
    │   │   ├── Numbers
    │   │   │   ├── 01.svg
    │   │   │   ├── 02.svg
    │   │   │   ├── 03.svg
    │   │   │   └── 04.svg
    │   │   ├── Projects
    │   │   │   ├── AradhyaTechMainImg.png
    │   │   │   ├── AradhyaTechSecImg.png
    │   │   │   ├── EmpMainImg.png
    │   │   │   ├── PortfolioMainImg.png
    │   │   │   ├── PortfolioSecImg.png
    │   │   │   ├── image.png
    │   │   │   └── schoolCrmMainImg.png
    │   │   └── stack
    │   │   │   ├── Bash.svg
    │   │   │   ├── Bootstrap.svg
    │   │   │   ├── CSS.png
    │   │   │   ├── ChartJs.svg
    │   │   │   ├── Docker.svg
    │   │   │   ├── Express.png
    │   │   │   ├── Git.svg
    │   │   │   ├── Github.svg
    │   │   │   ├── Graphql.svg
    │   │   │   ├── HTML.png
    │   │   │   ├── Javascript.svg
    │   │   │   ├── K8s.svg
    │   │   │   ├── MaterialUI.svg
    │   │   │   ├── MongoDB.svg
    │   │   │   ├── Next.svg
    │   │   │   ├── NextJsCircle.png
    │   │   │   ├── NodeJs.svg
    │   │   │   ├── React.png
    │   │   │   ├── Redux.svg
    │   │   │   ├── Saas.svg
    │   │   │   ├── Tailwind.png
    │   │   │   ├── Typescript.svg
    │   │   │   ├── Vercel.svg
    │   │   │   ├── icons8-angular-144.png
    │   │   │   ├── icons8-cpanel-64.png
    │   │   │   ├── icons8-dbeaver-128.png
    │   │   │   ├── icons8-eclipse-logo-96.png
    │   │   │   ├── icons8-github-144.png
    │   │   │   ├── icons8-github-150.png
    │   │   │   ├── icons8-intellij-idea-240.png
    │   │   │   ├── icons8-java-500.png
    │   │   │   ├── icons8-microsoft-sql-server-240.png
    │   │   │   ├── icons8-nextjs-144.png
    │   │   │   ├── icons8-postgresql-240.png
    │   │   │   ├── icons8-spring-boot-240.png
    │   │   │   ├── icons8-spring-boot-480.png
    │   │   │   ├── icons8-sql-96.png
    │   │   │   └── react.svg
    │   ├── Sounds
    │   │   └── epic.mp3
    │   └── react.svg
    ├── components
    │   ├── About
    │   │   ├── IntroHeading.tsx
    │   │   └── ProfileSection.tsx
    │   ├── Contactme
    │   │   └── ContactmeHeader.tsx
    │   ├── Education
    │   │   ├── AnimatedImage.tsx
    │   │   ├── EducationBody.tsx
    │   │   ├── EducationCard.tsx
    │   │   ├── EducationHeader.tsx
    │   │   ├── EducationList.tsx
    │   │   └── data.ts
    │   ├── Experience
    │   │   ├── ExperienceBody.tsx
    │   │   ├── ExperienceHeader.tsx
    │   │   ├── ExperienceList.tsx
    │   │   ├── TimelineCard.tsx
    │   │   └── data.ts
    │   ├── Github
    │   │   └── Github.tsx
    │   ├── Header
    │   │   ├── BottomLeftRotatedButtons.tsx
    │   │   ├── LogoSection.tsx
    │   │   ├── SocialIcons.tsx
    │   │   └── TopRightRotatedButtons.tsx
    │   ├── LazyImage
    │   │   ├── LazyImage.tsx
    │   │   └── LazyMotionImage.tsx
    │   ├── Loader
    │   │   ├── Loader.module.scss
    │   │   └── Loader.tsx
    │   ├── Marquee
    │   │   ├── MarqueeRow.tsx
    │   │   ├── TechLogoMarquee.tsx
    │   │   └── TestimonialMarquee.tsx
    │   ├── MouseFollower
    │   │   └── MouseFollower.tsx
    │   ├── Music
    │   │   └── MusicToggle.tsx
    │   ├── Popups
    │   │   └── SuccessPopup.tsx
    │   ├── Projects
    │   │   ├── ProjectCard.tsx
    │   │   ├── ProjectHeader.tsx
    │   │   └── glow.css
    │   ├── Resume
    │   │   └── ResumeHeader.tsx
    │   ├── ScrollHint
    │   │   └── ScrollHint.tsx
    │   ├── ScrollProgressBar
    │   │   └── ScrollProgressBar.tsx
    │   ├── ScrollToTop
    │   │   └── ScrollToTop.tsx
    │   ├── SmoothScrolling
    │   │   └── SmoothScroll.tsx
    │   ├── TechStacksMarquee
    │   │   ├── TechStackCard.tsx
    │   │   ├── TechStackMarqueeHeader.tsx
    │   │   └── TechStacks.ts
    │   └── Testimonials
    │   │   ├── TestimonialCard.tsx
    │   │   ├── TestimonialMarqueeHeader.tsx
    │   │   └── Testimonials.ts
    ├── context
    │   └── MusicContext.tsx
    ├── index.css
    ├── main.tsx
    ├── pages
    │   ├── About.tsx
    │   ├── Contactme.tsx
    │   ├── Education.tsx
    │   ├── Error404.tsx
    │   ├── Experience.tsx
    │   ├── Home.tsx
    │   ├── Loader.tsx
    │   ├── MobileWorkInProgress.tsx
    │   ├── PaymentPopupProps.tsx
    │   ├── Project.tsx
    │   ├── Resume.tsx
    │   └── SlidingMenu.tsx
    ├── types
    │   └── hover-effect.d.ts
    └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts


## High-Level Summary

The repository appears to be a personal portfolio website built using React, TypeScript, and Vite. The website showcases the developer's skills, experience, and projects. It features a modern design with animations, marquee effects, and a smooth scrolling experience.

## Low-Level Summary

The repository contains a React application built with Vite, a modern front-end build tool. The application is written in TypeScript and uses various libraries and frameworks, including:

* React Router for client-side routing
* Framer Motion for animations
* Locomotive Scroll for smooth scrolling
* Tailwind CSS for styling

The application consists of various components, including:

* Header and footer components
* Project cards with images, descriptions, and links
* Education and experience sections
* A testimonials section
* A contact form

The repository also includes configuration files for ESLint, TypeScript, and Vercel.

## Installing and Running Process

To install and run the application, follow these steps:

### Prerequisites

* Node.js (version  or higher)
* npm or yarn

### Installation

. Clone the repository using Git: `git clone https://github.com/HemantMedhsia/Portfolio.git`
. Navigate to the repository directory: `cd Portfolio`
. Install the dependencies using npm or yarn: `npm install` or `yarn install`

### Running the Application

. Start the development server: `npm run dev` or `yarn dev`
. Open a web browser and navigate to `http://localhost:`

The application should now be running and accessible in your web browser.

## Code Block for Installation and Running

`````bash
# Clone the repository
git clone https://github.com/HemantMedhsia/Portfolio.git

# Navigate to the repository directory
cd Portfolio

# Install the dependencies
npm install

# Start the development server
npm run dev

# Open a web browser and navigate to http://localhost:
`````
