# Sofian Web Portfolio

Modern personal portfolio website built with React, Vite, Tailwind CSS, and AOS animations. Designed to showcase software engineering, robotics projects, technical stack, and professional growth through a structured, responsive, and visually modern interface.

---

## Overview

Sofian Web Portfolio is a personal branding and technical showcase platform focused on:

* Software engineering
* Robotics systems
* Project portfolio presentation
* Technical stack display
* Professional contact integration

This project functions as both:

* Personal portfolio website
* Engineering credibility platform
* GitHub showcase project
* Recruiter/client-facing digital identity

---

## Core Features

### User Interface

* Modern dark theme UI
* Responsive desktop/mobile navigation
* Animated mobile menu
* Hero section with profile branding
* About section with technical summary
* Dynamic stack & tools section
* Projects showcase cards
* Contact form integration
* Smooth scrolling navigation
* AOS scroll animations

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript (ES6+)

### Animation

* AOS (Animate On Scroll)

### Deployment Ready

* Vercel
* Netlify
* GitHub Pages (with config)

### External Integration

* FormSubmits API (contact form)

---

## Project Structure

```bash
sofian-web-porto/
│── public/
│   └── cv.pdf
│
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── data.js
│
│── package.json
│── vite.config.js
└── README.md
```

---

## Main Sections

### Home

* Personal introduction
* Hero image
* CV download
* Project CTA

### About

* Personal technical philosophy
* Project stats
* Experience summary
* Stack & tools

### Projects

* Dynamic project cards
* Tool tags
* External links

### Contact

* Name/email/message form
* FormSubmits integration

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/sofian-web-porto.git
cd sofian-web-porto
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## Required Dependencies

```bash
npm install aos
npm install
```

---

## Example package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "aos": "^2.x"
  }
}
```

---

## Customization Guide

### Update Personal Info

Edit:

```bash
src/App.jsx
```

### Update Projects / Tools

Edit:

```bash
src/data.js
```

### Replace CV

Replace:

```bash
public/cv.pdf
```

### Replace Profile Image

Update:

```bash
DataImage.HeroImage
```

---

## Performance Features

* Lazy-loaded images
* Responsive layouts
* Tailwind utility optimization
* Vite fast bundling
* Lightweight animation initialization

---

## SEO Recommendations

### Add:

* Meta title
* Meta description
* Open Graph tags
* Favicon
* Sitemap

### Example:

```html
<meta name="description" content="Sofian - Software & Robotics Portfolio">
```

---

## Security Notes

### Current Risks

* Public FormSubmits endpoint exposure
* No spam prevention
* No CAPTCHA
* External form dependency

### Recommended Improvements

* Add reCAPTCHA
* Use backend API for submissions
* Rate limiting
* Email validation layer

---

## Deployment Options

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
```

Upload `dist/` folder.

---

## UI Strengths

* Strong personal branding
* Professional engineering aesthetic
* Mobile responsive
* Recruiter-friendly
* GitHub portfolio ready

---

## Future Roadmap

### Technical

* Dark/light mode toggle
* Blog section
* GitHub API integration
* Live project filtering
* Project detail pages
* 3D animations (Three.js)
* Robotics simulation showcase
* Contact backend system

---

## Recommended Advanced Upgrades

* TypeScript migration
* Framer Motion
* Next.js
* SEO optimization
* CMS integration
* Analytics dashboard

---

## Known Limitations

* Static content
* Manual project updates
* No backend
* Limited SEO by default
* External form reliance

---

## Author

**Sofian Hidayat**

Software, robotics, and engineering-focused portfolio built to document growth, technical capability, and project execution.

---

## License

MIT License

---

## Strategic Purpose

This portfolio is optimized for:

* Internship applications
* Robotics engineering branding
* Software engineering showcase
* Freelance credibility
* Technical networking

---
