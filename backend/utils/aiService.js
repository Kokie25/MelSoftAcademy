const OpenAI = require('openai');

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const getEnhancedDescription = async (taskDescription) => {
    try {
        const chatCompletion = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Enhance this task description: ${taskDescription}`,
                },
            ],
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        throw error; 
    }
};

module.exports = {
    getEnhancedDescription,
};