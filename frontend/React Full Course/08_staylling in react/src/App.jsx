import React from "react";
import "./App.css"; // Normal CSS
import styles from "./App.module.css"; // CSS Module
// import styled from "styled-components"; // Styled Components


function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Styling Methods</h1>

      {/* 1. Inline Styling */}
      <div
        style={{
          padding: "20px",
          border: "2px solid red",
          borderRadius: "10px",
          margin: "20px",
        }}
      >
        <h2 style={{ color: "red" }}>Inline Styling Card</h2>
        <p>This card is styled with inline CSS.</p>
      </div>

      {/* 2. Normal CSS */}
      <div className="cssCard">
        <h2 className="cssTitle">Normal CSS Card</h2>
        <p>This card is styled with App.css file.</p>
      </div>

      {/* 3. CSS Module */}
      <div className={styles.moduleCard}>
        <h2 className={styles.moduleTitle}>CSS Module Card</h2>
        <p>This card is styled with App.module.css file.</p>
      </div>

     
    </div>
  );
}

export default App;
