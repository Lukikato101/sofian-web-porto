# Sofian Web Portfolio

A polished personal portfolio website built with React, Vite, Tailwind CSS, Flowbite, and AOS. It is designed to showcase projects, technical skills, and a contact form with a modern dark interface.

## What Changed

- Fixed duplicate navigation rendering by using only the App header.
- Corrected the contact anchor IDs for consistent scrolling behavior.
- Replaced the missing CV download link with a contact section link.
- Improved the preloader behavior so the app only renders after the initial loading screen.

## Features

- Responsive dark-mode portfolio layout
- Animated scroll effects with AOS
- Mobile-friendly navigation menu
- Projects showcase section with image cards
- Tools and technology stack section
- Contact form integration via FormSubmits

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- AOS
- Flowbite
- Remixicon

## Project Structure

```bash
sofian-web-porto-main/
├── public/
│   └── assets/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── data.js
│   └── components/
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       └── PreLoader.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Notes

- The `Contact Me` button now scrolls to the contact section because `public/cv.pdf` is not included in this repository.
- If you want to restore the CV download feature, add a PDF file at `public/cv.pdf` and update the link in `src/App.jsx`.

## Customization

- Update hero text, about content, and project details in `src/App.jsx`.
- Change the tools and projects data in `src/data.js`.
- Replace the profile image in `src/data.js` under `HeroImage`.

## Run the Project

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the portfolio website.


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
