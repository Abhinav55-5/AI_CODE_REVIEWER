# 🤖 AI Code Reviewer

An AI-powered code review application that analyzes source code and provides intelligent feedback to help developers identify bugs, improve code quality, and follow better coding practices.

The application uses Google's Gemini AI to review submitted code and generate actionable suggestions for improving readability, efficiency, maintainability, and overall code quality.

## ✨ Features

- **AI-Powered Code Analysis** — Analyze code using Google's Gemini AI models.
- **Bug Detection** — Identify potential logical errors and common programming mistakes.
- **Code Improvement Suggestions** — Receive recommendations for cleaner, more maintainable code.
- **Performance Insights** — Highlight potential inefficiencies and optimization opportunities.
- **Readable Review Results** — Present AI-generated feedback in a structured format.
- **REST API Backend** — Process code review requests through an Express.js API.
- **Environment-Based Configuration** — Securely manage API keys using environment variables.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Frontend development and build tooling |
| JavaScript | Application logic |
| Node.js | Backend JavaScript runtime |
| Express.js | Creating REST API endpoints |
| Google Gemini AI | AI-powered code analysis |
| `@google/genai` | Google GenAI SDK integration |
| Axios | Making HTTP requests from the frontend |
| dotenv | Managing environment variables |
| CORS | Enabling cross-origin requests |
| Postman | Testing backend API endpoints |

*The table lists the technologies used or intended for the project; remove any that are not present in your final implementation.*

## 🏗️ Project Architecture

```text
AI-CODE-REVIEWER/
│
├── FRONTEND/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── BACKEND/
│   ├── src/
│   │   ├── app.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   └── services/
│   │       └── ai.service.js
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
└── README.md
```

*The directory structure above is illustrative. Adjust the paths to match your actual repository.*

## ⚙️ How It Works

1. The user enters or submits source code through the frontend.
2. The frontend sends an HTTP request to the backend API.
3. Express.js receives the request and routes it to the appropriate handler.
4. The AI service sends the code to the configured Gemini model using the Google GenAI SDK.
5. Gemini analyzes the code and generates review feedback.
6. The backend returns the result to the frontend.
7. The frontend displays the review in a readable format.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd AI-CODE-REVIEWER
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository
