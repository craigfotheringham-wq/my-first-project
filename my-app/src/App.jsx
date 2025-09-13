import React from "react";

const reactLogo =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
const viteLogo =
  "https://vitejs.dev/logo.svg";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Hello World!</h1>
      <p>
        Visit{" "}
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} alt="React Logo" style={{ width: 32, verticalAlign: "middle" }} />
          React
        </a>
        {" "}and{" "}
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} alt="Vite Logo" style={{ width: 32, verticalAlign: "middle" }} />
          Vite
        </a>
      </p>
    </div>
  );
}