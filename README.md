# skin | wardrobe as alter-ego

> A conceptual e-commerce experience for an underground fashion brand that treats clothing as identity artifacts.

![skin e-commerce](https://img.shields.io/badge/built%20with-React%20%2B%20TypeScript-61DAFB?style=flat-square) ![Vite](https://img.shields.io/badge/powered%20by-Vite-646CFF?style=flat-square) ![Gemini AI](https://img.shields.io/badge/AI-Gemini-4285F4?style=flat-square)

## 🎭 About

**skin** is not just an e-commerce site—it's a digital gallery of self-expression. The project explores fashion as a form of identity manifestation, combining aesthetic curation with AI-powered personalization.

### Features

- **Exhibition-Based Navigation**: Products organized into aesthetic movements (Soft, Alt Metal, Street Swag, Goblincore, Gyaru)
- **AI Mood Analysis**: Gemini AI interprets your mood and suggests matching aesthetics  
- **Virtual AR Try-On**: Conceptual "alter-ego scanner" for immersive product preview
- **Height-Filtered Reviews**: Social proof tailored to your body type
- **Poetic Product Language**: Every item has a "manifesto" instead of a traditional description
- **Premium Micro-Animations**: Glitch effects, floating elements, and dynamic hover states

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN) + Custom CSS
- **AI Integration**: Google Gemini API
- **Icons**: Lucide React
- **Fonts**: IBM Plex (Sans, Serif, Mono)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/elya200611-gif/skin-ecommerce.git
   cd skin-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Philosophy

The **skin** brand explores:
- **Anti-minimalism**: Rich textures, layered animations, conceptual depth
- **Digital Brutalism**: Raw typography, stark contrasts, noise overlays
- **Poetic Commerce**: Product descriptions as manifestos, shopping as ritual
- **Aesthetic Subcultures**: Embracing niche fashion movements (Goblincore, Gyaru, etc.)

## 📁 Project Structure

```
skin2/
├── App.tsx              # Main application component
├── index.tsx            # React entry point
├── index.html           # HTML template
├── index.css            # Global styles
├── constants.ts         # Product & exhibition data
├── types.ts             # TypeScript type definitions
├── services/
│   └── geminiService.ts # AI integration
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI features | Yes |

## 🤝 Contributing

This is a portfolio/concept project. Feel free to fork and experiment with your own aesthetic interpretations!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Google Gemini AI](https://ai.google.dev/)
- Design inspiration from digital brutalism, avant-garde fashion, and conceptual retail

---

<div align="center">
  <p><i>"Your wardrobe is your second skin. Wear your alter-ego."</i></p>
  <p>© 2026 skin archive</p>
</div>
