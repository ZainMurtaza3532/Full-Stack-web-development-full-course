import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⌨️ Character Counter</h1>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Characters: {text.length}</p>
    </div>
  );
}

export default App;
