# GilfoyleAI - A Sarcastic AI Chat Application

GilfoyleAI is a React-based chat application that lets you interact with an AI assistant embodying the personality of Bertram Gilfoyle from the TV show "Silicon Valley." The assistant is sarcastic, witty, and provides responses on technology and programming topics with Gilfoyle's characteristic dry humor.

## Overview

This application consists of:
- A React frontend for the chat interface
- An Appwrite serverless function that integrates with OpenAI's API
- A sarcastic AI personality that responds to your queries with code snippets and technical advice

## Technologies Used

- **Frontend**: React 19, Vite
- **Backend**: Appwrite Functions, Node.js
- **AI**: OpenAI GPT-4o model
- **Styling**: CSS

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer)
- [Appwrite CLI](https://appwrite.io/docs/tooling/command-line/installation)
- [OpenAI API key](https://platform.openai.com/)

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd appwrite-fraqtory-workshop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory based on the `.env.example` template:
   ```
   VITE_API_URL='your-appwrite-function-endpoint-here'
   ```

4. Set up the Appwrite function:
   ```bash
   cd functions/openai-chatbot
   npm install
   ```

5. Deploy the function to Appwrite:
   ```bash
   # From the project root
   appwrite deploy function
   ```
   
   You'll need to set the following environment variables for the function:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `CORS_ORIGIN`: Your frontend URL (e.g., `http://localhost:5173`)

6. Start the development server:
   ```bash
   # From the project root
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:5173`

## Features

- Real-time chat interface
- Code snippet formatting
- Sarcastic responses in Gilfoyle's style
- Responsive design for desktop and mobile

## Project Structure

```
appwrite-fraqtory-workshop/
├── src/                     # Frontend React application
│   ├── components/          # React components
│   ├── services/            # API services
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── functions/               # Appwrite serverless functions
│   └── openai-chatbot/      # OpenAI integration function
│       ├── src/             # Function source code
│       └── package.json     # Function dependencies
└── appwrite.json            # Appwrite project configuration
```

## Usage

1. Type your message in the input field at the bottom of the screen
2. Press Enter or click "Send" to submit your query
3. The AI will respond with Gilfoyle's sarcastic wit and technical expertise
4. Code examples will be displayed in formatted code blocks

## License

[MIT License](LICENSE)

## Acknowledgements

- Built with [Appwrite](https://appwrite.io/)
- AI powered by [OpenAI](https://openai.com/)
- Inspired by the TV show "Silicon Valley"
