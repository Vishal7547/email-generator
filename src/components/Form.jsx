import React from "react";

const Form = ({ prompt, handleInputChange, handleSubmit, loading }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="row headingEmail text-center">
          <h1>Ai Email Writer</h1>
        </div>
        <div className="row description text-center">
          <p>Write a unique Ai email by filling all the fields</p>
        </div>
        <form className="inputFields  row text-center" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                value={prompt.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient Name"
                name="recipientName"
                value={prompt.recipientName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="What is your subject?"
                name="subject"
                value={prompt.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Professional, friendly, formal"
                name="tone"
                value={prompt.tone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row my-3 text-center">
            <button
              type="submit"
              className="w-50 btn btn-primary"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
