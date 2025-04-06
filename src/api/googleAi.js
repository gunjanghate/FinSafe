import model from "../lib/googleAi";
// Add this near the top of your code to debug

const getConversationTitle = async (userPrompt) => {
    try {
        const result = await model.generateContent(
            `Given a user prompt, generate a concise and informative title that accurately describes the conversation.
                You are a multilingual conversational assistant designed to:
                Help users understand loan eligibility.
                Guide users through the loan application process.
                Provide financial literacy tips related to loans, taxes, contracts, and wealth management.
                Respond in the input language.
                If the user asks anything not related to loans, taxes, contracts, or wealth management, respond with: "I cannot help you with that."
                Prompt: ${userPrompt}`,
        );
        return result.response.text();
    }
    catch (err) {
        console.log(`Error generating conversation title:${err.message}`);
        console.log("All env vars:", import.meta.env);

    }
};


const getAiResponse = async (userPrompt, chats = []) => {
    const history = [];
    chats.forEach(({ user_prompt, ai_response }) => {
        history.push(
            {
                role: 'user',
                parts: [{ text: user_prompt }]
            },
            {
                role: 'model',
                parts: [{ text: ai_response }]
            }
        )
    });


    try {
        model.generateCofig = { temperature: 1.0 };
        const chat = model.startChat({ history });
        const result = await chat.sendMessage(userPrompt);

        return result.response.text();

    } catch (err) {
        console.log(`Error generating AI response: ${err.message}`);
    }
};





export { getConversationTitle, getAiResponse }
