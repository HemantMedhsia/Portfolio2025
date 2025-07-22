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
graph TD

  A[Portfolio2025]

  subgraph 🗂️ Root
    A1[.gitignore]
    A2[README.md]
    A3[eslint.config.js]
    A4[index.html]
    A5[package.json]
    A6[tsconfig.json]
    A7[vite.config.ts]
    A8[vercel.json]
  end

  A --> B[public]
  subgraph 📂 public
    B1[HemantMedhsiaUpdatedResume.pdf]
    B2[gProfile1.png]
    B3[og-image.png]
    B4[vite.svg]
  end

  A --> C[src]
  subgraph 📂 src
    C1[App.tsx]
    C2[App.css]
    C3[index.css]
    C4[main.tsx]
  end

  C --> D[Data]
  subgraph 🗃️ Data
    D1[projectsData.ts]
  end

  C --> E[Layout]
  subgraph 🎯 Layout
    E1[Header.tsx]
    E2[Footer.tsx]
  end

  C --> F[Routes]
  subgraph 🚦 Routes
    F1[RoutesConfig.tsx]
  end

  C --> G[Ui]
  subgraph 🎨 Ui
    G1[GradientLine/]
    G2[InputFields/]
  end

  C --> H[apis]
  subgraph 🔌 apis
    H1[Contactme.ts]
  end

  C --> I[assets]
  subgraph 🖼️ assets
    I1[Images]
    subgraph 📷 Images
      I1a[Company/]
      I1b[Education/]
      I1c[HelperImgs/]
      I1d[Numbers/]
      I1e[Projects/]
      I1f[stack/]
    end
    I2[Sounds]
    subgraph 🔊 Sounds
      I2a[epic.mp3]
    end
  end

  C --> J[components]
  subgraph 🧩 components
    J1[About/]
    J2[Contactme/]
    J3[Education/]
    J4[Experience/]
    J5[Github/]
    J6[Header/]
    J7[LazyImage/]
    J8[Loader/]
    J9[Marquee/]
    J10[MouseFollower/]
    J11[Music/]
    J12[Popups/]
    J13[Projects/]
    J14[Resume/]
    J15[ScrollHint/]
    J16[ScrollProgressBar/]
    J17[ScrollToTop/]
    J18[SmoothScrolling/]
    J19[TechStacksMarquee/]
    J20[Testimonials/]
  end

  C --> K[context]
  subgraph 🧠 context
    K1[MusicContext.tsx]
  end

  C --> L[pages]
  subgraph 📄 pages
    L1[Home.tsx]
    L2[About.tsx]
    L3[Experience.tsx]
    L4[Contact.tsx]
    L5[Projects.tsx]
  end

  C --> M[types]
  subgraph 🔠 types
    M1[hover-effect.d.ts]
  end

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
