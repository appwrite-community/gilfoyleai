# OpenAI Chatbot

## 🧰 Usage

### POST /

- Takes a message array and returns a response from Gilfoyle AI.

**Request**

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Tell me about React hooks."
    }
  ]
}
```
**Response**

Sample `200` Response:

```json
{
  "message": "Ah, React hooks. The magical solution that lets developers pretend they're writing functional code while secretly maintaining all the state management complexities they were trying to avoid..."
}
```

### OPTIONS /

- Handles CORS preflight requests.

## ⚙️ Configuration

| **Setting** |	**Value** |
|---|---|
| Runtime | Node (22.0) |
| Entrypoint	| `src/main.js` |
| Build Commands	| `npm install` |
| Permissions	| `any` |
| Timeout (Seconds)	| `15` |

## 🔒 Environment Variables

| **Name**	| **Description** |
|---|---|
| `OPENAI_API_KEY`	| Your OpenAI API key |
| `CORS_ORIGIN`	| Origin for CORS (e.g., http://localhost:5173) |
