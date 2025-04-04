const API_URL = import.meta.env.VITE_API_URL;

export const sendChatMessage = async (messages) => {
    // Transform messages to match OpenAI format
    const formattedMessages = messages.map(msg => ({
        role: msg.role || (msg.isUser ? "user" : "assistant"),
        content: msg.content || msg.text
    }));

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: formattedMessages })
    });

    if (!response.ok) {
        throw new Error('Failed to get response');
    }

    return response.json();
};