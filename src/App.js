import Email from "./components/Email";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [prompt, setPrompt] = useState({
    name: "",
    recipientName: "",
    subject: "",
    tone: "",
  });
  const [generateEmail, setGenerateEmail] = useState();
  const [loading, setLoading] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrompt((prevPrompt) => ({
      ...prevPrompt,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant that generates professional , friendly and formal emails.",
              },
              {
                role: "user",
                content: `Generate an email for ${prompt.name}. Recipient: ${prompt.recipientName}, Subject: ${prompt.subject}, Tone: ${prompt.tone}.`,
              },
            ],
            temperature: 0.7,
            max_tokens: 164,
            top_p: 1,
          }),
        }
      );
      const emailResult = await response.json();
      console.log(emailResult);
      setGenerateEmail(emailResult.choices[0].message.content);
      setLoading(false);
      setPrompt({
        name: "",
        recipientName: "",
        subject: "",
        tone: "",
      });
    } catch (e) {
      console.error("Error:", e);
      setLoading(false);
    }
  };
  return (
    <>
      <Form
        prompt={prompt}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Email generateEmail={generateEmail} />
    </>
  );
}

export default App;
