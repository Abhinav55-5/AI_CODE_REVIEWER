import generateContent from "../services/ai.services.js";

async function getResponse(req, res) {
    try {
        const { prompt, language = "JavaScript" } = req.body ?? {};

        if (typeof prompt !== "string" || !prompt.trim()) {
            return res.status(400).json({
                success: false,
                message: "Please provide code in the prompt field."
            });
        }

        const review = await generateContent(prompt, language);

        return res.status(200).json({
            success: true,
            review
        });
    } catch (error) {
        console.error("Gemini error:", error.message);

        return res.status(500).json({
            success: false,
            message: error.message || "Code review failed."
        });
    }
}

export default getResponse;