Your portfolio website
Purpose: A personal developer portfolio to showcase your experience, projects, resume, LinkedIn, and technical skills.
Tech stack: React + TypeScript + Tailwind CSS, with Vite/Parcel discussed during development.
Design direction: You wanted something inspired by portfolios such as Brittany Chiang and Josh Comeau—clean, modern, developer-focused, with a bit of personality.
Layout: You were aiming for a minimal/no-scroll feel, rather than a traditional long portfolio page.
Tone: You specifically liked a witty, slightly sassy/sarcastic personality rather than a generic corporate portfolio.
Main sections/components: You had worked with components along the lines of:
Sidebar
About
Education
Work
Projects
Mobile UX: You implemented a kebab/three-dot menu that opens a navigation overlay sliding in from the right.
Portfolio content: Your positioning was around being a Software Engineer / Full-Stack Developer with 5+ years of experience, particularly across healthcare and financial services.
Technical focus: React, Angular, TypeScript, Java/Spring Boot, Node.js, AWS, Azure, Kafka, FHIR/healthcare systems, etc.
Projects: Your AI-powered/open-source resume analysis platform is one of the projects you wanted to feature. It analyzes resumes against job descriptions.
MemeBot: You also added/experimented with a MemeBot on the portfolio, using an Express backend and OpenAI API. You were concerned about:
API key security
rate limiting
preventing spam/abuse
keeping AWS costs low
whether a proxy/backend was necessary
Deployment: We discussed deploying the portfolio/backend using AWS EC2, and you wanted a simple, inexpensive AWS setup rather than overengineering it.
Backend: Your MemeBot used an Express API with a /meme endpoint, environment variables, CORS, validation and length protection.
Frontend limits: You were also using localStorage to enforce a daily MemeBot usage limit on the frontend, while discussing why server-side rate limiting would still be necessary.
Your overall portfolio positioning: You wanted it to feel like a real engineer's portfolio rather than a résumé dumped onto a webpage—showing technical depth while still having personality.

One thing I don't currently know with certainty is the exact latest state of the website—e.g. what you've changed since we last discussed the UI, whether the MemeBot is still there, and what the current live version looks like.

If you're asking because you want to work on the portfolio now, I can pick up from this context rather than starting from scratch.