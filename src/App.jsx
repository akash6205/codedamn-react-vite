import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordlength, setPasswordLength] = useState(12);
  const [options, setOptions] = useState({
    number: true,
    upperCase: true,
    lowerCase: true,
    specialCharacter: true,
  });
  const ref = useRef(null);

  const generatePassword = (length) => {
    if (options.lowerCase === false && options.upperCase === false) {
      alert("Please select atleast one case");
      return;
    }
    let result = "";
    let characters = "";
    const strObj = {
      number: "0123456789",
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      specialCharacter: "!@#$%^&*",
    };

    for (let [key, value] of Object.entries(options)) {
      if (value === true) {
        characters += strObj[key];
      }
    }

    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(result);
  };

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
        value={password}
      />
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}>
        <button
          onClick={() => {
            generatePassword(passwordlength);
          }}>
          Generate Password
        </button>
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
        <input
          type="range"
          name="range"
          id="range"
          min={10}
          max={25}
          value={passwordlength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <span>{passwordlength}</span>
      </div>

      <div>
        <input
          type="checkbox"
          name="number"
          id="number"
          checked={options.number}
          onChange={(e) => {
            setOptions({ ...options, number: e.target.checked });
          }}
        />
        <label htmlFor="number">Number</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="upperCase"
          id="upperCase"
          checked={options.upperCase}
          onChange={(e) => {
            setOptions({ ...options, upperCase: e.target.checked });
          }}
        />
        <label htmlFor="upperCase">Upper Case</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="lowerCase"
          id="lowerCase"
          checked={options.lowerCase}
          onChange={(e) => {
            setOptions({ ...options, lowerCase: e.target.checked });
          }}
        />
        <label htmlFor="lowerCase">Lower Case</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="specialCharacter"
          id="specialCharacter"
          checked={options.specialCharacter}
          onChange={(e) => {
            setOptions({ ...options, specialCharacter: e.target.checked });
          }}
        />
        <label htmlFor="specialCharacter">Special Character</label>
      </div>
    </>
  );
}

export default App;
