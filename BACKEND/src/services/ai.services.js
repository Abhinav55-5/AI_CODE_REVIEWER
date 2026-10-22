
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

async function generateContent(code, language = "JavaScript") {
    if (!apiKey) {
        throw new Error("GEMINI_API_KEY is missing from BACKEND/.env");
    }

    const ai = new GoogleGenAI({ apiKey });

    const models = [
        "gemini-3.5-flash",
        "gemini-3.6-flash",
        "gemini-flash-latest"
    ];

    let lastError;

    for (const model of models) {
        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                console.log(`Trying Gemini model: ${model}`);

                const response = await ai.models.generateContent({
                    model,
                    contents: `Act as an expert code reviewer. Review the following ${language} code.

Explain:
1. Bugs and logical errors
2. Security issues
3. Performance improvements
4. Best practices
5. Corrected code, if necessary

Code:
\`\`\`${language}
${code}
\`\`\``
                });

                console.log(`Success using model: ${model}`);
                return response.text;
            } catch (error) {
                lastError = error;

                const message = String(error?.message || error);
                console.error(`Model ${model} failed:`, message);

                // Retry only temporary rate-limit or availability errors.
                if (!/503|429|UNAVAILABLE|RESOURCE_EXHAUSTED/i.test(message)) {
                    throw error;
                }

                if (attempt === 0) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            }
        }
    }

    throw new Error(
        `All configured Gemini models failed. Last error: ${
            lastError?.message || String(lastError)
        }`
    );
}

export default generateContent;

