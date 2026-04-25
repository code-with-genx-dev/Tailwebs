# eGov Foundation Landing Page (React)

![eGov Foundation](public/assets/eGov-Foundation.png)

A pixel-perfect, highly responsive React (Vite) recreation of the eGov Foundation landing page. Built with modern web development best practices, this project translates the original HTML/CSS design into a scalable, component-based architecture using React, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Pixel-Perfect UI:** Meticulously matched design fidelity with the original eGov Foundation specifications.
- **Component-Driven Architecture:** Clean, maintainable React functional components with focused responsibilities.
- **Responsive Design:** Fluid layouts that adapt beautifully across mobile, tablet, and desktop viewports, featuring a custom mobile navigation drawer.
- **Dynamic "Latest at eGov" Section:** 
  - Mock API integration (`products.json`) to fetch articles and whitepapers.
  - Interactive category filtering with polished empty states and loading animations.
- **Performance Optimized:** Uses Vite for lightning-fast HMR and optimized production builds.
- **Intersection Observer Animations:** Custom React hook for performant, scroll-triggered fade-up animations.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using native `@theme` directives)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for robust static typing
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Bootstrap & FontAwesome sets)

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── About.tsx        # "Sustaining Change" section
│   ├── Features.tsx     # "Areas of Work" cards and list
│   ├── Footer.tsx       # Complex footer with subscribe form
│   ├── Hero.tsx         # Main hero banner
│   ├── Impact.tsx       # Impact statistics and background overlay
│   ├── Navbar.tsx       # Responsive sticky navigation
│   ├── PlatformCTA.tsx  # DIGIT platform showcase
│   ├── Products.tsx     # Dynamic "Latest at eGov" content
│   ├── Supporters.tsx   # Partner logos grid
│   └── TopBar.tsx       # Desktop-only utility bar
├── hooks/
│   └── useIntersectionObserver.ts  # Custom hook for scroll animations
├── App.tsx              # Root component assembling the layout
└── index.css            # Tailwind configuration and global styles
```

## 💻 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd d:\Tailwebs\Task-2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` to view the application.

## 🎨 Design Decisions

- **State Management:** Kept simple and localized within components using React Hooks (`useState`, `useEffect`). No external state management library (like Redux) was necessary for this landing page, keeping the bundle size small.
- **Mobile Navigation:** The desktop navigation transforms into a full-screen drawer on mobile devices. A `resize` event listener automatically resolves state discrepancies when shifting between breakpoints.
- **Animations:** Used native CSS transitions combined with the Intersection Observer API. This approach is highly performant as it offloads animation work to the browser's compositor thread rather than relying on heavy JS animation libraries.

## 📜 License
&copy; 2026. eGov Foundation. All Rights Reserved.
