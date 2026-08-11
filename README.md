# Esrom Basazinew — Developer Portfolio ⚡️

[![React](https://img.shields.io/badge/React-16.10.2-61DAFB?logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Esrom%20Basazinew-0077B5?logo=linkedin)](https://www.linkedin.com/in/esrom-basazinew-65102a339/)
[![GitHub](https://img.shields.io/badge/GitHub-yemom-181717?logo=github)](https://github.com/yemom)

> A premium, production-ready Software Engineer portfolio built with React.js — featuring glassmorphism design, Framer Motion animations, dark/light mode, and fully responsive layouts.

---

## 📋 Table of Contents

- [About](#about)
- [Portfolio Sections](#portfolio-sections)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Key Files Reference](#key-files-reference)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About

This is the personal developer portfolio of **Esrom Basazinew**, a Full-Stack Software Engineer based in Addis Ababa, Ethiopia. The portfolio showcases professional experience, featured projects, technical skills, education, and certifications in a modern, premium design.

**Live Contact:** [12yemom@gmail.com](mailto:12yemom@gmail.com)
**LinkedIn:** [linkedin.com/in/esrom-basazinew-65102a339](https://www.linkedin.com/in/esrom-basazinew-65102a339/)
**GitHub:** [github.com/yemom](https://github.com/yemom)

---

## Portfolio Sections

| Section | Description |
|---|---|
| ✅ **Splash Screen** | Animated intro with Lottie animation |
| ✅ **Hero / Greeting** | Name, typing animation, CTA buttons, social links |
| ✅ **Skills** | Categorized tech skills, progress bars, coding animation |
| ✅ **Work Experience** | Vertical timeline with job roles and descriptions |
| ✅ **Featured Projects** | Glassmorphism cards with real screenshots, tech badges, GitHub links |
| ✅ **Current Learning** | Cards for ongoing learning goals |
| ✅ **Certificates** | Professional certifications with PDF preview & download |
| ✅ **Education** | Academic background with animated cards |
| ✅ **Resume** | Inline PDF viewer with download option |
| ✅ **Contact** | Contact form (sends to 12yemom@gmail.com via mailto) + social links |

---

## Project Structure

```
NewdeveloperPortfolio-master/
├── public/
│   └── index.html                  # App entry — update title/meta tags here
├── src/
│   ├── assets/
│   │   ├── fonts/                  # Agustina, Montserrat fonts
│   │   ├── images/                 # Project thumbnails, education logos
│   │   ├── lottie/                 # Lottie animation JSON files
│   │   │   ├── landingPerson.json  # Hero section animation
│   │   │   ├── codingPerson.json   # Skills section animation
│   │   │   ├── splashAnimation.json
│   │   │   └── email.json          # Contact animation
│   │   ├── resume/
│   │   │   └── esrom cv.pdf        # Your resume PDF
│   │   └── certificates/           # Certificate PDFs
│   ├── components/
│   │   ├── button/                 # Reusable Button component
│   │   ├── displayLottie/          # Lottie animation wrapper
│   │   ├── educationCard/          # Education card component
│   │   ├── achievementCard/        # Learning/achievement card
│   │   ├── footer/                 # Footer with social links
│   │   ├── header/                 # Sticky glassmorphism navbar
│   │   ├── sectionTitle/           # Reusable section title
│   │   ├── socialMedia/            # Social media icon links
│   │   └── ToggleSwitch/           # Dark/light mode toggle
│   ├── containers/
│   │   ├── greeting/               # Hero section
│   │   ├── skills/                 # Skills section
│   │   ├── workExperience/         # Experience timeline
│   │   ├── StartupProjects/        # Featured projects grid
│   │   ├── achievement/            # Current learning section
│   │   ├── certificates/           # Certificates section
│   │   ├── education/              # Education section
│   │   ├── resume/                 # Resume section
│   │   ├── contact/                # Contact form section
│   │   └── Main.js                 # Root layout — controls section order
│   ├── contexts/
│   │   └── StyleContext.js         # Dark/light mode context
│   ├── hooks/
│   │   └── useLocalStorage.js      # Persists theme preference
│   ├── portfolio.js                # ⭐ ALL personal data lives here
│   ├── _globalColor.scss           # ⭐ Design tokens & SCSS variables
│   ├── App.js                      # App root
│   └── index.css                   # Global base styles & CSS variables
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

```
Node.js  >= 10.16.0
npm      >= 6.9.0
Git      >= 2.17.1
```

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/yemom/NewdeveloperPortfolio-master.git

# 2. Navigate into the project folder
cd NewdeveloperPortfolio-master

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000** automatically.

### Build for Production

```bash
npm run build
```

Output is placed in the `build/` folder, ready for deployment.

---

## Customization Guide

### ⭐ Step 1 — Update Your Personal Data

All personal content is controlled from a **single file**:

```
src/portfolio.js
```

Edit each section object to match your information:

```javascript
// Your greeting / hero section
const greeting = {
  username: "Esrom Basazinew",
  title: "Hi, I'm Esrom Basazinew",
  subTitle: "Full-Stack Software Engineer...",
  resumeLink: require("./assets/resume/esrom cv.pdf"),
  displayGreeting: true
};

// Social media links
const socialMediaLinks = {
  github: "https://github.com/yemom",
  linkedin: "https://www.linkedin.com/in/esrom-basazinew-65102a339/",
  gmail: "12yemom@gmail.com",
  display: true
};

// Skills
const skillsSection = { ... };

// Work experience
const workExperience = { ... };

// Featured projects
const bigProjects = { ... };

// Current learning
const achievementSection = { ... };

// Certificates
const certificatesSection = { ... };

// Education
const educationInfo = { ... };

// Contact
const contactInfo = { ... };
```

> 💡 **Tip:** Each section has a `display: true/false` flag to show or hide it.

---

### ⭐ Step 2 — Update the Theme / Colors

All design tokens are in:

```
src/_globalColor.scss
```

Key variables you can change:

```scss
$primary:          #6c63ff;       // Main accent color
$primary-dark:     #5548e8;       // Hover state
$primary-light:    #8b83ff;       // Light tint / focus ring
$gradient-primary: linear-gradient(135deg, #6c63ff 0%, #3b82f6 100%);

$darkBackground:   #0d1117;       // Dark mode background
$textColorDark:    #e6edf3;       // Dark mode text
$textColor:        #1a1a2e;       // Light mode text
```

---

### ⭐ Step 3 — Replace Your Resume

1. Place your PDF at: `src/assets/resume/esrom cv.pdf`
2. The filename is already referenced in `portfolio.js` — no other changes needed.

---

### ⭐ Step 4 — Add Project Images

1. Add image files to: `src/assets/images/`
2. Reference them in `portfolio.js` using `require()`:

```javascript
image: require("./assets/images/your-project-image.png"),
```

---

### ⭐ Step 5 — Add Certificates

1. Place certificate PDFs at: `src/assets/certificates/`
2. Add the certificate entry in `portfolio.js` under `certificatesSection`:

```javascript
{
  title: "Your Certificate Title",
  issuer: "Platform Name",
  date: "2024",
  credentialId: "unique-id",
  pdfLink: require("./assets/certificates/your-cert.pdf")
}
```

---

### ⭐ Step 6 — Change Lottie Animations

Lottie animations are stored in: `src/assets/lottie/`

| File | Used In |
|---|---|
| `landingPerson.json` | Hero / Greeting section |
| `codingPerson.json` | Skills section ("What I Do") |
| `splashAnimation.json` | Splash loading screen |
| `email.json` | Contact section |

To change an animation:
1. Download a new JSON from [LottieFiles.com](https://lottiefiles.com/)
2. Replace the file in `src/assets/lottie/`
3. Keep the same filename, or update the import in the relevant component

---

### ⭐ Step 7 — Update Page Title & SEO

Edit `public/index.html`:

```html
<title>Esrom Basazinew | Full-Stack Software Engineer</title>
<meta name="description" content="Portfolio of Esrom Basazinew, a Full-Stack Software Engineer specializing in React, Next.js, Node.js, and mobile development." />
```

---

## Key Files Reference

| File | Purpose |
|---|---|
| [`src/portfolio.js`](src/portfolio.js) | **All personal data** — edit this to customize everything |
| [`src/_globalColor.scss`](src/_globalColor.scss) | **Design system** — colors, shadows, spacing, typography |
| [`src/containers/Main.js`](src/containers/Main.js) | **Section order** — controls which sections appear and in what order |
| [`src/index.css`](src/index.css) | Global base styles, CSS custom properties, resets |
| [`public/index.html`](public/index.html) | HTML entry point — update SEO meta tags here |

---

## Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | 16.10.2 | UI framework |
| [Framer Motion](https://www.framer.com/motion/) | 6.5.1 | Animations & transitions |
| [Lottie React](https://www.npmjs.com/package/lottie-react) | 2.4.0 | Lottie JSON animations |
| [SASS / SCSS](https://sass-lang.com/) | 1.32.8 | Styling & design tokens |
| [React Headroom](https://github.com/KyleAMathews/react-headroom) | 3.0.0 | Sticky smart navbar |
| [React Easy Emoji](https://github.com/appfigures/react-easy-emoji) | 1.8.1 | Cross-platform emoji |
| [Font Awesome](https://fontawesome.com/) | CDN | Icons throughout the portfolio |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | CDN | Primary typography |

---

## Deployment

### Deploy to GitHub Pages

1. Update `homepage` in `package.json`:

```json
"homepage": "https://yemom.github.io/NewdeveloperPortfolio-master"
```

2. Run the deploy command:

```bash
npm run deploy
```

This builds the project and pushes it to the `master` branch via `gh-pages`.

---

### Deploy to Netlify

1. Push your project to GitHub
2. Go to [app.netlify.com](https://app.netlify.com/)
3. Click **"New site from Git"** → Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Click **Deploy Site**

---

### Deploy to Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import your repository
4. Vercel auto-detects Create React App — no configuration needed
5. Click **Deploy**

---

## Contact

**Esrom Basazinew**
- 📧 Email: [12yemom@gmail.com](mailto:12yemom@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/esrom-basazinew-65102a339](https://www.linkedin.com/in/esrom-basazinew-65102a339/)
- 🐙 GitHub: [github.com/yemom](https://github.com/yemom)
- 📍 Location: Addis Ababa, Ethiopia

---

<p align="center">Built with ❤️ by Esrom Basazinew</p>
