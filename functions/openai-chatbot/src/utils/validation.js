export const validateMessageStructure = (body) => {
    return body.messages.every(message => 
        typeof message === 'object' &&
        message !== null &&
        'role' in message &&
        'content' in message &&
        typeof message.role === 'string' &&
        typeof message.content === 'string' &&
        ['user', 'assistant'].includes(message.role)
    );
}