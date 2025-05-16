# 🧙‍♂️ StoryTeller AI

StoryTeller AI is a web-based application that uses AI to generate engaging stories from user prompts.  
Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, it provides a beautiful, responsive UI where users can write, generate, and explore stories.

![App Screenshot](./images/Screenshot%202025-05-15%20220221.png)

---

## ✨ Features

- 📄 Prompt-based story generation  
- 🧠 AI-powered storytelling  
- 🎨 Clean and modern UI with dark/light mode support  
- 📚 Story library for exploring generated content  
- ⚡ Fast performance using static site generation and client-side interactions  

---

## 🛠️ Tech Stack

- **Next.js** – React framework for SSR and SSG  
- **TypeScript** – Type safety across the app  
- **Tailwind CSS** – Utility-first styling  
- **Radix UI** – Accessible UI components  
- **OpenAI API** _(or custom AI backend)_ – for story generation  

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/storyteller-ai.git
cd storyteller-ai
npm install
# or
yarn install

Environment Variables

Create a .env.local file and add:

OPENAI_API_KEY=your_openai_api_key_here

Replace the value with your actual API key.
Development Server

npm run dev
# or
yarn dev

Visit: http://localhost:3000
📦 Build for Production

npm run build
npm start

🎨 Theming

Colors are managed using CSS variables in globals.css, configured in tailwind.config.ts.
You can toggle between light and dark themes from the UI.
📁 Project Structure

app/
  ├── page.tsx              # Main layout
  ├── stories/              # Story browser
  └── globals.css           # Global styles & themes

components/
  ├── Header.tsx            # Top navbar
  ├── StoryWriter.tsx       # Prompt input + generation
  ├── Story.tsx             # Display result
  └── ui/                   # Reusable components (e.g., Button)

public/
  └── assets/               # Icons, media

📄 License

This project is licensed under the MIT License.

Made with 💜 by Abdulsamet Dursun


Would you like me to:
- 📝 Inject this `README.md` directly into your project and re-zip it?
- Or 📥 provide it as a separate downloadable file?
