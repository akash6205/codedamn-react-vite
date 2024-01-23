import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("password");
  const [passwordlength, setPasswordLength] = useState(12);
  const [options, setOptions] = useState({
    number: true,
    upperCase: true,
    lowerCase: true,
    specialCharacter: true,
  });
  return (
    <>
      <h1>hello codedamn</h1>
      <input
        value={password}
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
        <input
          value={passwordlength}
          type="range"
          name="range"
          id="range"
          min={10}
          max={25}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>

      <div>
        <input
          checked={options.number}
          onChange={(e) => setOptions({ ...options, number: e.target.checked })}
          type="checkbox"
          name="number"
          id="number"
        />
        <label htmlFor="number">Number</label>
      </div>
      <div>
        <input
          checked={options.upperCase}
          onChange={(e) =>
            setOptions({ ...options, upperCase: e.target.checked })
          }
          type="checkbox"
          name="upperCase"
          id="upperCase"
        />
        <label htmlFor="upperCase">Upper Case</label>
      </div>
      <div>
        <input
          checked={options.lowerCase}
          onChange={(e) =>
            setOptions({ ...options, lowerCase: e.target.checked })
          }
          type="checkbox"
          name="lowerCase"
          id="lowerCase"
        />
        <label htmlFor="lowerCase">Lower Case</label>
      </div>
      <div>
        <input
          checked={options.specialCharacter}
          onChange={(e) =>
            setOptions({ ...options, specialCharacter: e.target.checked })
          }
          type="checkbox"
          name="specialCharacter"
          id="specialCharacter"
        />
        <label htmlFor="specialCharacter">Special Character</label>
      </div>
    </>
  );
}

export default App;
