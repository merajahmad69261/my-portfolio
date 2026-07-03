# Md Meraj — Premium Full Stack & Software Developer Portfolio

A premium, interactive, and high-performance developer portfolio built for **Md Meraj**. This project showcases academic foundations in Bachelor of Technology - Computer Science Engineering (B.Tech CSE) at IES College of Technology (RGPV), Bhopal, full-stack MERN application engineering, and verified certifications (NPTEL Java Elite, NPTEL Python, Deloitte Job Simulation, and National Hackathons).

It features cinematic interactions, a customized responsive video reel, an interactive canvas particle background, custom social links integration (LinkedIn, GitHub, Instagram, WhatsApp), and a warm beige theme extracted directly from his profile media.

---

## 🚀 Key Features
- **Visual Identity**: Immersive dark theme with high-contrast warm-beige accent glows (`#c1b1a1`) matching the background of the profile image asset.
- **Intelligent Hero Video Preloading**: Coordinates the loading states of the background video (`loadeddata`/`canplay` hooks) with the preloader and falls back to a poster image with a timeout (4.5s) if connection is slow to eliminate layout shift.
- **Interactive Cursor Particles**: High-performance HTML5 canvas particle trail with spring physics (lerping) and mouse tracking, themed in warm-beige, fully responsive and optimized (disabled on touch devices and respects `prefers-reduced-motion`).
- **Software Dev & MERN Process Pipeline**: An interactive scroll-linked SVG dashed path tracking 5 steps (Understand & Define -> Design System & Schema -> Build Backend & APIs -> Develop Interface -> Test, Optimize & Deploy).
- **Glassmorphic Grid Sections**: Glowing, percentage-free skills badges, a dedicated education journey block, and a timeline of experiences.
- **Flagship Project Case Study**: A dedicated interactive featured layout for **InternshipHub** (MERN platform) detailing the Problem, Solution, decoupled MERN Architecture, and role workspaces (Student, Recruiter, Admin) through an animated tabbed controller.
- **Interactive Certifications Wall**: A filterable credentials showcase ("All", "Programming", "Data Analytics", "Hackathons") supporting NPTEL, Forage, SIRT, and BGI Hackathon credentials. Clicking a card launches a **lightbox modal** that renders the actual PDF files in a sandboxed local iframe view.
- **EmailJS Contact Form**: Form validation, submit states, and clean fallback to native prefilled mailto client routing.
- **Hire Me Clipboard Flow**: Intercepts contact requests to copy a pre-drafted message to the clipboard, displays a toast alert, and redirects to LinkedIn. Fallback modal handles copy instructions if clipboard APIs are blocked.

---

## 🛠️ Tech Stack
- **Core**: React 19, Vite, ES6 Javascript
- **Styling**: Tailwind CSS v4, Custom CSS variables
- **Animations**: Framer Motion (for SVG path drawing), AOS (Animate on Scroll)
- **Email Delivery**: `@emailjs/browser` (with native mailto fallback)
- **Icons**: Customized lightweight inline SVG vectors
- **Build System**: Vite 8.x

---

## 💻 Local Development Setup

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 3. Start Development Server
Launch Vite's hot-reload local server:
```bash
npm run dev
```
Open the local URL displayed in your terminal (usually `http://localhost:5173`).

### 4. Build for Production
To build and optimize the bundle size for hosting:
```bash
npm run build
```
This generates a static production bundle inside the `dist/` directory.

---

## ☁️ Deploying on Vercel

Vercel is the recommended hosting platform for Vite-React projects due to its speed, global CDN, and automatic Git integration.

### Method 1: Deploying via Vercel Git Integration (Recommended)
1. Push this project to your GitHub repository (e.g., `https://github.com/merajahmad69261/my-portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. Vercel will automatically detect **Vite** as the framework. Leave all default build configuration settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. *(Optional)* Add environment variables under **Environment Variables** (see below).
6. Click **Deploy**. Vercel will build the project and provide a live URL in under a minute.

---

## ✉️ EmailJS Environment Variables (Optional)
The contact form works out of the box by opening the user's default email client with a prefilled subject, body, and recipient. If you wish to enable silent direct inbox emails using EmailJS:

1. Create a service, template, and public key on [EmailJS](https://www.emailjs.com/).
2. Define the following environment variables in your hosting provider (like Vercel) or create a local `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
No code adjustments are needed; the form will automatically switch from the mailto fallback to EmailJS when these variables are detected!
