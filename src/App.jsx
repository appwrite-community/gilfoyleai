import { useState, useRef, useEffect } from 'react'
import Messages from './components/Messages'
import { sendChatMessage } from './services/chatService'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Oh great, another human seeking digital enlightenment. What do you want?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef(null)

  useEffect(() => {
    // Focus textarea whenever loading state changes to false
    if (!isLoading) {
      setTimeout(() => {
        textareaRef.current?.focus()
      }, 100)
    }
  }, [isLoading, messages])

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages(prev => [...prev, userMessage])
      setIsLoading(true)
      setInput('')

      try {
        const data = await sendChatMessage([...messages, userMessage])
        setMessages(prev => [...prev, { 
          role: 'assistant',
          content: data.message || 'Sorry, I could not process your request.'
        }])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { 
          role: 'assistant',
          content: 'Sorry, there was an error processing your request.'
        }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chat-container">
      <h1>GilfoyleAI</h1>
      <Messages messages={messages} />
      <div className="input-container">
        <textarea
          ref={textareaRef}
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          rows="1"
          disabled={isLoading}
          autoFocus
        />
        <button 
          className="send-button" 
          onClick={handleSend}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  )
}

export default App
