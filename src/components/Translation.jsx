import React from "react";

const Translation = ({ doStuff, setInput, result, loading }) => {
  return (
    <div className="translation">
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        DO YOUR STUFF!
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      <h3 className="result-text">{loading ? "Generating..." : ""}</h3>
    </div>
  );
};

export default Translation;
