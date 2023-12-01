import { OpenAIStream, StreamingTextResponse } from 'ai';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await fetch(
    "https://limcheekin-openchat-3-5-gguf.hf.space/v1/chat/completions", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "stream": true,
        "messages": messages
      })
    }
  );
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
