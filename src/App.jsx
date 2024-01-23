import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>hello codedamn</h1>
      <input
        type="text"
        style={{
          color: "white",
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          fontSize: "20px",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}>
        <button>Generate Password</button>
        <button>Copy</button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}>
        <label>Length</label>
        <input type="range" name="range" id="range" min={10} max={25} />
      </div>

      <div>
        <input type="checkbox" name="number" id="number" />
        <label htmlFor="number">Number</label>
      </div>
      <div>
        <input type="checkbox" name="upperCase" id="upperCase" />
        <label htmlFor="upperCase">Upper Case</label>
      </div>
      <div>
        <input type="checkbox" name="lowerCase" id="lowerCase" />
        <label htmlFor="lowerCase">Lower Case</label>
      </div>
      <div>
        <input type="checkbox" name="specialCharacter" id="specialCharacter" />
        <label htmlFor="specialCharacter">Special Character</label>
      </div>
    </>
  );
}

export default App;
