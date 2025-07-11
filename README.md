# Personal Portfolio

> A modern, responsive portfolio website showcasing my skills, projects, and professional experience.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://manishmodiportfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/manishmodi2/personal-portfolio)

## 🚀 Overview

This personal portfolio website serves as a comprehensive showcase of my development skills, featuring a modern design with interactive elements and smooth user experience. Built with React and Tailwind CSS, it demonstrates proficiency in modern web development practices and responsive design principles.

## ✨ Key Features

- **🎨 Modern Design**: Clean, professional interface with attention to detail
- **📱 Fully Responsive**: Seamless experience across all devices and screen sizes
- **🌙 Theme Toggle**: Dynamic dark/light mode switching with smooth transitions
- **⭐ Interactive Background**: Engaging star field animation with meteor effects
- **🎯 Smooth Navigation**: Fluid scrolling between sections for enhanced UX
- **📧 Contact Integration**: Functional contact form powered by Formspree
- **🔗 Social Links**: Direct connections to professional profiles
- **🎪 Custom Animations**: Subtle hover effects and micro-interactions

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React.js, Vite |
| **Styling** | Tailwind CSS, Custom CSS |
| **Icons** | Lucide React |
| **Form Handling** | Formspree |
| **Routing** | React Router DOM |
| **Utilities** | clsx, tailwind-merge, class-variance-authority |

## 📁 Project Structure

```
personal-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── ContactSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ProjectsSection.jsx
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manishmodi2/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Formspree** (for contact form)
   - Create an account at [Formspree.io](https://formspree.io)
   - Generate a new form endpoint
   - Update the form URL in `src/components/ContactSection.jsx`:
     ```javascript
     const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
     ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel.com](https://vercel.com) and connect your GitHub account
3. Import your repository
4. Deploy with one click (Vercel auto-detects Vite configuration)

### Other Platforms

The project is compatible with:
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use `gh-pages` package for deployment
- **Surge**: Simple static hosting solution

## 🎨 Customization

### Colors & Themes
Modify the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Content Updates
- **Personal Information**: Update in respective component files
- **Projects**: Modify the projects array in `ProjectsSection.jsx`
- **Skills**: Update skill categories in `SkillsSection.jsx`

## 📈 Performance

- ⚡ Vite for fast development and building
- 🎯 Lazy loading for optimal performance
- 📦 Code splitting for efficient bundle size
- 🔧 Optimized images and assets

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Manish Kumar**

- 📧 Email: manishkumarmodi02@gmail.com
- 🌐 Portfolio: [manishmodiportfolio.vercel.app](https://manishmodiportfolio.vercel.app/)
- 💼 LinkedIn: [Manish Kumar](https://www.linkedin.com/in/manish-kumar-032b0b302/)
- 🐙 GitHub: [@manishmodi2](https://github.com/manishmodi2)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons provided by [Lucide React](https://lucide.dev)
- Form handling by [Formspree](https://formspree.io)
- Deployment platform: [Vercel](https://vercel.com)

---

<div align="center">
  <p>Made with ❤️ and React</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
