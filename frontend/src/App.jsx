
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleReview() {
    if (!code.trim()) {
      setError("Please paste your code first.");
      setReview("");
      return;
    }

    setLoading(true);
    setError("");
    setReview("");

    try {
      const response = await axios.post(
        "http://localhost:3000/ai/get-response",
        {
          prompt: code,
          language: language,
        }
      );

      setReview(response.data.review || "No review was returned.");
    } catch (err) {
      console.error("Review request failed:", err);

      setError(
        err.response?.data?.message ||
          "Could not connect to the backend. Make sure it is running on port 3000."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setCode("");
    setReview("");
    setError("");
  }

  return (
    <main className="container">
      <header className="header">
        <div className="brand">{"</>"} Code Reviewer AI</div>
        <h1>
          Make your code <span>better.</span>
        </h1>
        <p>
          Find bugs, understand logic issues, and improve your code with
          AI-powered reviews.
        </p>
      </header>

      <section className="review-panel">
        <div className="panel-heading">
          <h2>Code Editor</h2>

          <label htmlFor="language">Language</label>
          <select
            id="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            disabled={loading}
          >
            <option>JavaScript</option>
            <option>Python</option>
            <option>C++</option>
            <option>Java</option>
            <option>TypeScript</option>
            <option>C</option>
            <option>SQL</option>
          </select>
        </div>

        <textarea
          aria-label="Code editor"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder={`// Paste your ${language} code here...\n\nfunction add(a, b) {\n  return a - b;\n}`}
          spellCheck="false"
          disabled={loading}
        />

        <div className="editor-footer">
          <span>{code ? code.split("\n").length : 0} lines</span>
          <button
            className="clear-button"
            onClick={handleClear}
            disabled={loading}
          >
            Clear
          </button>
        </div>

        <button
          className="review-button"
          onClick={handleReview}
          disabled={loading}
        >
          {loading ? "Reviewing your code..." : "✦ Review My Code"}
        </button>

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        {review && (
          <section className="result-panel">
            <h2>AI Code Review</h2>
            <pre>{review}</pre>
            <button
              className="clear-button"
              onClick={() => navigator.clipboard.writeText(review)}
            >
              Copy Review
            </button>
          </section>
        )}
      </section>

      <footer>
        Built with React, Express and Google Gemini.
      </footer>
    </main>
  );
}

export default App;

