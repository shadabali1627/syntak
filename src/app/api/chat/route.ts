import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { getContext } from '@/lib/rag-utils';

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const { messages } = json;
        console.log("API received messages:", messages ? messages.length : 'none');


        if (!messages || !Array.isArray(messages)) {
            throw new Error('Invalid messages format');
        }

        // Get the latest user message logic
        const lastMessage = messages[messages.length - 1];
        const userQuery = lastMessage.content;

        // Retrieve context
        const context = getContext(userQuery);

        // Construct system prompt
        const systemPrompt = `You are the Syntak AI support assistant.
    You are a helpful, professional, and concise assistant for a premium digital agency.
    
    Use the following Context to answer the user question.
    Context:
    ${context}
    
    If the answer is not in the context, politely ask them to email support at hello@syntak.com.
    Do not make up information that is not in the context.
    Always query the context before answering.`;

        const result = await streamText({
            model: google('gemini-2.5-flash'),
            system: systemPrompt,
            messages: messages.map((m: any) => ({
                role: m.role,
                content: m.content
            })),
        });

        return result.toTextStreamResponse();
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
