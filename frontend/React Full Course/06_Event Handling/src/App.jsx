import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Event Handlers
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Event Handling - Counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement} style={{ margin: "5px" }}>➕ Increment</button>
      <button onClick={handleDecrement} style={{ margin: "5px" }}>➖ Decrement</button>
      <button onClick={handleReset} style={{ margin: "5px" }}>🔄 Reset</button>
    </div>
  );
}

export default App;
